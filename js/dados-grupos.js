/* ═══════════════════════════════════════════════════════════════════════════
   OS GRUPOS DE WHATSAPP
   ═══════════════════════════════════════════════════════════════════════════

   COMO ADICIONAR UM GRUPO
   Copie um bloco inteiro — as três linhas, da chave { até a vírgula depois
   do } — cole embaixo e troque as informações. A ordem não importa.

   O QUE VAI EM CADA CAMPO
   nome     o nome que aparece no card, entre aspas
   membros  o número de pessoas. Também aceita "lotado" (com aspas) ou 0,
            que mostra a etiqueta de grupo recém-criado
   cat      a categoria, escolhida da lista logo abaixo
   desc     uma frase dizendo para que serve o grupo. Aparece embaixo do
            nome. Deixe "" e o card fica só com o nome
   url      o link do grupo, entre aspas

   UM CAMPO A MAIS, SÓ QUANDO PRECISAR
   atualizado   a data em que você conferiu ESTE grupo, no formato
                ano-mês-dia: "2026-10-17". Sem ele, o card mostra a data
                geral da lista, que fica em AJUSTES, no dados-textos.js.
                Use quando reabrir um link solto e quiser mostrar que
                aquele, em especial, está fresco:

   { nome: "Estágios 4", membros: 0, cat: "trabalho",
     desc: "Vagas de estágio abertas para quem ainda está na graduação.",
     atualizado: "2026-10-17",
     url: "https://chat.whatsapp.com/XXXX" },

   AS DESCRIÇÕES ABAIXO SÃO UM PRIMEIRO RASCUNHO
   Foram escritas a partir do nome e da categoria de cada grupo. Leia com
   calma e ajuste o que não bater com o que o grupo é de verdade — quem
   convive lá dentro sabe melhor do que qualquer um.

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
  { nome: "Festas 1", membros: "lotado", cat: "festas",
    desc: "Agenda das festas universitárias de BH, com data, local e link de ingresso.",
    url: "https://chat.whatsapp.com/KvPPdy2IoeOE2rSecrUwUf" },
  { nome: "Festas 2", membros: "lotado", cat: "festas",
    desc: "Agenda das festas universitárias de BH, com data, local e link de ingresso.",
    url: "https://chat.whatsapp.com/Hl9eTVVoR2ABasYy1TZCAm" },
  { nome: "Festas 3", membros: "lotado", cat: "festas",
    desc: "Agenda das festas universitárias de BH, com data, local e link de ingresso.",
    url: "https://chat.whatsapp.com/CQu03yFkhYJ3AWyFKfR3Rb" },
  { nome: "Festas 4", membros: 633, cat: "festas",
    desc: "Agenda das festas universitárias de BH, com data, local e link de ingresso.",
    url: "https://chat.whatsapp.com/Je90mnRz0ZSJqB5kXN7u4o" },
  { nome: "Festas 5", membros: 149, cat: "festas",
    desc: "Agenda das festas universitárias de BH, com data, local e link de ingresso.",
    url: "https://chat.whatsapp.com/EUlr7yR35PM6dzzvRU4VTn" },
  { nome: "Rolês espontâneos", membros: 184, cat: "festas",
    desc: "Saídas combinadas de última hora: bar, show, praça, o que aparecer.",
    url: "https://chat.whatsapp.com/Lb7EpZmX91rGMDl9LftMFg" },
  { nome: "Venda de ingressos", membros: "lotado", cat: "festas",
    desc: "Compra, venda e troca de ingressos de festa entre estudantes.",
    url: "https://chat.whatsapp.com/B4fTwSdPTO5I2URYqxlktc" },
  { nome: "Venda de ingressos 2", membros: 657, cat: "festas",
    desc: "Compra, venda e troca de ingressos de festa entre estudantes.",
    url: "https://chat.whatsapp.com/BurXGfYKsdcCkCNEuxGcPM" },

  /* ---- Repúblicas ---- */
  { nome: "Repúblicas 1", membros: "lotado", cat: "moradia",
    desc: "Vagas, quartos e repúblicas para alugar em Belo Horizonte.",
    url: "https://chat.whatsapp.com/CJ9181tWVpV1c1GdSTgxww" },
  { nome: "Repúblicas 2", membros: 842, cat: "moradia",
    desc: "Vagas, quartos e repúblicas para alugar em Belo Horizonte.",
    url: "https://chat.whatsapp.com/FdgBFBR2SJv6iwQw7D2kG7" },
  { nome: "Repúblicas 3", membros: 0, cat: "moradia",
    desc: "Vagas, quartos e repúblicas para alugar em Belo Horizonte.",
    url: "https://chat.whatsapp.com/HvIJnFaeP70KMqpyDRY5P7" },
  { nome: "Repúblicas perto da Pampulha 1", membros: "lotado", cat: "moradia",
    desc: "Vagas e quartos em repúblicas da região da Pampulha, perto do campus.",
    url: "https://chat.whatsapp.com/Ess0ZMOROObCBTTnTiP1F2" },
  { nome: "Repúblicas perto da Pampulha 2", membros: "lotado", cat: "moradia",
    desc: "Vagas e quartos em repúblicas da região da Pampulha, perto do campus.",
    url: "https://chat.whatsapp.com/JM03FNZ4vjF1kCddr3Dcyo" },
  { nome: "Repúblicas perto da Pampulha 3", membros: 0, cat: "moradia",
    desc: "Vagas e quartos em repúblicas da região da Pampulha, perto do campus.",
    url: "https://chat.whatsapp.com/Lq1LoFgFC9qEvEfpHgT5Ai" },
  { nome: "Repúblicas perto do Centro", membros: 0, cat: "moradia",
    desc: "Vagas e quartos em repúblicas da região central de BH.",
    url: "https://chat.whatsapp.com/LEvKdRVGGLmBZhzuT4YoS3" },
  { nome: "Repúblicas só para mulheres", membros: "lotado", cat: "moradia",
    desc: "Vagas em repúblicas e moradias compartilhadas só para mulheres.",
    url: "https://chat.whatsapp.com/HRXqNFit0ImHvH2dosm9qd" },
  { nome: "Repúblicas só para mulheres 2", membros: 316, cat: "moradia",
    desc: "Vagas em repúblicas e moradias compartilhadas só para mulheres.",
    url: "https://chat.whatsapp.com/EW1rQywLYyM5X4FaAbBZrp" },

  /* ---- Caronas e viagens ---- */
  { nome: "Vamos embora juntos? Ouro Preto e Castelo", membros: 264, cat: "caronas",
    desc: "Caronas de ida e volta para os bairros Ouro Preto e Castelo.",
    url: "https://chat.whatsapp.com/IaYvHkOmYS6LESCBZAXIik" },
  { nome: "Vamos embora juntos? Aeroporto e Jaraguá", membros: 97, cat: "caronas",
    desc: "Caronas de ida e volta para os bairros Aeroporto e Jaraguá.",
    url: "https://chat.whatsapp.com/DfyxGad2Q58KccFG7VsjHF" },
  { nome: "Vamos embora juntos? Liberdade e Indaiá", membros: 166, cat: "caronas",
    desc: "Caronas de ida e volta para os bairros Liberdade e Indaiá.",
    url: "https://chat.whatsapp.com/KhjFWWaAe8250nZvpTPsQ8" },
  { nome: "Vamos embora juntos? São Francisco e Liberdade", membros: 47, cat: "caronas",
    desc: "Caronas de ida e volta para os bairros São Francisco e Liberdade.",
    url: "https://chat.whatsapp.com/F3PzjoNX6OyBwbCy1s3k7t" },
  { nome: "Vamos embora juntos? São José e São Luís", membros: 51, cat: "caronas",
    desc: "Caronas de ida e volta para os bairros São José e São Luís.",
    url: "https://chat.whatsapp.com/GcK3vK0yZqlDhc3nWMIEMp" },
  { nome: "Carona Ibirité", membros: 107, cat: "caronas",
    desc: "Caronas de ida e volta entre o campus e Ibirité.",
    url: "https://chat.whatsapp.com/BT6JAOxzGiHCWi7Gba6xbk" },
  { nome: "Carona para o Clube do Céu", membros: 81, cat: "caronas",
    desc: "Caronas combinadas para os eventos do Clube do Céu.",
    url: "https://chat.whatsapp.com/K3826EQGLIf9ZEDXqkcKq9" },

  /* ---- Desapego e brechó ---- */
  { nome: "Desapego 1", membros: "lotado", cat: "trocas",
    desc: "Móveis, eletrônicos e tralha de república à venda por preço de estudante.",
    url: "https://chat.whatsapp.com/GnBXA8rrKEn1sh5SpMmKpt" },
  { nome: "Desapego 2", membros: 783, cat: "trocas",
    desc: "Móveis, eletrônicos e tralha de república à venda por preço de estudante.",
    url: "https://chat.whatsapp.com/I7rvb0XmtOU13o7eZtgvPk" },
  { nome: "Desapego 3", membros: 862, cat: "trocas",
    desc: "Móveis, eletrônicos e tralha de república à venda por preço de estudante.",
    url: "https://chat.whatsapp.com/HA2BSkPRHuV8F8g3N9hjOa" },
  { nome: "Desapego 4", membros: "lotado", cat: "trocas",
    desc: "Móveis, eletrônicos e tralha de república à venda por preço de estudante.",
    url: "https://chat.whatsapp.com/BQ4FXZQnQy61DrO0PZJL0C" },
  { nome: "Desapego 5", membros: 712, cat: "trocas",
    desc: "Móveis, eletrônicos e tralha de república à venda por preço de estudante.",
    url: "https://chat.whatsapp.com/DGmKSrvX0gb1WwR8RnKMxC" },
  { nome: "Desapego 6", membros: 0, cat: "trocas",
    desc: "Móveis, eletrônicos e tralha de república à venda por preço de estudante.",
    url: "https://chat.whatsapp.com/Ggh6Tz6UDCWIA9Wk3jIjPi" },
  { nome: "Doa-se 1", membros: "lotado", cat: "trocas",
    desc: "Só doação: móveis, roupas e utensílios que alguém não usa mais.",
    url: "https://chat.whatsapp.com/GjCgDGrWG3HHvm4LoGR8eC" },
  { nome: "Doa-se 2", membros: "lotado", cat: "trocas",
    desc: "Só doação: móveis, roupas e utensílios que alguém não usa mais.",
    url: "https://chat.whatsapp.com/KPEslIuLO7M2LQIEsVthZV" },
  { nome: "Doa-se 3", membros: 0, cat: "trocas",
    desc: "Só doação: móveis, roupas e utensílios que alguém não usa mais.",
    url: "https://chat.whatsapp.com/F620YB5Iygb2uhxlxrXxCf" },
  { nome: "Bazar 1", membros: "lotado", cat: "trocas",
    desc: "Bazar de roupas, calçados e acessórios entre estudantes.",
    url: "https://chat.whatsapp.com/BA8BiS15IeQ3Q1OI9LfFNE" },
  { nome: "Bazar 2", membros: "lotado", cat: "trocas",
    desc: "Bazar de roupas, calçados e acessórios entre estudantes.",
    url: "https://chat.whatsapp.com/IEjkqVFVUqy8xRz386E8JC" },
  { nome: "Bazar 3", membros: 0, cat: "trocas",
    desc: "Bazar de roupas, calçados e acessórios entre estudantes.",
    url: "https://chat.whatsapp.com/FkjsrejdRUhAUf37hRlqJl" },
  { nome: "Bazar plus size feminino", membros: 126, cat: "trocas",
    desc: "Bazar de roupas femininas plus size, com venda e troca.",
    url: "https://chat.whatsapp.com/DhFGoHbSEB61K8Ejn2m0jG" },
  { nome: "Brechó feminino", membros: 966, cat: "trocas",
    desc: "Brechó de roupas femininas: venda, troca e garimpo.",
    url: "https://chat.whatsapp.com/Hz20t5ZgWwWKO8whhG3gMo" },
  { nome: "Brechó feminino 2", membros: 30, cat: "trocas",
    desc: "Brechó de roupas femininas: venda, troca e garimpo.",
    url: "https://chat.whatsapp.com/J7agv9Vofhl4zQjtzZjP2x" },
  { nome: "Brechó masculino", membros: 1004, cat: "trocas",
    desc: "Brechó de roupas masculinas: venda, troca e garimpo.",
    url: "https://chat.whatsapp.com/D0sRKXG9rAOJQwwGJNho6v" },
  { nome: "Brechó masculino 2", membros: 0, cat: "trocas",
    desc: "Brechó de roupas masculinas: venda, troca e garimpo.",
    url: "https://chat.whatsapp.com/KqxLeT1rxH2GfncfygI7RV" },
  { nome: "Só permutas", membros: 313, cat: "trocas",
    desc: "Só troca, sem dinheiro no meio: item por item.",
    url: "https://chat.whatsapp.com/KSvvBGfDtlkILymLGNjmrd" },
  { nome: "Sebo", membros: "lotado", cat: "trocas",
    desc: "Compra, venda e troca de livros usados, acadêmicos ou não.",
    url: "https://chat.whatsapp.com/B6FWVTaDXiw79NI6CP6RF8" },
  { nome: "Sebo 2", membros: 649, cat: "trocas",
    desc: "Compra, venda e troca de livros usados, acadêmicos ou não.",
    url: "https://chat.whatsapp.com/CSIGvOvgbDNA3Q0nZ1jg4S" },

  /* ---- Vagas e estágios ---- */
  { nome: "Free-lancers 1", membros: "lotado", cat: "trabalho",
    desc: "Trabalhos avulsos e bicos: quem precisa e quem faz se encontram aqui.",
    url: "https://chat.whatsapp.com/FJ56dr6ptaIAcIrXuz5KAW" },
  { nome: "Free-lancers 2", membros: "lotado", cat: "trabalho",
    desc: "Trabalhos avulsos e bicos: quem precisa e quem faz se encontram aqui.",
    url: "https://chat.whatsapp.com/DA4G7huHvOKARnf9SZ2End" },
  { nome: "Free-lancers 3", membros: "lotado", cat: "trabalho",
    desc: "Trabalhos avulsos e bicos: quem precisa e quem faz se encontram aqui.",
    url: "https://chat.whatsapp.com/CcHu3q40VrYIMoUyUrd6A4" },
  { nome: "Free-lancers 4", membros: "lotado", cat: "trabalho",
    desc: "Trabalhos avulsos e bicos: quem precisa e quem faz se encontram aqui.",
    url: "https://chat.whatsapp.com/Kmj1ckcnfud4z3uY9wtBF0" },
  { nome: "Free-lancers 5", membros: "lotado", cat: "trabalho",
    desc: "Trabalhos avulsos e bicos: quem precisa e quem faz se encontram aqui.",
    url: "https://chat.whatsapp.com/GUGyLy9cuMoLSnY4sPnCsa" },
  { nome: "Free-lancers 6", membros: "lotado", cat: "trabalho",
    desc: "Trabalhos avulsos e bicos: quem precisa e quem faz se encontram aqui.",
    url: "https://chat.whatsapp.com/HTFV0WVO9XC2y3IxLoUbSG" },
  { nome: "Free-lancers 7", membros: 76, cat: "trabalho",
    desc: "Trabalhos avulsos e bicos: quem precisa e quem faz se encontram aqui.",
    url: "https://chat.whatsapp.com/E36JYelgfzNCTPGIq1OIGL" },
  { nome: "Prestadores de serviços", membros: 898, cat: "trabalho",
    desc: "Serviços de estudantes: aulas particulares, design, reforma, transporte.",
    url: "https://chat.whatsapp.com/IWnlDLEzClx17WynFmnr6I" },
  { nome: "Prestadores de serviços 2", membros: 0, cat: "trabalho",
    desc: "Serviços de estudantes: aulas particulares, design, reforma, transporte.",
    url: "https://chat.whatsapp.com/FeiE3GGSjfC89ge8O6qyZH" },
  { nome: "Vagas CLT 1", membros: 930, cat: "trabalho",
    desc: "Vagas de emprego com carteira assinada em BH e região.",
    url: "https://chat.whatsapp.com/CbMy8JwuOBUDjYCQGMq3cy" },
  { nome: "Vagas CLT 2", membros: 255, cat: "trabalho",
    desc: "Vagas de emprego com carteira assinada em BH e região.",
    url: "https://chat.whatsapp.com/KkaKW4ScNcu81QMqNU62X9" },
  { nome: "Concursos públicos 1", membros: 838, cat: "trabalho",
    desc: "Editais, prazos e materiais de estudo para concursos.",
    url: "https://chat.whatsapp.com/DEzhqvHFQgS463CEe0wzI2" },
  { nome: "Concursos públicos 2", membros: 385, cat: "trabalho",
    desc: "Editais, prazos e materiais de estudo para concursos.",
    url: "https://chat.whatsapp.com/INGpcrRNKxI3EcIrxtOuCj" },
  { nome: "Estágios 1", membros: "lotado", cat: "trabalho",
    desc: "Vagas de estágio abertas para quem ainda está na graduação.",
    url: "https://chat.whatsapp.com/FEoxKtC1ffGEJxkZSsMRw9" },
  { nome: "Estágios 2", membros: 980, cat: "trabalho",
    desc: "Vagas de estágio abertas para quem ainda está na graduação.",
    url: "https://chat.whatsapp.com/CFQjIUdeO3g0iHqw1NH7YW" },
  { nome: "Estágios 3", membros: 0, cat: "trabalho",
    desc: "Vagas de estágio abertas para quem ainda está na graduação.",
    url: "https://chat.whatsapp.com/LA8s2YFfhRSLiXvwihCFab" },

  /* ---- Vida acadêmica ---- */
  { nome: "Calouros", membros: 754, cat: "academico",
    desc: "Primeiros passos na UFMG: matrícula, bandejão, transporte e o que mais assustar.",
    url: "https://chat.whatsapp.com/KWtvZdKuSgm3xnf4FPSTSY" },
  { nome: "Tirar dúvidas", membros: 739, cat: "academico",
    desc: "Dúvida de matéria, de prova e de trabalho, respondida pela comunidade.",
    url: "https://chat.whatsapp.com/CWq0RGEw1SYC57dIVH59kd" },
  { nome: "Notícias acadêmicas", membros: 759, cat: "academico",
    desc: "Avisos de matrícula, calendário, editais e o que acontece na universidade.",
    url: "https://chat.whatsapp.com/GUQfUse63WVB7PiOfJf77U" },
  { nome: "Projetos de extensão 1", membros: "lotado", cat: "academico",
    desc: "Chamadas de projeto de extensão, pesquisa e monitoria.",
    url: "https://chat.whatsapp.com/JV2YTI4XIFoBqPDU5ue244" },
  { nome: "Projetos de extensão 2", membros: 18, cat: "academico",
    desc: "Chamadas de projeto de extensão, pesquisa e monitoria.",
    url: "https://chat.whatsapp.com/E77F4kGe7en9VYGP02xRc5" },
  { nome: "Liga acadêmica do coffee break", membros: 569, cat: "academico",
    desc: "Onde tem coffee break de graça no campus hoje.",
    url: "https://chat.whatsapp.com/HYTd6wLd1Tz0iLHM1JOGEq" },

  /* ---- Comida ---- */
  { nome: "Bandeco", membros: 287, cat: "comida",
    desc: "Cardápio do dia, tamanho da fila e avisos do restaurante universitário.",
    url: "https://chat.whatsapp.com/Ht0wmekIL9lCwQ4uzQcm0s" },
  { nome: "Laricas e quitutes", membros: 230, cat: "comida",
    desc: "Doces, salgados e marmitas feitos e vendidos por estudantes.",
    url: "https://chat.whatsapp.com/JnsovK5sZOp8e2GBz5YHJK" },
  { nome: "Veganismo e vegetarianismo", membros: 86, cat: "comida",
    desc: "Receitas, lugares e dicas para quem não come carne.",
    url: "https://chat.whatsapp.com/KXPqvbUYR347JTLRSwBnjW" },
  { nome: "Celíacos", membros: 56, cat: "comida",
    desc: "Onde comer sem glúten em BH e dentro do campus.",
    url: "https://chat.whatsapp.com/BNdq9QfN70sEa6kMkh30wS" },

  /* ---- Lazer e jogos ---- */
  { nome: "Dicas de série, filme e doc", membros: 270, cat: "lazer",
    desc: "Indicações e comentários de filme, série e documentário.",
    url: "https://chat.whatsapp.com/LdJI0NHnETFDNASf10rH4u" },
  { nome: "Dorameiros", membros: 64, cat: "lazer",
    desc: "Doramas: indicações, legendas e maratonas combinadas.",
    url: "https://chat.whatsapp.com/LVAXJlicSJhGARpdz4btRa" },
  { nome: "Clubes de leitura", membros: 318, cat: "lazer",
    desc: "Leitura combinada do mês e encontros para discutir o livro.",
    url: "https://chat.whatsapp.com/KeCRL37ruQjK9zXS4ptCtO" },
  { nome: "Poetas e poesias", membros: 78, cat: "lazer",
    desc: "Poemas próprios e alheios, saraus e leituras.",
    url: "https://chat.whatsapp.com/GL1trQi8CWGDUTf4yx63p4" },
  { nome: "E-sports", membros: 186, cat: "lazer",
    desc: "Campeonatos, times e partidas de jogos online.",
    url: "https://chat.whatsapp.com/KT2zvAxuRzpIBRAFTO5VC1" },
  { nome: "Figurinhas", membros: 486, cat: "lazer",
    desc: "Troca de figurinhas de WhatsApp feitas pela própria galera.",
    url: "https://chat.whatsapp.com/JNrRqiRWkYbKBLdEGA2yy6" },
  { nome: "Pôker chinês (xaina)", membros: 18, cat: "lazer",
    desc: "Mesas de pôker chinês combinadas entre estudantes.",
    url: "https://chat.whatsapp.com/JDGhMBd1Cr3IYD9a72krgZ" },
  { nome: "Sinuqueiros", membros: 53, cat: "lazer",
    desc: "Mesas de sinuca marcadas pelos bares da cidade.",
    url: "https://chat.whatsapp.com/DGXbw5FRKT36UhCHqB9axh" },
  { nome: "Truco", membros: 70, cat: "lazer",
    desc: "Partidas de truco marcadas no campus e nos bares.",
    url: "https://chat.whatsapp.com/DUFFDkt5V0u1iTiIVHne3n" },
  { nome: "Bike", membros: 106, cat: "lazer",
    desc: "Pedais em grupo, rotas seguras e manutenção de bicicleta.",
    url: "https://chat.whatsapp.com/Le7UwWY10P3HMCZv8YFmdk" },
  { nome: "Yoga", membros: 235, cat: "lazer",
    desc: "Aulas, praticantes e encontros de yoga em BH.",
    url: "https://chat.whatsapp.com/D4d8pDzIuAsKgoBvzTX2jN" },
  { nome: "Forró", membros: 138, cat: "lazer",
    desc: "Aulas, rodas e forrós pela cidade.",
    url: "https://chat.whatsapp.com/LDx2kiIDMQg1tLRNtqX8ji" },
  { nome: "Clube do Céu", membros: 543, cat: "lazer",
    desc: "Avisos, encontros e programação do Clube do Céu.",
    url: "https://chat.whatsapp.com/JLL2tIPLLCI3KBD4kXUOPR" },
  { nome: "Cabuloso", membros: 606, cat: "lazer",
    desc: "Torcida do Cruzeiro: jogos, ingressos e caravanas.",
    url: "https://chat.whatsapp.com/G1174oanvEt5QMQ6I5UVY6" },
  { nome: "Galo", membros: 522, cat: "lazer",
    desc: "Torcida do Atlético: jogos, ingressos e caravanas.",
    url: "https://chat.whatsapp.com/Has56LX6rvL4YSmQdKyu7L" },

  /* ---- Social e avisos ---- */
  { nome: "Spotted 1", membros: 50, cat: "social",
    desc: "Recados anônimos, paqueras e procura-se do campus.",
    url: "https://chat.whatsapp.com/ENNziiLe84FFi6ZgRBjPjK" },
  { nome: "Chat", membros: 319, cat: "social",
    desc: "Conversa solta sobre qualquer assunto, sem tema fixo.",
    url: "https://chat.whatsapp.com/GkpfQtJbEXE7H6u6U3Yrpk" },
  { nome: "Tinder", membros: 82, cat: "social",
    desc: "Paquera entre estudantes, no espírito do aplicativo.",
    url: "https://chat.whatsapp.com/KH2HCAgXS2MCUXFcR8zjbH" },
  { nome: "Grindr", membros: 52, cat: "social",
    desc: "Paquera entre homens, no espírito do aplicativo.",
    url: "https://chat.whatsapp.com/I12ASgKEYhlLmWvP3dMRHL" },
  { nome: "30+", membros: 61, cat: "social",
    desc: "Espaço para estudantes de trinta anos ou mais.",
    url: "https://chat.whatsapp.com/H4J3GheXiB0KlrITF6obi3" },
  { nome: "Sorteios e parcerias", membros: 183, cat: "social",
    desc: "Sorteios, cupons e parcerias com comércios da cidade.",
    url: "https://chat.whatsapp.com/HTJZE7DiqqJIYoFfJftxSV" },
  { nome: "Promoções de tatuagens", membros: 534, cat: "social",
    desc: "Flashs, promoções e agenda de tatuadores de BH.",
    url: "https://chat.whatsapp.com/HgrUCNZDeEyJEjs7xxpzDK" },
  { nome: "Sorteio de tatuagens", membros: 100, cat: "social",
    desc: "Sorteios de sessão de tatuagem entre estudantes.",
    url: "https://chat.whatsapp.com/EWueKAbWMKCE6h7Yil75np" },
  { nome: "Adoção responsável", membros: 529, cat: "social",
    desc: "Cães e gatos para adoção, com acompanhamento depois.",
    url: "https://chat.whatsapp.com/FAgHur34DPp2jQ11zjzU7E" },
  { nome: "Férias", membros: 283, cat: "social",
    desc: "Viagens, bate-voltas e planos para o recesso.",
    url: "https://chat.whatsapp.com/GZot1iRa2DlJVChVI8FweS" },
  { nome: "Achados e perdidos", membros: 757, cat: "social",
    desc: "Objetos perdidos e encontrados pelo campus.",
    url: "https://chat.whatsapp.com/B7uU3AmkDkH1CknD1RYZl7" },
  { nome: "Links de grupos", membros: 679, cat: "social",
    desc: "Onde circulam os links dos outros grupos da comunidade.",
    url: "https://chat.whatsapp.com/BAF4tv4MYOnBUEfEmwkdxf" },
  { nome: "Divulgadores e moderadores", membros: 53, cat: "social",
    desc: "Coordenação de quem ajuda a administrar os grupos.",
    url: "https://chat.whatsapp.com/Jx2P9dDkEs0IXafhDnB28t" },
  { nome: "Rateio de streaming e contas", membros: 519, cat: "social",
    desc: "Divisão de assinaturas: streaming, música e afins.",
    url: "https://chat.whatsapp.com/JsAiyQfvMDKILhkL5tqCut" },

  /* ---- Idiomas ---- */
  { nome: "Inglês — conversation", membros: 663, cat: "idiomas",
    desc: "Prática de conversação em inglês entre estudantes.",
    url: "https://chat.whatsapp.com/EBjlmd4XPGRLjqfa0262E6" },
  { nome: "Espanhol — conversación", membros: 243, cat: "idiomas",
    desc: "Prática de conversação em espanhol entre estudantes.",
    url: "https://chat.whatsapp.com/Ed7k7CDa3jB7WNalAYZV5o" }

];
