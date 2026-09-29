/* ═══════════════════════════════════════════════════════════════════════════
   OS TEXTOS DA PÁGINA
   ═══════════════════════════════════════════════════════════════════════════

   Tudo o que está escrito na página, fora os grupos e as festas, mora aqui.
   Para mudar um título de seção ou uma frase, troque só o texto entre aspas
   e salve. A palavra da esquerda não pode mudar.

   Se precisar usar aspas dentro de um texto, use as curvas: “assim”.
   ═══════════════════════════════════════════════════════════════════════════ */

var TEXTOS = {

  /* ---- O alto da página ---- */
  tarja:      "Uma página oferecida por CEDER",
  titulo:     "Grupos da UFMG",
  subtitulo:  "Inciativa independente. Entre nas comunidades do seu interesse.",
  atualizado: "Atualizada em 26/09/2026",

  /* ---- Os dois botões que escolhem o que aparece ---- */
  abaGrupos: "Grupos",
  abaFestas: "Festas",

  /* ---- Os botões de passar de página ---- */
  paginaAnterior: "anterior",
  paginaProxima:  "próxima",

  /* ---- A seção das festas ---- */
  festasTitulo:    "Festas universitárias",
  festasSubtitulo: "As próximas primeiro. Escolha a faculdade ou procure por um dia.",
  festasFiltroDia: "Ver um dia específico",
  festasVazio:     "Nenhuma festa cadastrada para as próximas semanas.",

  /* ---- A seção dos grupos ---- */
  gruposTitulo:    "Todos os grupos",
  gruposSubtitulo: "Toque no grupo para entrar direto no WhatsApp.",
  gruposBusca:     "Buscar grupo: república, bandeco, estágio…",
  gruposVazio:     "Nenhum grupo com esse nome. Tente outra palavra ou peça as outras listas mais abaixo.",

  /* ---- O bloco das outras listas ---- */
  listasTitulo:   "Faltou alguma coisa?",
  listasTexto:    "Os grupos que não estão aqui vêm por WhatsApp, é só pedir.",
  listaBotao:     "Pedir a lista completa",
  listaBotaoNota: "todos os grupos da UFMG",
  caronasBotao:   "Pedir a lista de caronas",
  caronasNota:    "grupos de carona da UFMG",

  /* ---- O bloco do pix ---- */
  apoioTitulo: "Ajude a manter os grupos",
  apoioTexto:  "Administrar mais de cem grupos toma tempo e paciência. Qualquer valor ajuda, e sugestões de grupos novos são bem-vindas no privado.",
  pixNota:     "Chave pix (toque para copiar)",
  sugerirBotao: "Sugerir um grupo novo",
  sugerirNota:  "falar no privado",

  /* ---- O rodapé ---- */
  rodapeAviso: "Grupo lotado ou link quebrado? Avise no WhatsApp",
  rodapeIsencao: "Página independente, mantida pela comunidade. Sem vínculo com a administração da UFMG."

};


/* ═══════════════════════════════════════════════════════════════════════════
   OS AJUSTES

   Duas decisões sobre o formato da página. São números e palavras soltas,
   não frases: mexa com calma.
   ═══════════════════════════════════════════════════════════════════════════ */

var AJUSTES = {

  /* Quantos grupos e quantas festas aparecem de uma vez. O resto vai para as
     próximas páginas. Cinco é o que cabe na tela do celular sem rolagem
     infinita; se quiser mais, troque o número (sem aspas). */
  porPagina: 5,

  /* Qual dos dois botões já vem apertado quando a página abre.
     Só duas respostas valem: "grupos" ou "festas". */
  comecarEm: "grupos"

};


/* ═══════════════════════════════════════════════════════════════════════════
   OS CONTATOS
   ═══════════════════════════════════════════════════════════════════════════
   Números só com dígitos, sem parênteses, traço ou espaço.
   O do WhatsApp precisa começar com 55, que é o código do Brasil.
   ═══════════════════════════════════════════════════════════════════════════ */

var CONTATOS = {

  /* Recebe os pedidos das outras listas de grupos. */
  whatsappListas: "5531991579687",

  /* Recebe os avisos de grupo lotado e link quebrado. */
  whatsappSuporte: "5531990795747",

  /* Aparece no rodapé, escrito de um jeito fácil de ler. */
  suporteEscrito: "31 99079-5747",

  /* A chave pix do botão de doação. */
  pix: "31991579687"

};
