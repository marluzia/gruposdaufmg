# Grupos da UFMG — como mexer na página

Esta página não precisa de programa nenhum instalado. Você abre os arquivos no
Bloco de Notas (ou no TextEdit, no Mac), troca o que está entre aspas, salva e upa pro github.

---

## O mapa dos arquivos

Você só precisa abrir os quatro de cima. Os outros fazem a página funcionar e
podem ficar quietos.

| arquivo | o que tem dentro |
|---|---|
| `js/dados-grupos.js` | os grupos de WhatsApp |
| `js/dados-festas.js` | as festas universitárias |
| `js/dados-parceiros.js` | os anúncios que passam no topo |
| `js/dados-textos.js` | os títulos, as frases e dois ajustes da página |
| | |
| `index.html` | o esqueleto e os desenhos |
| `css/estilo.css` | as cores e o tamanho das coisas |
| `js/app.js` | o funcionamento |
| `img/` | as imagens |

Cada um dos quatro primeiros começa com um texto explicando o que vai em cada
campo. Vale a pena ler uma vez.

---

## A regra que evita 90% dos problemas

Tudo o que é **texto** fica entre aspas. Tudo o que é **número** fica sem.

```
nome: "Brechó feminino",        ← texto, com aspas
membros: 966,                   ← número, sem aspas
```

E toda linha termina com vírgula, **menos a última** de cada bloco.

---

## Se a página abrir em branco

Foi uma aspa ou uma vírgula esquecida. Não entre em pânico: **abra o
`index.html` no seu computador** (duplo clique) e a própria página vai mostrar
uma faixa amarela dizendo qual arquivo tem o problema e o que está errado.

Essa faixa só aparece para você, enquanto edita. Quem visita a página
publicada nunca vê aviso nenhum — os itens com defeito são simplesmente
omitidos, e o resto da página funciona.

A faixa avisa sobre:

- arquivo que não foi lido até o fim (a tal da vírgula)
- ajuste escrito de um jeito que a página não entende
- grupo ou festa sem nome
- link vazio ou escrito errado
- categoria ou universidade que não existe
- data fora do formato, tanto a geral quanto a de um grupo só

---

## Tarefas do dia a dia

### Acrescentar um grupo

Abra `js/dados-grupos.js`, copie um bloco inteiro — as três linhas — cole
embaixo e troque as informações.

```js
{ nome: "Estágios 4", membros: 0, cat: "trabalho",
  desc: "Vagas de estágio abertas para quem ainda está na graduação.",
  url: "https://chat.whatsapp.com/XXXX" },
```

Em `membros` você pode pôr o número, ou `"lotado"` (com aspas), ou `0` para
grupo recém-criado. A etiqueta na página muda sozinha.

O `desc` é a frase que aparece embaixo do nome, dizendo para que serve o
grupo. Uma linha e meia é o tamanho certo — o card não corta, ele cresce, e
com três linhas a lista fica pesada de novo. Deixe `""` e o card fica só com
o nome.

Os números do painel — quantos grupos, quantos membros, a média — são contados
pela própria página. Você não precisa atualizar nada.

> **As descrições que vieram prontas são um rascunho.** Foram escritas a
> partir do nome e da categoria de cada grupo. Leia com calma e ajuste o que
> não bater com o que o grupo é de verdade.

### Mudar a data de atualização

Fica em `js/dados-textos.js`, no bloco `AJUSTES`:

```js
listaConferidaEm: "2026-09-26",
```

Formato ano-mês-dia, o mesmo das festas. Essa data aparece em **dois lugares
de uma vez**: na tarjinha embaixo do título da página e no rodapé de cada
card, naquele "conferido em 26/set". Toda vez que você repassar os links, é
só trocar esta linha.

Se você conferiu **um grupo só** — reabriu um link solto e viu que ainda
funciona — dá para dar a ele uma data própria, sem mexer na geral:

```js
{ nome: "Estágios 4", membros: 0, cat: "trabalho",
  desc: "Vagas de estágio abertas para quem ainda está na graduação.",
  atualizado: "2026-10-17",
  url: "https://chat.whatsapp.com/XXXX" },
```

Aquele card passa a mostrar 17/out, e os outros continuam com a data geral.
A tarjinha do alto mostra sempre a mais recente de todas.

### O botão de reportar link quebrado

Cada card tem, na beirada direita, um botãozinho de corrente partida. Quem
tocar nele cai no WhatsApp com a mensagem já escrita e o **nome do grupo
dentro dela** — sem isso chega um "o link não funciona" sem dizer qual.

O número que recebe esses avisos é o `whatsappSuporte`, no fim do
`js/dados-textos.js`. Se quiser que caiam no outro número, troque ali.

Para mudar a frase, em `TEXTOS`:

```js
reportarMensagem: "Oi! O link do grupo NOME está quebrado, vi na página dos Grupos da UFMG.",
```

Onde estiver escrito `NOME`, em letras grandes, a página troca pelo nome do
grupo em que a pessoa clicou. Você pode mover o `NOME` para outro lugar da
frase, mas não traduza nem mude essas quatro letras.

### Acrescentar uma festa

Abra `js/dados-festas.js` e copie um bloco inteiro.

A data vai no formato **ano-mês-dia**: `"2026-10-17"`. Sempre quatro números,
traço, dois, traço, dois. É o único formato que a página entende.

Festa que já passou **some sozinha**. Não precisa apagar nada quando a data
vencer.

Os três links — ingresso, perfil e grupo — são opcionais. Deixe `""` e o botão
não aparece.

### Acrescentar uma faculdade

No alto do `js/dados-festas.js`, em `UNIVERSIDADES`. Copie uma linha e troque:

```js
izabela: { nome: "Izabela Hendrix", cor: "#A34F76" },
```

A palavra da esquerda (`izabela`) é o apelido que você vai usar no campo `uni`
das festas. Sem acento e sem espaço. O botão de filtro só aparece quando
existe festa daquela faculdade.

### Acrescentar um parceiro no carrossel

Em `js/dados-parceiros.js`. Com um parceiro só, o carrossel não gira; de dois
em diante, ele passa sozinho a cada seis segundos e desliza com o dedo.

Para usar um logo, coloque a imagem na pasta `img/` e escreva o nome dela no
campo `logo`. Imagem quadrada fica melhor.

### Mudar um título ou uma frase

Tudo em `js/dados-textos.js`. Troque o texto entre aspas e salve. A palavra da
esquerda não pode mudar.

Uma exceção: o `atualizado` agora guarda só o começo da frase
(`"Atualizada em"`). A data vem sozinha dos `AJUSTES`, para você não ter que
lembrar de mudar em dois lugares.

### Mudar quantos itens aparecem por página

No fim do `js/dados-textos.js`, no bloco `AJUSTES`:

```js
porPagina: 5,
```

São cinco grupos e cinco festas de cada vez; o resto fica nas próximas
páginas, e os botões **anterior** e **próxima** aparecem sozinhos quando a
lista passa desse tamanho. Trocar para `8` mostra oito. O número vai **sem
aspas**.

Quem filtra por categoria ou digita na busca volta para a primeira página
automaticamente.

### Mudar por qual seção a página abre

No mesmo bloco `AJUSTES`:

```js
comecarEm: "grupos"
```

Só valem duas respostas, com aspas: `"grupos"` ou `"festas"`. Se não houver
nenhuma festa futura cadastrada, os dois botões somem e a página mostra os
grupos direto.

Para mandar alguém direto numa seção, acrescente `#festas` ou `#grupos` no
fim do endereço:

```
https://seu-endereco.com/#festas
```

### Mudar o nome dos dois botões

Em `js/dados-textos.js`, nos campos `abaGrupos` e `abaFestas`. O numerozinho
ao lado de cada nome é contado pela página; você não mexe nele.

### Mudar os telefones e o pix

No fim do `js/dados-textos.js`, em `CONTATOS`. Números só com dígitos. Os do
WhatsApp precisam começar com `55`, que é o código do Brasil.

---

## Antes de publicar pela primeira vez

**Troque o link da CEDER.** Está em `js/dados-parceiros.js`, procure por
`SEU-LINK-AQUI`. É a única coisa obrigatória.

## Publicar

**Vercel ou Netlify:** arraste a pasta inteira para a área de upload do
painel. Não tem comando nenhum para rodar.

**GitHub Pages:** suba a pasta como está e ligue o Pages nas configurações.

Mantenha as subpastas `css/`, `js/` e `img/` ao lado do `index.html`. Os
caminhos são relativos, então a pasta funciona em qualquer endereço.

---

## Detalhes que valem saber

**A busca ignora acento.** Quem digita `republica` encontra `Repúblicas`,
porque ninguém escreve acento no celular com pressa. Ela também procura pelo
nome da categoria, então `brecho` traz a seção de trocas inteira.

**O calendário do filtro de data segue o idioma do navegador de quem visita.**
Num celular em português aparece dia/mês/ano; num navegador configurado em
inglês, mês/dia/ano. Isso é do próprio navegador e não tem como mudar pela
página — mas a escolha é feita no calendarinho, então não atrapalha.

**Os links de WhatsApp são montados pela página**, com o texto da mensagem
codificado na hora. É por isso que os acentos não chegam quebrados do outro
lado.

**O botão de copiar o pix tem plano B.** Em endereços sem HTTPS, ou em
navegador antigo, ele usa o método antigo de cópia; se nem esse funcionar,
mostra a chave para copiar à mão.

**As animações respeitam quem pediu menos movimento** nas configurações do
celular: a rua fica parada e o carrossel não gira sozinho.

**O emblema do topo** é uma roda de pessoas desenhada à mão em volta de uma
imagem. Para trocar a imagem do centro, coloque o arquivo na pasta `img/` e
mude o nome no `index.html`, no `href` que está logo abaixo do comentário
explicando isso.

---

## Uma nota sobre a marca da UFMG

A página usa o M vermelho no emblema e leva UFMG no título. A universidade é
dona dessa marca, e a página é independente — por isso o rodapé diz, em letras
pequenas, que não há vínculo com a administração da UFMG.

Vale confirmar com o responsável pela iniciativa se existe autorização para o
uso. Se um dia for preciso tirar, é trocar uma linha: a imagem do centro do
emblema e o texto do título saem sem mexer em mais nada.
