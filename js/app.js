/* =========================================================================
   O comportamento da página: busca, filtros, os pedidos de lista e o botão
   de copiar o pix.
   ─────────────────────────────────────────────────────────────────────────
   Este arquivo não conhece nenhum grupo. Tudo o que ele desenha vem de
   dados.js, que é carregado antes — por isso GRUPOS e CATEGORIAS já existem
   aqui dentro.
   ========================================================================= */

(function () {
  "use strict";

  var lista = document.getElementById("lista");
  var vazio = document.getElementById("vazio");
  var contagem = document.getElementById("contagem");
  var busca = document.getElementById("busca");
  var chips = document.getElementById("chips");

  var filtro = "todos";
  var termo = "";

  /* ------------------------------------------------------------ apoio --- */

  /* "Brechó" encontra "brecho", e vice-versa: ninguém digita acento no
     celular com pressa. */
  function simples(texto) {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "");
  }

  function comPonto(n) {
    return n.toLocaleString("pt-BR");
  }

  /* ------------------------------------------------------------ lista --- */

  function cartao(g) {
    var c = CATEGORIAS[g.cat];
    var item = document.createElement("li");

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

    item.innerHTML =
      '<a class="grupo" style="--cor:' + c.cor + '" target="_blank" rel="noopener" href="' + g.url + '">' +
        '<span class="grupo__texto">' +
          '<span class="grupo__nome">' + g.nome + '</span>' +
          '<span class="grupo__meta">' +
            '<i class="ponto"></i>' + c.nome + (membros ? ' · ' + membros : '') + etiqueta +
          '</span>' +
        '</span>' +
        '<span class="grupo__entrar">entrar →</span>' +
      '</a>';

    return item;
  }

  function desenhar() {
    var visiveis = GRUPOS.filter(function (g) {
      var daCategoria = filtro === "todos" || g.cat === filtro;
      var doTermo =
        termo === "" ||
        simples(g.nome).indexOf(termo) !== -1 ||
        simples(CATEGORIAS[g.cat].nome).indexOf(termo) !== -1;
      return daCategoria && doTermo;
    });

    lista.innerHTML = "";
    visiveis.forEach(function (g) {
      lista.appendChild(cartao(g));
    });

    vazio.hidden = visiveis.length > 0;

    var pessoas = visiveis.reduce(function (soma, g) {
      return soma + (typeof g.membros === "number" ? g.membros : 0);
    }, 0);

    contagem.textContent =
      visiveis.length === 0
        ? ""
        : visiveis.length + (visiveis.length === 1 ? " grupo" : " grupos") +
          " · " + comPonto(pessoas) + " pessoas";
  }

  /* ------------------------------------------------------------ chips --- */

  function montarChips() {
    var usadas = {};
    GRUPOS.forEach(function (g) {
      usadas[g.cat] = (usadas[g.cat] || 0) + 1;
    });

    var todas = [{ id: "todos", nome: "Todos" }].concat(
      Object.keys(CATEGORIAS)
        .filter(function (id) { return usadas[id]; })
        .map(function (id) { return { id: id, nome: CATEGORIAS[id].nome }; })
    );

    todas.forEach(function (c) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "chip";
      b.textContent = c.nome;
      b.setAttribute("aria-pressed", c.id === filtro ? "true" : "false");

      b.addEventListener("click", function () {
        filtro = c.id;
        Array.prototype.forEach.call(chips.children, function (outro) {
          outro.setAttribute("aria-pressed", outro === b ? "true" : "false");
        });
        desenhar();
      });

      chips.appendChild(b);
    });
  }

  busca.addEventListener("input", function () {
    termo = simples(busca.value.trim());
    desenhar();
  });

  /* --------------------------------------------- pedidos por WhatsApp --- */

  /* O texto é montado aqui e codificado pelo navegador: escrever o link já
     pronto à mão é onde nasce acento quebrado. */
  function pedido(texto) {
    return "https://wa.me/" + TELEFONE_LISTAS + "?text=" + encodeURIComponent(texto);
  }

  document.getElementById("lista1").href = pedido(
    "Ei, gostaria de receber a lista 1 dos grupos de WhatsApp da UFMG, me envie por favor?"
  );

  document.getElementById("caronas").href = pedido(
    "Opa, quero receber a lista dos grupos de caronas da UFMG, me envie por favor?"
  );

  /* -------------------------------------------------------------- pix --- */

  var botaoPix = document.getElementById("copiar-pix");
  var rotuloPix = document.getElementById("pix-rotulo");
  var ROTULO_PADRAO = "Chave pix — toque para copiar";

  function avisar(texto) {
    rotuloPix.textContent = texto;
    setTimeout(function () {
      rotuloPix.textContent = ROTULO_PADRAO;
    }, 2400);
  }

  /* Plano B na certa: navigator.clipboard só existe em HTTPS. Num link
     aberto por http, ou num navegador antigo, o campo invisível resolve. */
  function copiarNoBraço(texto) {
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
      navigator.clipboard.writeText(CHAVE_PIX).then(
        function () { avisar("Copiada!"); },
        function () { avisar("Copie à mão: " + CHAVE_PIX); }
      );
      return;
    }

    avisar(copiarNoBraço(CHAVE_PIX) ? "Copiada!" : "Copie à mão: " + CHAVE_PIX);
  });

  /* ------------------------------------------------------------ início --- */

  montarChips();
  desenhar();
})();
