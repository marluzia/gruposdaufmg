/* ═══════════════════════════════════════════════════════════════════════════
   O FUNCIONAMENTO DA PÁGINA

   Este arquivo não precisa ser editado para incluir grupos, festas ou
   parceiros. Tudo isso mora nos arquivos dados-*.js, ao lado deste.
   ═══════════════════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ======================================================================
     CONFERÊNCIA DOS DADOS

     Um erro de digitação num arquivo de dados — uma aspa, uma vírgula — faz
     o navegador desistir do arquivo inteiro, e a página abriria vazia sem
     dizer por quê. Aqui a gente confere o que chegou e mostra o problema em
     português, na própria tela.

     O aviso só aparece para quem está editando: no arquivo aberto do
     computador ou num servidor de testes. Para quem visita a página
     publicada, um item com defeito é simplesmente omitido, sem recado
     técnico na frente.
     ====================================================================== */

  var editando =
    location.protocol === "file:" ||
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1";

  var problemas = [];

  function reclamar(arquivo, texto) {
    problemas.push({ arquivo: arquivo, texto: texto });
  }

  function existe(nome, valor, arquivo) {
    if (typeof valor === "undefined") {
      reclamar(
        arquivo,
        "O arquivo não foi lido até o fim, então " + nome + " não existe. " +
        "Quase sempre é uma aspa ou uma vírgula faltando. Confira a última " +
        "linha que você mexeu."
      );
      return false;
    }
    return true;
  }

  var temTextos    = existe("TEXTOS",    window.TEXTOS,    "js/dados-textos.js");
  var temContatos  = existe("CONTATOS",  window.CONTATOS,  "js/dados-textos.js");
  var temGrupos    = existe("GRUPOS",    window.GRUPOS,    "js/dados-grupos.js");
  var temCategorias= existe("CATEGORIAS",window.CATEGORIAS,"js/dados-grupos.js");
  var temFestas    = existe("FESTAS",    window.FESTAS,    "js/dados-festas.js");
  var temUnis      = existe("UNIVERSIDADES", window.UNIVERSIDADES, "js/dados-festas.js");
  var temParceiros = existe("PARCEIROS", window.PARCEIROS, "js/dados-parceiros.js");

  /* Daqui para baixo, nada pode explodir por causa de um arquivo faltando. */
  var textos    = temTextos     ? TEXTOS        : {};
  var contatos  = temContatos   ? CONTATOS      : {};
  var grupos    = temGrupos     ? GRUPOS        : [];
  var categorias= temCategorias ? CATEGORIAS    : {};
  var festas    = temFestas     ? FESTAS        : [];
  var unis      = temUnis       ? UNIVERSIDADES : {};
  var parceiros = temParceiros  ? PARCEIROS     : [];
  var ajustes   = (typeof window.AJUSTES === "object" && AJUSTES) ? AJUSTES : {};

  /* ------------------------------------------------------------- ajustes */

  /* Quantos itens cabem numa página. Um número torto aqui quebraria as duas
     listas de uma vez, então ele é conferido antes de valer. */
  var POR_PAGINA = 5;

  if (typeof ajustes.porPagina !== "undefined") {
    var pedido = Number(ajustes.porPagina);
    if (!isFinite(pedido) || pedido < 1) {
      reclamar(
        "js/dados-textos.js",
        'Em AJUSTES, porPagina está escrito como "' + ajustes.porPagina +
        '". Precisa ser um número inteiro maior que zero, sem aspas, ' +
        "assim: porPagina: 5. Por enquanto a página está usando 5."
      );
    } else {
      POR_PAGINA = Math.floor(pedido);
    }
  }

  var ABA_INICIAL = "grupos";

  if (typeof ajustes.comecarEm !== "undefined") {
    if (ajustes.comecarEm === "grupos" || ajustes.comecarEm === "festas") {
      ABA_INICIAL = ajustes.comecarEm;
    } else {
      reclamar(
        "js/dados-textos.js",
        'Em AJUSTES, comecarEm está escrito como "' + ajustes.comecarEm +
        '". Só valem duas palavras, entre aspas: "grupos" ou "festas". ' +
        "Por enquanto a página está começando pelos grupos."
      );
    }
  }

  /* ---------------------------------------------------------------- datas */

  var MESES = ["jan", "fev", "mar", "abr", "mai", "jun",
               "jul", "ago", "set", "out", "nov", "dez"];
  var SEMANA = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

  function dois(n) {
    return n < 10 ? "0" + n : String(n);
  }

  function hojeISO() {
    var d = new Date();
    return d.getFullYear() + "-" + dois(d.getMonth() + 1) + "-" + dois(d.getDate());
  }

  /* Devolve null quando a data não existe no calendário — 31 de fevereiro
     passa pelo formato, mas não pelo calendário. */
  function partesDaData(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ""));
    if (!m) return null;

    var ano = Number(m[1]), mes = Number(m[2]), dia = Number(m[3]);
    var d = new Date(ano, mes - 1, dia);

    if (d.getFullYear() !== ano || d.getMonth() !== mes - 1 || d.getDate() !== dia) {
      return null;
    }
    return { ano: ano, mes: mes, dia: dia, semana: d.getDay() };
  }

  /* ------------------------------------------------- conferências de item */

  function pareceLink(url) {
    return typeof url === "string" && /^https?:\/\/.+/.test(url.trim());
  }

  var gruposBons = grupos.filter(function (g, i) {
    var onde = 'do grupo "' + (g && g.nome ? g.nome : "sem nome") + '" (posição ' + (i + 1) + ")";

    if (!g || !g.nome) {
      reclamar("js/dados-grupos.js", "Um grupo na posição " + (i + 1) + " está sem nome.");
      return false;
    }
    if (!pareceLink(g.url)) {
      reclamar("js/dados-grupos.js", "O link " + onde + " está vazio ou não começa com https://");
      return false;
    }
    if (!categorias[g.cat]) {
      reclamar(
        "js/dados-grupos.js",
        'A categoria "' + g.cat + '" ' + onde + " não existe. " +
        "As que existem são: " + Object.keys(categorias).join(", ") + "."
      );
      return false;
    }
    return true;
  });

  var festasBoas = festas.filter(function (f, i) {
    var onde = 'da festa "' + (f && f.titulo ? f.titulo : "sem título") + '" (posição ' + (i + 1) + ")";

    if (!f || !f.titulo) {
      reclamar("js/dados-festas.js", "Uma festa na posição " + (i + 1) + " está sem título.");
      return false;
    }
    if (!partesDaData(f.data)) {
      reclamar(
        "js/dados-festas.js",
        'A data ' + onde + ' está escrita como "' + f.data + '". ' +
        'O formato é ano-mês-dia, assim: "2026-10-17".'
      );
      return false;
    }
    if (!unis[f.uni]) {
      reclamar(
        "js/dados-festas.js",
        'A universidade "' + f.uni + '" ' + onde + " não existe. " +
        "As que existem são: " + Object.keys(unis).join(", ") + "."
      );
      return false;
    }
    return true;
  });

  var parceirosBons = parceiros.filter(function (p, i) {
    if (!p || !p.nome) {
      reclamar("js/dados-parceiros.js", "Um parceiro na posição " + (i + 1) + " está sem nome.");
      return false;
    }
    if (!pareceLink(p.link)) {
      reclamar(
        "js/dados-parceiros.js",
        'O link do parceiro "' + p.nome + '" está vazio ou não começa com https://'
      );
      return false;
    }
    return true;
  });

  function mostrarProblemas() {
    var caixa = document.getElementById("diagnostico");
    if (!caixa || !editando || problemas.length === 0) return;

    var porArquivo = {};
    problemas.forEach(function (p) {
      (porArquivo[p.arquivo] = porArquivo[p.arquivo] || []).push(p.texto);
    });

    var html =
      "<strong>" + problemas.length +
      (problemas.length === 1 ? " coisa para arrumar" : " coisas para arrumar") +
      "</strong>";

    Object.keys(porArquivo).forEach(function (arquivo) {
      html += "<p class='diagnostico__arquivo'>" + arquivo + "</p><ul>";
      porArquivo[arquivo].forEach(function (t) {
        html += "<li>" + t + "</li>";
      });
      html += "</ul>";
    });

    html +=
      "<p class='diagnostico__nota'>Este aviso só aparece para você, " +
      "enquanto edita. Quem visitar a página publicada não vê nada disso.</p>";

    caixa.innerHTML = html;
    caixa.hidden = false;
  }

  /* ======================================================================
     AS PÁGINAS

     Uma lista com cem itens cansa o dedo e pesa no celular. Cada seção
     mostra POR_PAGINA itens por vez e ganha dois botões de virar página.
     A mesma peça serve para as festas e para os grupos.
     ====================================================================== */

  var semMovimento = window.matchMedia &&
                     window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function fazerPaginas(nomes, redesenhar) {
    var caixa   = document.getElementById(nomes.caixa);
    var voltar  = document.getElementById(nomes.voltar);
    var avancar = document.getElementById(nomes.avancar);
    var onde    = document.getElementById(nomes.onde);
    var topo    = document.getElementById(nomes.topo);

    var pagina = 1;

    /* Virar a página deixando o dedo no meio da lista faria a pessoa voltar
       rolando para achar o começo. */
    function subir() {
      if (!topo) return;
      topo.scrollIntoView({
        behavior: semMovimento ? "auto" : "smooth",
        block: "start"
      });
    }

    function andar(quanto) {
      pagina += quanto;
      redesenhar();
      subir();
    }

    if (voltar)  voltar.addEventListener("click",  function () { andar(-1); });
    if (avancar) avancar.addEventListener("click", function () { andar(1); });

    return {

      /* Trocar de filtro ou digitar na busca recomeça da primeira página:
         ficar na página 7 de uma lista que agora tem 2 itens seria um vazio
         sem explicação. */
      reiniciar: function () { pagina = 1; },

      /* Recebe a lista inteira já filtrada, devolve só o pedaço da vez e
         acerta os botões. */
      recortar: function (itens) {
        var ultima = Math.max(1, Math.ceil(itens.length / POR_PAGINA));
        if (pagina > ultima) pagina = ultima;
        if (pagina < 1) pagina = 1;

        if (caixa) caixa.hidden = itens.length <= POR_PAGINA;
        if (voltar)  voltar.disabled  = pagina <= 1;
        if (avancar) avancar.disabled = pagina >= ultima;
        if (onde) onde.textContent = "página " + pagina + " de " + ultima;

        return itens.slice((pagina - 1) * POR_PAGINA, pagina * POR_PAGINA);
      }
    };
  }

  /* ======================================================================
     OS TEXTOS

     Cada trecho editável do HTML carrega um data-texto com o nome da chave.
     Assim o HTML fica limpo e o arquivo de textos manda em tudo.
     ====================================================================== */

  function aplicarTextos() {
    var alvos = document.querySelectorAll("[data-texto]");
    Array.prototype.forEach.call(alvos, function (el) {
      var chave = el.getAttribute("data-texto");
      if (typeof textos[chave] === "string") el.textContent = textos[chave];
    });

    var campos = document.querySelectorAll("[data-texto-dica]");
    Array.prototype.forEach.call(campos, function (el) {
      var chave = el.getAttribute("data-texto-dica");
      if (typeof textos[chave] === "string") el.placeholder = textos[chave];
    });
  }

  /* ======================================================================
     O CARROSSEL DE PARCEIROS
     ====================================================================== */

  function montarParceiros() {
    var trilho = document.getElementById("parceiros");
    var bolinhas = document.getElementById("parceiros-bolinhas");
    var secao = document.getElementById("secao-parceiros");
    if (!trilho) return;

    if (parceirosBons.length === 0) {
      if (secao) secao.hidden = true;
      return;
    }

    trilho.innerHTML = parceirosBons.map(function (p) {
      var logo = p.logo
        ? '<img class="parceiro__logo" src="' + p.logo + '" alt="" loading="lazy">'
        : "";

      return (
        '<article class="parceiro">' +
          '<div class="parceiro__topo">' +
            logo +
            '<div>' +
              '<p class="parceiro__selo">' + (p.selo || "") + '</p>' +
              '<h2 class="parceiro__nome">' + p.nome + '</h2>' +
            '</div>' +
          '</div>' +
          '<p class="parceiro__chamada">' + (p.chamada || "") + '</p>' +
          '<a class="parceiro__cta" href="' + p.link + '" target="_blank" rel="noopener">' +
            (p.botao || "Saber mais") +
            '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
              '<path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" stroke-width="2" ' +
              'stroke-linecap="round" stroke-linejoin="round"/>' +
            '</svg>' +
          '</a>' +
        '</article>'
      );
    }).join("");

    /* Com um parceiro só não há o que navegar: as bolinhas e o avanço
       automático ficariam ali enganando o dedo. */
    if (parceirosBons.length < 2) {
      if (bolinhas) bolinhas.hidden = true;
      return;
    }

    bolinhas.innerHTML = parceirosBons.map(function (p, i) {
      return '<button type="button" class="bolinha" aria-label="Ver ' + p.nome + '"' +
             (i === 0 ? ' aria-current="true"' : "") + "></button>";
    }).join("");

    var atual = 0;

    /* Quem pediu menos movimento no sistema recebe o salto direto, sem o
       deslizamento — e sem avanço automático nenhum. */
    var calmo = semMovimento;

    function irPara(i) {
      atual = (i + parceirosBons.length) % parceirosBons.length;
      trilho.scrollTo({
        left: trilho.clientWidth * atual,
        behavior: calmo ? "auto" : "smooth"
      });
    }

    function marcarBolinha() {
      var visivel = Math.round(trilho.scrollLeft / trilho.clientWidth);
      atual = Math.max(0, Math.min(parceirosBons.length - 1, visivel));
      Array.prototype.forEach.call(bolinhas.children, function (b, i) {
        if (i === atual) b.setAttribute("aria-current", "true");
        else b.removeAttribute("aria-current");
      });
    }

    Array.prototype.forEach.call(bolinhas.children, function (b, i) {
      b.addEventListener("click", function () {
        irPara(i);
        adiar();
      });
    });

    /* O scroll manda: quem desliza com o dedo move o trilho direto, sem
       passar por aqui, e as bolinhas precisam acompanhar assim mesmo. */
    var esperando;
    trilho.addEventListener("scroll", function () {
      clearTimeout(esperando);
      esperando = setTimeout(marcarBolinha, 90);
    });

    var relogio = null;

    function tocar() {
      if (calmo) return;
      parar();
      relogio = setInterval(function () { irPara(atual + 1); }, 6000);
    }

    function parar() {
      if (relogio) clearInterval(relogio);
      relogio = null;
    }

    /* Quem acabou de tocar numa bolinha está escolhendo: avançar sozinho
       logo em seguida seria tirar a página da mão da pessoa. */
    function adiar() {
      parar();
      setTimeout(tocar, 9000);
    }

    ["mouseenter", "touchstart", "focusin"].forEach(function (evento) {
      trilho.addEventListener(evento, parar, { passive: true });
    });
    ["mouseleave", "focusout"].forEach(function (evento) {
      trilho.addEventListener(evento, tocar);
    });

    /* Fora da tela, não faz sentido continuar girando. */
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entradas) {
        entradas[0].isIntersecting ? tocar() : parar();
      }, { threshold: 0.35 }).observe(trilho);
    } else {
      tocar();
    }
  }

  /* ======================================================================
     AS FESTAS
     ====================================================================== */

  function montarFestas() {
    var lista = document.getElementById("festas-lista");
    var chips = document.getElementById("festas-chips");
    var campoDia = document.getElementById("festas-dia");
    var limparDia = document.getElementById("festas-limpar");
    var vazio = document.getElementById("festas-vazio");
    var secao = document.getElementById("secao-festas");
    if (!lista) return 0;

    var uniEscolhida = "todas";
    var diaEscolhido = "";

    var paginas = fazerPaginas({
      caixa:   "festas-paginas",
      voltar:  "festas-voltar",
      avancar: "festas-avancar",
      onde:    "festas-onde",
      topo:    "festas-titulo"
    }, function () { desenhar(); });

    /* Festa que já passou some sozinha: ninguém precisa lembrar de apagar. */
    function futuras() {
      var hoje = hojeISO();
      return festasBoas
        .filter(function (f) { return f.data >= hoje; })
        .sort(function (a, b) { return a.data < b.data ? -1 : a.data > b.data ? 1 : 0; });
    }

    var agenda = futuras();

    /* Sem nenhuma festa futura, a seção inteira sai do caminho em vez de
       ficar um título solto sobre um espaço vazio. */
    if (agenda.length === 0) {
      if (secao) secao.hidden = true;
      return 0;
    }

    /* Só as faculdades que têm festa marcada viram botão. */
    var usadas = {};
    agenda.forEach(function (f) { usadas[f.uni] = true; });

    var botoes = [{ id: "todas", nome: "Todas" }].concat(
      Object.keys(unis)
        .filter(function (id) { return usadas[id]; })
        .map(function (id) { return { id: id, nome: unis[id].nome }; })
    );

    chips.innerHTML = botoes.map(function (b, i) {
      return '<button type="button" class="chip" data-uni="' + b.id + '"' +
             ' aria-pressed="' + (i === 0) + '">' + b.nome + "</button>";
    }).join("");

    Array.prototype.forEach.call(chips.children, function (b) {
      b.addEventListener("click", function () {
        uniEscolhida = b.getAttribute("data-uni");
        Array.prototype.forEach.call(chips.children, function (o) {
          o.setAttribute("aria-pressed", o === b ? "true" : "false");
        });
        paginas.reiniciar();
        desenhar();
      });
    });

    if (campoDia) {
      campoDia.min = hojeISO();
      campoDia.addEventListener("change", function () {
        diaEscolhido = campoDia.value;
        paginas.reiniciar();
        desenhar();
      });
    }

    if (limparDia) {
      limparDia.addEventListener("click", function () {
        diaEscolhido = "";
        if (campoDia) campoDia.value = "";
        paginas.reiniciar();
        desenhar();
      });
    }

    function cartao(f) {
      var d = partesDaData(f.data);
      var u = unis[f.uni];

      var botao = function (link, texto, tipo) {
        if (!pareceLink(link)) return "";
        return '<a class="festa__link festa__link--' + tipo + '" href="' + link +
               '" target="_blank" rel="noopener">' + texto + "</a>";
      };

      return (
        '<li class="festa" style="--cor:' + u.cor + '">' +
          '<div class="festa__data">' +
            '<span class="festa__semana">' + SEMANA[d.semana] + "</span>" +
            '<strong class="festa__dia">' + d.dia + "</strong>" +
            '<span class="festa__mes">' + MESES[d.mes - 1] + "</span>" +
          "</div>" +
          '<div class="festa__corpo">' +
            '<p class="festa__uni">' + u.nome +
              (f.hora ? ' <span class="festa__hora">· ' + f.hora + "</span>" : "") +
            "</p>" +
            '<h3 class="festa__titulo">' + f.titulo + "</h3>" +
            (f.descricao ? '<p class="festa__descricao">' + f.descricao + "</p>" : "") +
            '<div class="festa__links">' +
              botao(f.ingresso, "Ingresso", "ingresso") +
              botao(f.perfil, "Perfil", "perfil") +
              botao(f.grupo, "Grupo", "grupo") +
            "</div>" +
          "</div>" +
        "</li>"
      );
    }

    function desenhar() {
      var visiveis = agenda.filter(function (f) {
        var daUni = uniEscolhida === "todas" || f.uni === uniEscolhida;
        var doDia = diaEscolhido === "" || f.data === diaEscolhido;
        return daUni && doDia;
      });

      lista.innerHTML = paginas.recortar(visiveis).map(cartao).join("");
      vazio.hidden = visiveis.length > 0;

      if (limparDia) limparDia.hidden = diaEscolhido === "";

      if (visiveis.length === 0) {
        vazio.textContent = diaEscolhido
          ? "Nenhuma festa nesse dia. Tente outra data ou veja todas."
          : (textos.festasVazio || "Nenhuma festa por aqui.");
      }
    }

    desenhar();
    return agenda.length;
  }

  /* ======================================================================
     OS GRUPOS
     ====================================================================== */

  function montarGrupos() {
    var lista = document.getElementById("lista");
    var vazio = document.getElementById("vazio");
    var contagem = document.getElementById("contagem");
    var busca = document.getElementById("busca");
    var chips = document.getElementById("chips");
    if (!lista) return 0;

    var filtro = "todos";
    var termo = "";

    var paginas = fazerPaginas({
      caixa:   "grupos-paginas",
      voltar:  "grupos-voltar",
      avancar: "grupos-avancar",
      onde:    "grupos-onde",
      topo:    "grupos-titulo"
    }, function () { desenhar(); });

    /* "Brechó" encontra "brecho", e vice-versa: ninguém digita acento no
       celular com pressa. */
    function simples(texto) {
      return String(texto).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    }

    function comPonto(n) {
      return n.toLocaleString("pt-BR");
    }

    function cartao(g) {
      var c = categorias[g.cat];
      var etiqueta = "";
      var membros = "";

      if (g.membros === "lotado") {
        etiqueta = '<span class="etiqueta etiqueta--lotado">lotado</span>';
      } else if (g.membros === 0) {
        etiqueta = '<span class="etiqueta etiqueta--novo">novo</span>';
        membros = "grupo recém-criado";
      } else {
        membros = comPonto(g.membros) + " membros";
      }

      return (
        '<li><a class="grupo" style="--cor:' + c.cor + '" target="_blank" rel="noopener" href="' + g.url + '">' +
          '<span class="grupo__texto">' +
            '<span class="grupo__nome">' + g.nome + "</span>" +
            '<span class="grupo__meta">' +
              '<i class="ponto"></i>' + c.nome + (membros ? " · " + membros : "") + etiqueta +
            "</span>" +
          "</span>" +
          '<span class="grupo__entrar">entrar →</span>' +
        "</a></li>"
      );
    }

    function desenhar() {
      var visiveis = gruposBons.filter(function (g) {
        var daCategoria = filtro === "todos" || g.cat === filtro;
        var doTermo =
          termo === "" ||
          simples(g.nome).indexOf(termo) !== -1 ||
          simples(categorias[g.cat].nome).indexOf(termo) !== -1;
        return daCategoria && doTermo;
      });

      lista.innerHTML = paginas.recortar(visiveis).map(cartao).join("");
      vazio.hidden = visiveis.length > 0;

      var pessoas = visiveis.reduce(function (soma, g) {
        return soma + (typeof g.membros === "number" ? g.membros : 0);
      }, 0);

      contagem.textContent = visiveis.length === 0
        ? ""
        : visiveis.length + (visiveis.length === 1 ? " grupo" : " grupos") +
          " · " + comPonto(pessoas) + " pessoas";
    }

    var usadas = {};
    gruposBons.forEach(function (g) { usadas[g.cat] = true; });

    var botoes = [{ id: "todos", nome: "Todos" }].concat(
      Object.keys(categorias)
        .filter(function (id) { return usadas[id]; })
        .map(function (id) { return { id: id, nome: categorias[id].nome }; })
    );

    chips.innerHTML = botoes.map(function (b, i) {
      return '<button type="button" class="chip" data-cat="' + b.id + '"' +
             ' aria-pressed="' + (i === 0) + '">' + b.nome + "</button>";
    }).join("");

    Array.prototype.forEach.call(chips.children, function (b) {
      b.addEventListener("click", function () {
        filtro = b.getAttribute("data-cat");
        Array.prototype.forEach.call(chips.children, function (o) {
          o.setAttribute("aria-pressed", o === b ? "true" : "false");
        });
        paginas.reiniciar();
        desenhar();
      });
    });

    busca.addEventListener("input", function () {
      termo = simples(busca.value.trim());
      paginas.reiniciar();
      desenhar();
    });

    desenhar();
    return gruposBons.length;
  }

  /* ======================================================================
     OS DOIS BOTÕES

     As duas seções ocupam o mesmo lugar na tela: quem chega vê uma, e a
     outra fica a um toque de distância. Sem isso a pessoa que quer um grupo
     precisaria rolar a agenda inteira de festas para chegar lá.
     ====================================================================== */

  function montarAbas(quantosGrupos, quantasFestas) {
    var barra = document.getElementById("abas");
    var botaoGrupos = document.getElementById("aba-grupos");
    var botaoFestas = document.getElementById("aba-festas");
    var secaoGrupos = document.getElementById("secao-grupos");
    var secaoFestas = document.getElementById("secao-festas");
    if (!barra || !botaoGrupos || !botaoFestas) return;

    var contaGrupos = document.getElementById("aba-grupos-conta");
    var contaFestas = document.getElementById("aba-festas-conta");
    if (contaGrupos) contaGrupos.textContent = quantosGrupos ? String(quantosGrupos) : "";
    if (contaFestas) contaFestas.textContent = quantasFestas ? String(quantasFestas) : "";

    /* Sem festa marcada não há segunda seção, e dois botões para uma coisa
       só confundem mais do que ajudam. */
    if (!quantasFestas) {
      barra.hidden = true;
      if (secaoGrupos) secaoGrupos.hidden = false;
      return;
    }

    var abas = [
      { botao: botaoGrupos, painel: secaoGrupos, id: "grupos" },
      { botao: botaoFestas, painel: secaoFestas, id: "festas" }
    ];

    function mostrar(id, levarOFoco) {
      abas.forEach(function (a) {
        var escolhida = a.id === id;
        a.botao.setAttribute("aria-selected", escolhida ? "true" : "false");
        a.botao.tabIndex = escolhida ? 0 : -1;
        if (a.painel) a.painel.hidden = !escolhida;
        if (escolhida && levarOFoco) a.botao.focus();
      });

      /* O endereço passa a terminar em #festas ou #grupos, então o link
         copiado abre direto na seção certa. replaceState em vez de mudar o
         hash: mudar o hash empurraria a tela para baixo. */
      if (window.history && history.replaceState) {
        history.replaceState(null, "", "#" + id);
      }
    }

    abas.forEach(function (a) {
      a.botao.addEventListener("click", function () { mostrar(a.id, false); });
    });

    /* Seta para o lado troca de aba, que é como um leitor de tela espera que
       uma fileira de abas funcione. */
    barra.addEventListener("keydown", function (e) {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      var atual = botaoGrupos.getAttribute("aria-selected") === "true" ? 0 : 1;
      mostrar(abas[atual === 0 ? 1 : 0].id, true);
      e.preventDefault();
    });

    function pedidoNoEndereco() {
      var pedido = String(location.hash || "").replace("#", "");
      return (pedido === "festas" || pedido === "grupos") ? pedido : "";
    }

    /* Alguém pode chegar por um link com #festas no fim, ou editar o endereço
       na barra sem recarregar a página. Nos dois casos a aba acompanha. */
    window.addEventListener("hashchange", function () {
      var pedido = pedidoNoEndereco();
      if (pedido) mostrar(pedido, false);
    });

    mostrar(pedidoNoEndereco() || ABA_INICIAL, false);
  }

  /* ======================================================================
     O PAINEL DE NÚMEROS
     ====================================================================== */

  function montarPainel() {
    var elGrupos = document.getElementById("painel-grupos");
    var elMembros = document.getElementById("painel-membros");
    var elMedia = document.getElementById("painel-media");
    if (!elGrupos) return;

    var comNumero = gruposBons.filter(function (g) { return typeof g.membros === "number" && g.membros > 0; });
    var total = comNumero.reduce(function (s, g) { return s + g.membros; }, 0);
    var media = comNumero.length ? Math.round(total / comNumero.length) : 0;

    elGrupos.textContent = gruposBons.length.toLocaleString("pt-BR");
    elMembros.textContent = total.toLocaleString("pt-BR");
    elMedia.textContent = media.toLocaleString("pt-BR");
  }

  /* ======================================================================
     CONTATOS: PEDIDOS DE LISTA, PIX E RODAPÉ
     ====================================================================== */

  function montarContatos() {
    /* O texto é montado aqui e codificado pelo navegador: escrever o link
       já pronto à mão é onde nasce acento quebrado no WhatsApp. */
    function pedido(numero, texto) {
      return "https://wa.me/" + numero + "?text=" + encodeURIComponent(texto);
    }

    var listas = contatos.whatsappListas || "";
    var suporte = contatos.whatsappSuporte || "";

    var btLista = document.getElementById("lista-completa");
    if (btLista && listas) {
      btLista.href = pedido(listas,
        "Ei, gostaria de receber a lista completa dos grupos de WhatsApp da UFMG, me envie por favor?");
    }

    var btCaronas = document.getElementById("caronas");
    if (btCaronas && listas) {
      btCaronas.href = pedido(listas,
        "Opa, quero receber a lista dos grupos de caronas da UFMG, me envie por favor?");
    }

    var btSugerir = document.getElementById("sugerir");
    if (btSugerir && listas) {
      btSugerir.href = pedido(listas, "Oi, queria sugerir um grupo novo para a lista da UFMG.");
    }

    var btSuporte = document.getElementById("suporte");
    if (btSuporte && suporte) {
      btSuporte.href = "https://wa.me/" + suporte;
      btSuporte.textContent = contatos.suporteEscrito || suporte;
    }

    /* ---- o pix ---- */
    var botaoPix = document.getElementById("copiar-pix");
    var numeroPix = document.getElementById("pix-numero");
    var rotuloPix = document.getElementById("pix-rotulo");
    var chave = contatos.pix || "";

    if (!botaoPix || !chave) return;

    numeroPix.textContent = chave;
    var rotuloPadrao = textos.pixNota || "Chave pix — toque para copiar";
    rotuloPix.textContent = rotuloPadrao;

    function avisar(texto) {
      rotuloPix.textContent = texto;
      setTimeout(function () { rotuloPix.textContent = rotuloPadrao; }, 2400);
    }

    /* Plano B na certa: navigator.clipboard só existe em HTTPS. Num link
       aberto por http, ou num navegador antigo, o campo invisível resolve. */
    function copiarNoBraco(texto) {
      try {
        var campo = document.createElement("textarea");
        campo.value = texto;
        campo.setAttribute("readonly", "");
        campo.style.position = "fixed";
        campo.style.opacity = "0";
        document.body.appendChild(campo);
        campo.select();
        document.execCommand("copy");
        document.body.removeChild(campo);
        return true;
      } catch (e) {
        return false;
      }
    }

    botaoPix.addEventListener("click", function () {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(chave).then(
          function () { avisar("Copiada!"); },
          function () { avisar("Copie à mão: " + chave); }
        );
        return;
      }
      avisar(copiarNoBraco(chave) ? "Copiada!" : "Copie à mão: " + chave);
    });
  }

  /* ========================================================== começa aqui */

  aplicarTextos();
  montarParceiros();

  /* As duas seções contam quantos itens têm; os botões usam esses números e
     somem quando não há festa nenhuma marcada. */
  var quantasFestas = montarFestas();
  var quantosGrupos = montarGrupos();
  montarAbas(quantosGrupos, quantasFestas);

  montarPainel();
  montarContatos();
  mostrarProblemas();
})();
