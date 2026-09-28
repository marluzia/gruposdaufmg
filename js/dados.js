/* =========================================================================
   Os dados da página.
   ─────────────────────────────────────────────────────────────────────────
   É o único arquivo que precisa ser editado para atualizar a lista. Nada
   aqui sabe como a página é desenhada, e nada em app.js sabe quais grupos
   existem — quem for mexer na lista não precisa abrir mais nada.

   A contagem de grupos, o total de pessoas e os chips de filtro saem daqui
   sozinhos: não há número escrito à mão na página.
   ========================================================================= */

/* Cada grupo tem nome, categoria e link.

   membros aceita três coisas:
     um número   →  "966 membros"
     "lotado"    →  etiqueta vermelha
     0           →  etiqueta verde de grupo recém-criado           */

var GRUPOS = [
  { nome: "Spotted 1",                   membros: 50,       cat: "conversa", url: "https://chat.whatsapp.com/ENNziiLe84FFi6ZgRBjPjK" },
  { nome: "Chat",                        membros: 319,      cat: "conversa", url: "https://chat.whatsapp.com/GkpfQtJbEXE7H6u6U3Yrpk" },
  { nome: "Sorteios e parcerias",        membros: 183,      cat: "sorteios", url: "https://chat.whatsapp.com/HTJZE7DiqqJIYoFfJftxSV" },
  { nome: "Promoções de tatuagens",      membros: 534,      cat: "sorteios", url: "https://chat.whatsapp.com/HgrUCNZDeEyJEjs7xxpzDK" },
  { nome: "Sorteio de tatuagens",        membros: 100,      cat: "sorteios", url: "https://chat.whatsapp.com/EWueKAbWMKCE6h7Yil75np" },
  { nome: "Dicas de série, filme e doc", membros: 270,      cat: "lazer",    url: "https://chat.whatsapp.com/LdJI0NHnETFDNASf10rH4u" },
  { nome: "Brechó feminino",             membros: 966,      cat: "trocas",   url: "https://chat.whatsapp.com/Hz20t5ZgWwWKO8whhG3gMo" },
  { nome: "Brechó feminino 2",           membros: 30,       cat: "trocas",   url: "https://chat.whatsapp.com/J7agv9Vofhl4zQjtzZjP2x" },
  { nome: "Dorameiros",                  membros: 64,       cat: "lazer",    url: "https://chat.whatsapp.com/LVAXJlicSJhGARpdz4btRa" },
  { nome: "Só permutas",                 membros: 313,      cat: "trocas",   url: "https://chat.whatsapp.com/KSvvBGfDtlkILymLGNjmrd" },
  { nome: "Inglês — conversation",       membros: 663,      cat: "idiomas",  url: "https://chat.whatsapp.com/EBjlmd4XPGRLjqfa0262E6" },
  { nome: "Espanhol — conversación",     membros: 243,      cat: "idiomas",  url: "https://chat.whatsapp.com/Ed7k7CDa3jB7WNalAYZV5o" },
  { nome: "Sebo",                        membros: "lotado", cat: "trocas",   url: "https://chat.whatsapp.com/B6FWVTaDXiw79NI6CP6RF8" },
  { nome: "Sebo 2",                      membros: 649,      cat: "trocas",   url: "https://chat.whatsapp.com/CSIGvOvgbDNA3Q0nZ1jg4S" },
  { nome: "Brechó masculino",            membros: 1004,     cat: "trocas",   url: "https://chat.whatsapp.com/D0sRKXG9rAOJQwwGJNho6v" },
  { nome: "Brechó masculino 2",          membros: 0,        cat: "trocas",   url: "https://chat.whatsapp.com/KqxLeT1rxH2GfncfygI7RV" },
  { nome: "Achados e perdidos",          membros: 757,      cat: "campus",   url: "https://chat.whatsapp.com/B7uU3AmkDkH1CknD1RYZl7" },
  { nome: "Yoga",                        membros: 235,      cat: "lazer",    url: "https://chat.whatsapp.com/D4d8pDzIuAsKgoBvzTX2jN" },
  { nome: "Forró",                       membros: 138,      cat: "lazer",    url: "https://chat.whatsapp.com/LDx2kiIDMQg1tLRNtqX8ji" },
  { nome: "Bandeco",                     membros: 287,      cat: "campus",   url: "https://chat.whatsapp.com/Ht0wmekIL9lCwQ4uzQcm0s" }
];

/* Um chip de filtro só aparece se existir grupo daquela categoria, então dá
   para criar categoria nova aqui sem mexer em mais nada. */

var CATEGORIAS = {
  conversa: { nome: "Conversa",         cor: "#3D6E8C" },
  trocas:   { nome: "Trocas e brechós", cor: "#2E7D53" },
  sorteios: { nome: "Sorteios",         cor: "#C08A1E" },
  idiomas:  { nome: "Idiomas",          cor: "#6B5B95" },
  lazer:    { nome: "Cultura e lazer",  cor: "#B24232" },
  campus:   { nome: "Campus",           cor: "#8C6A3D" }
};

/* Contatos. O telefone das listas e o de reportar problema são diferentes:
   o primeiro envia as outras listas, o segundo conserta link quebrado. */

var TELEFONE_LISTAS = "5531991579687";
var CHAVE_PIX = "31991579687";
