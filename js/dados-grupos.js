/* ═══════════════════════════════════════════════════════════════════════════
   OS GRUPOS DE WHATSAPP
   ═══════════════════════════════════════════════════════════════════════════

   COMO ADICIONAR UM GRUPO
   Copie uma linha inteira, da chave { até a vírgula do fim, cole embaixo e
   troque as informações. A ordem das linhas não importa.

   O QUE VAI EM CADA CAMPO
   nome     o nome que aparece no card, entre aspas
   membros  o número de pessoas. Também aceita "lotado" (com aspas) ou 0,
            que mostra a etiqueta de grupo recém-criado
   cat      a categoria, escolhida da lista logo abaixo
   url      o link do grupo, entre aspas

   CUIDADOS
   • Toda linha termina com vírgula, menos a última antes do ] ;
   • Texto vai entre aspas, número não;
   • Se a página abrir em branco, foi uma aspa ou vírgula esquecida aqui —
     abra o arquivo no computador e a própria página vai dizer o que houve.
   ═══════════════════════════════════════════════════════════════════════════ */


/* AS CATEGORIAS ────────────────────────────────────────────────────────────
   Cada categoria vira um botão de filtro na página. O botão só aparece se
   existir pelo menos um grupo dela, então dá para criar categoria nova aqui
   e usar depois.

   Para renomear um filtro, mude só o texto entre aspas depois de nome:.
   A palavra da esquerda (festas, moradia…) é o apelido usado lá embaixo e
   precisa continuar igual nos dois lugares.                                 */

var CATEGORIAS = {
  festas:    { nome: "Festas e ingressos",   cor: "#A34F76" },
  moradia:   { nome: "Repúblicas",           cor: "#2E7D53" },
  caronas:   { nome: "Caronas e viagens",    cor: "#3D6E8C" },
  trocas:    { nome: "Desapego e brechó",    cor: "#8C6A3D" },
  trabalho:  { nome: "Vagas e estágios",     cor: "#1F7A7A" },
  academico: { nome: "Vida acadêmica",       cor: "#6B5B95" },
  comida:    { nome: "Comida",               cor: "#C08A1E" },
  lazer:     { nome: "Lazer e jogos",        cor: "#B24232" },
  social:    { nome: "Social e avisos",      cor: "#4A7C2F" },
  idiomas:   { nome: "Idiomas",              cor: "#8A4B7D" }
};


/* OS GRUPOS ────────────────────────────────────────────────────────────────
   Estão separados por assunto só para facilitar a sua vida na hora de achar
   onde colar. A página não liga para essa ordem.                            */

var GRUPOS = [

  /* ---- Festas e ingressos ---- */
  { nome: "Festas 1",                   membros: "lotado", cat: "festas", url: "https://chat.whatsapp.com/KvPPdy2IoeOE2rSecrUwUf" },
  { nome: "Festas 2",                   membros: "lotado", cat: "festas", url: "https://chat.whatsapp.com/Hl9eTVVoR2ABasYy1TZCAm" },
  { nome: "Festas 3",                   membros: "lotado", cat: "festas", url: "https://chat.whatsapp.com/CQu03yFkhYJ3AWyFKfR3Rb" },
  { nome: "Festas 4",                   membros: 633,      cat: "festas", url: "https://chat.whatsapp.com/Je90mnRz0ZSJqB5kXN7u4o" },
  { nome: "Festas 5",                   membros: 149,      cat: "festas", url: "https://chat.whatsapp.com/EUlr7yR35PM6dzzvRU4VTn" },
  { nome: "Rolês espontâneos",          membros: 184,      cat: "festas", url: "https://chat.whatsapp.com/Lb7EpZmX91rGMDl9LftMFg" },
  { nome: "Venda de ingressos",         membros: "lotado", cat: "festas", url: "https://chat.whatsapp.com/B4fTwSdPTO5I2URYqxlktc" },
  { nome: "Venda de ingressos 2",       membros: 657,      cat: "festas", url: "https://chat.whatsapp.com/BurXGfYKsdcCkCNEuxGcPM" },

  /* ---- Repúblicas ---- */
  { nome: "Repúblicas 1",                    membros: "lotado", cat: "moradia", url: "https://chat.whatsapp.com/CJ9181tWVpV1c1GdSTgxww" },
  { nome: "Repúblicas 2",                    membros: 842,      cat: "moradia", url: "https://chat.whatsapp.com/FdgBFBR2SJv6iwQw7D2kG7" },
  { nome: "Repúblicas 3",                    membros: 0,        cat: "moradia", url: "https://chat.whatsapp.com/HvIJnFaeP70KMqpyDRY5P7" },
  { nome: "Repúblicas perto da Pampulha 1",  membros: "lotado", cat: "moradia", url: "https://chat.whatsapp.com/Ess0ZMOROObCBTTnTiP1F2" },
  { nome: "Repúblicas perto da Pampulha 2",  membros: "lotado", cat: "moradia", url: "https://chat.whatsapp.com/JM03FNZ4vjF1kCddr3Dcyo" },
  { nome: "Repúblicas perto da Pampulha 3",  membros: 0,        cat: "moradia", url: "https://chat.whatsapp.com/Lq1LoFgFC9qEvEfpHgT5Ai" },
  { nome: "Repúblicas perto do Centro",      membros: 0,        cat: "moradia", url: "https://chat.whatsapp.com/LEvKdRVGGLmBZhzuT4YoS3" },
  { nome: "Repúblicas só para mulheres",     membros: "lotado", cat: "moradia", url: "https://chat.whatsapp.com/HRXqNFit0ImHvH2dosm9qd" },
  { nome: "Repúblicas só para mulheres 2",   membros: 316,      cat: "moradia", url: "https://chat.whatsapp.com/EW1rQywLYyM5X4FaAbBZrp" },

  /* ---- Caronas e viagens ---- */
  { nome: "Vamos embora juntos? Ouro Preto e Castelo",      membros: 264, cat: "caronas", url: "https://chat.whatsapp.com/IaYvHkOmYS6LESCBZAXIik" },
  { nome: "Vamos embora juntos? Aeroporto e Jaraguá",       membros: 97,  cat: "caronas", url: "https://chat.whatsapp.com/DfyxGad2Q58KccFG7VsjHF" },
  { nome: "Vamos embora juntos? Liberdade e Indaiá",        membros: 166, cat: "caronas", url: "https://chat.whatsapp.com/KhjFWWaAe8250nZvpTPsQ8" },
  { nome: "Vamos embora juntos? São Francisco e Liberdade", membros: 47,  cat: "caronas", url: "https://chat.whatsapp.com/F3PzjoNX6OyBwbCy1s3k7t" },
  { nome: "Vamos embora juntos? São José e São Luís",       membros: 51,  cat: "caronas", url: "https://chat.whatsapp.com/GcK3vK0yZqlDhc3nWMIEMp" },
  { nome: "Carona Ibirité",                                 membros: 107, cat: "caronas", url: "https://chat.whatsapp.com/BT6JAOxzGiHCWi7Gba6xbk" },
  { nome: "Carona para o Clube do Céu",                     membros: 81,  cat: "caronas", url: "https://chat.whatsapp.com/K3826EQGLIf9ZEDXqkcKq9" },

  /* ---- Desapego e brechó ---- */
  { nome: "Desapego 1",              membros: "lotado", cat: "trocas", url: "https://chat.whatsapp.com/GnBXA8rrKEn1sh5SpMmKpt" },
  { nome: "Desapego 2",              membros: 783,      cat: "trocas", url: "https://chat.whatsapp.com/I7rvb0XmtOU13o7eZtgvPk" },
  { nome: "Desapego 3",              membros: 862,      cat: "trocas", url: "https://chat.whatsapp.com/HA2BSkPRHuV8F8g3N9hjOa" },
  { nome: "Desapego 4",              membros: "lotado", cat: "trocas", url: "https://chat.whatsapp.com/BQ4FXZQnQy61DrO0PZJL0C" },
  { nome: "Desapego 5",              membros: 712,      cat: "trocas", url: "https://chat.whatsapp.com/DGmKSrvX0gb1WwR8RnKMxC" },
  { nome: "Desapego 6",              membros: 0,        cat: "trocas", url: "https://chat.whatsapp.com/Ggh6Tz6UDCWIA9Wk3jIjPi" },
  { nome: "Doa-se 1",                membros: "lotado", cat: "trocas", url: "https://chat.whatsapp.com/GjCgDGrWG3HHvm4LoGR8eC" },
  { nome: "Doa-se 2",                membros: "lotado", cat: "trocas", url: "https://chat.whatsapp.com/KPEslIuLO7M2LQIEsVthZV" },
  { nome: "Doa-se 3",                membros: 0,        cat: "trocas", url: "https://chat.whatsapp.com/F620YB5Iygb2uhxlxrXxCf" },
  { nome: "Bazar 1",                 membros: "lotado", cat: "trocas", url: "https://chat.whatsapp.com/BA8BiS15IeQ3Q1OI9LfFNE" },
  { nome: "Bazar 2",                 membros: "lotado", cat: "trocas", url: "https://chat.whatsapp.com/IEjkqVFVUqy8xRz386E8JC" },
  { nome: "Bazar 3",                 membros: 0,        cat: "trocas", url: "https://chat.whatsapp.com/FkjsrejdRUhAUf37hRlqJl" },
  { nome: "Bazar plus size feminino", membros: 126,     cat: "trocas", url: "https://chat.whatsapp.com/DhFGoHbSEB61K8Ejn2m0jG" },
  { nome: "Brechó feminino",         membros: 966,      cat: "trocas", url: "https://chat.whatsapp.com/Hz20t5ZgWwWKO8whhG3gMo" },
  { nome: "Brechó feminino 2",       membros: 30,       cat: "trocas", url: "https://chat.whatsapp.com/J7agv9Vofhl4zQjtzZjP2x" },
  { nome: "Brechó masculino",        membros: 1004,     cat: "trocas", url: "https://chat.whatsapp.com/D0sRKXG9rAOJQwwGJNho6v" },
  { nome: "Brechó masculino 2",      membros: 0,        cat: "trocas", url: "https://chat.whatsapp.com/KqxLeT1rxH2GfncfygI7RV" },
  { nome: "Só permutas",             membros: 313,      cat: "trocas", url: "https://chat.whatsapp.com/KSvvBGfDtlkILymLGNjmrd" },
  { nome: "Sebo",                    membros: "lotado", cat: "trocas", url: "https://chat.whatsapp.com/B6FWVTaDXiw79NI6CP6RF8" },
  { nome: "Sebo 2",                  membros: 649,      cat: "trocas", url: "https://chat.whatsapp.com/CSIGvOvgbDNA3Q0nZ1jg4S" },

  /* ---- Vagas e estágios ---- */
  { nome: "Free-lancers 1",           membros: "lotado", cat: "trabalho", url: "https://chat.whatsapp.com/FJ56dr6ptaIAcIrXuz5KAW" },
  { nome: "Free-lancers 2",           membros: "lotado", cat: "trabalho", url: "https://chat.whatsapp.com/DA4G7huHvOKARnf9SZ2End" },
  { nome: "Free-lancers 3",           membros: "lotado", cat: "trabalho", url: "https://chat.whatsapp.com/CcHu3q40VrYIMoUyUrd6A4" },
  { nome: "Free-lancers 4",           membros: "lotado", cat: "trabalho", url: "https://chat.whatsapp.com/Kmj1ckcnfud4z3uY9wtBF0" },
  { nome: "Free-lancers 5",           membros: "lotado", cat: "trabalho", url: "https://chat.whatsapp.com/GUGyLy9cuMoLSnY4sPnCsa" },
  { nome: "Free-lancers 6",           membros: "lotado", cat: "trabalho", url: "https://chat.whatsapp.com/HTFV0WVO9XC2y3IxLoUbSG" },
  { nome: "Free-lancers 7",           membros: 76,       cat: "trabalho", url: "https://chat.whatsapp.com/E36JYelgfzNCTPGIq1OIGL" },
  { nome: "Prestadores de serviços",  membros: 898,      cat: "trabalho", url: "https://chat.whatsapp.com/IWnlDLEzClx17WynFmnr6I" },
  { nome: "Prestadores de serviços 2", membros: 0,       cat: "trabalho", url: "https://chat.whatsapp.com/FeiE3GGSjfC89ge8O6qyZH" },
  { nome: "Vagas CLT 1",              membros: 930,      cat: "trabalho", url: "https://chat.whatsapp.com/CbMy8JwuOBUDjYCQGMq3cy" },
  { nome: "Vagas CLT 2",              membros: 255,      cat: "trabalho", url: "https://chat.whatsapp.com/KkaKW4ScNcu81QMqNU62X9" },
  { nome: "Concursos públicos 1",     membros: 838,      cat: "trabalho", url: "https://chat.whatsapp.com/DEzhqvHFQgS463CEe0wzI2" },
  { nome: "Concursos públicos 2",     membros: 385,      cat: "trabalho", url: "https://chat.whatsapp.com/INGpcrRNKxI3EcIrxtOuCj" },
  { nome: "Estágios 1",               membros: "lotado", cat: "trabalho", url: "https://chat.whatsapp.com/FEoxKtC1ffGEJxkZSsMRw9" },
  { nome: "Estágios 2",               membros: 980,      cat: "trabalho", url: "https://chat.whatsapp.com/CFQjIUdeO3g0iHqw1NH7YW" },
  { nome: "Estágios 3",               membros: 0,        cat: "trabalho", url: "https://chat.whatsapp.com/LA8s2YFfhRSLiXvwihCFab" },

  /* ---- Vida acadêmica ---- */
  { nome: "Calouros",                      membros: 754,      cat: "academico", url: "https://chat.whatsapp.com/KWtvZdKuSgm3xnf4FPSTSY" },
  { nome: "Tirar dúvidas",                 membros: 739,      cat: "academico", url: "https://chat.whatsapp.com/CWq0RGEw1SYC57dIVH59kd" },
  { nome: "Notícias acadêmicas",           membros: 759,      cat: "academico", url: "https://chat.whatsapp.com/GUQfUse63WVB7PiOfJf77U" },
  { nome: "Projetos de extensão 1",        membros: "lotado", cat: "academico", url: "https://chat.whatsapp.com/JV2YTI4XIFoBqPDU5ue244" },
  { nome: "Projetos de extensão 2",        membros: 18,       cat: "academico", url: "https://chat.whatsapp.com/E77F4kGe7en9VYGP02xRc5" },
  { nome: "Liga acadêmica do coffee break", membros: 569,     cat: "academico", url: "https://chat.whatsapp.com/HYTd6wLd1Tz0iLHM1JOGEq" },

  /* ---- Comida ---- */
  { nome: "Bandeco",                    membros: 287, cat: "comida", url: "https://chat.whatsapp.com/Ht0wmekIL9lCwQ4uzQcm0s" },
  { nome: "Laricas e quitutes",         membros: 230, cat: "comida", url: "https://chat.whatsapp.com/JnsovK5sZOp8e2GBz5YHJK" },
  { nome: "Veganismo e vegetarianismo", membros: 86,  cat: "comida", url: "https://chat.whatsapp.com/KXPqvbUYR347JTLRSwBnjW" },
  { nome: "Celíacos",                   membros: 56,  cat: "comida", url: "https://chat.whatsapp.com/BNdq9QfN70sEa6kMkh30wS" },

  /* ---- Lazer e jogos ---- */
  { nome: "Dicas de série, filme e doc", membros: 270, cat: "lazer", url: "https://chat.whatsapp.com/LdJI0NHnETFDNASf10rH4u" },
  { nome: "Dorameiros",                  membros: 64,  cat: "lazer", url: "https://chat.whatsapp.com/LVAXJlicSJhGARpdz4btRa" },
  { nome: "Clubes de leitura",           membros: 318, cat: "lazer", url: "https://chat.whatsapp.com/KeCRL37ruQjK9zXS4ptCtO" },
  { nome: "Poetas e poesias",            membros: 78,  cat: "lazer", url: "https://chat.whatsapp.com/GL1trQi8CWGDUTf4yx63p4" },
  { nome: "E-sports",                    membros: 186, cat: "lazer", url: "https://chat.whatsapp.com/KT2zvAxuRzpIBRAFTO5VC1" },
  { nome: "Figurinhas",                  membros: 486, cat: "lazer", url: "https://chat.whatsapp.com/JNrRqiRWkYbKBLdEGA2yy6" },
  { nome: "Pôker chinês (xaina)",        membros: 18,  cat: "lazer", url: "https://chat.whatsapp.com/JDGhMBd1Cr3IYD9a72krgZ" },
  { nome: "Sinuqueiros",                 membros: 53,  cat: "lazer", url: "https://chat.whatsapp.com/DGXbw5FRKT36UhCHqB9axh" },
  { nome: "Truco",                       membros: 70,  cat: "lazer", url: "https://chat.whatsapp.com/DUFFDkt5V0u1iTiIVHne3n" },
  { nome: "Bike",                        membros: 106, cat: "lazer", url: "https://chat.whatsapp.com/Le7UwWY10P3HMCZv8YFmdk" },
  { nome: "Yoga",                        membros: 235, cat: "lazer", url: "https://chat.whatsapp.com/D4d8pDzIuAsKgoBvzTX2jN" },
  { nome: "Forró",                       membros: 138, cat: "lazer", url: "https://chat.whatsapp.com/LDx2kiIDMQg1tLRNtqX8ji" },
  { nome: "Clube do Céu",                membros: 543, cat: "lazer", url: "https://chat.whatsapp.com/JLL2tIPLLCI3KBD4kXUOPR" },
  { nome: "Cabuloso",                    membros: 606, cat: "lazer", url: "https://chat.whatsapp.com/G1174oanvEt5QMQ6I5UVY6" },
  { nome: "Galo",                        membros: 522, cat: "lazer", url: "https://chat.whatsapp.com/Has56LX6rvL4YSmQdKyu7L" },

  /* ---- Social e avisos ---- */
  { nome: "Spotted 1",                    membros: 50,  cat: "social", url: "https://chat.whatsapp.com/ENNziiLe84FFi6ZgRBjPjK" },
  { nome: "Chat",                         membros: 319, cat: "social", url: "https://chat.whatsapp.com/GkpfQtJbEXE7H6u6U3Yrpk" },
  { nome: "Tinder",                       membros: 82,  cat: "social", url: "https://chat.whatsapp.com/KH2HCAgXS2MCUXFcR8zjbH" },
  { nome: "Grindr",                       membros: 52,  cat: "social", url: "https://chat.whatsapp.com/I12ASgKEYhlLmWvP3dMRHL" },
  { nome: "30+",                          membros: 61,  cat: "social", url: "https://chat.whatsapp.com/H4J3GheXiB0KlrITF6obi3" },
  { nome: "Sorteios e parcerias",         membros: 183, cat: "social", url: "https://chat.whatsapp.com/HTJZE7DiqqJIYoFfJftxSV" },
  { nome: "Promoções de tatuagens",       membros: 534, cat: "social", url: "https://chat.whatsapp.com/HgrUCNZDeEyJEjs7xxpzDK" },
  { nome: "Sorteio de tatuagens",         membros: 100, cat: "social", url: "https://chat.whatsapp.com/EWueKAbWMKCE6h7Yil75np" },
  { nome: "Adoção responsável",           membros: 529, cat: "social", url: "https://chat.whatsapp.com/FAgHur34DPp2jQ11zjzU7E" },
  { nome: "Férias",                       membros: 283, cat: "social", url: "https://chat.whatsapp.com/GZot1iRa2DlJVChVI8FweS" },
  { nome: "Achados e perdidos",           membros: 757, cat: "social", url: "https://chat.whatsapp.com/B7uU3AmkDkH1CknD1RYZl7" },
  { nome: "Links de grupos",              membros: 679, cat: "social", url: "https://chat.whatsapp.com/BAF4tv4MYOnBUEfEmwkdxf" },
  { nome: "Divulgadores e moderadores",   membros: 53,  cat: "social", url: "https://chat.whatsapp.com/Jx2P9dDkEs0IXafhDnB28t" },
  { nome: "Rateio de streaming e contas", membros: 519, cat: "social", url: "https://chat.whatsapp.com/JsAiyQfvMDKILhkL5tqCut" },

  /* ---- Idiomas ---- */
  { nome: "Inglês — conversation",   membros: 663, cat: "idiomas", url: "https://chat.whatsapp.com/EBjlmd4XPGRLjqfa0262E6" },
  { nome: "Espanhol — conversación", membros: 243, cat: "idiomas", url: "https://chat.whatsapp.com/Ed7k7CDa3jB7WNalAYZV5o" }

];
