# Grupos da UFMG — página de links

HTML, CSS e JavaScript separados, sem framework e sem build. Abre com duplo
clique e publica em qualquer lugar que sirva arquivo estático.

```
index.html          estrutura da página e as ilustrações em SVG
css/estilo.css      toda a aparência
js/dados.js         os grupos, as categorias e os contatos
js/app.js           busca, filtros, links de WhatsApp e o botão do pix
```

## Antes de publicar

**Troque o link da CEDER.** No `index.html`, procure por `SEU-LINK-AQUI` — está
no botão do anúncio, logo abaixo de um comentário em destaque. É a única
edição obrigatória.

## Publicar

**Vercel ou Netlify:** arraste a pasta inteira para a área de upload. Não há
comando de build.

**GitHub Pages:** suba a pasta como está e ligue Pages nas configurações.

Mantenha as subpastas `css/` e `js/` ao lado do `index.html` — os caminhos são
relativos, então a pasta funciona em qualquer endereço, inclusive num
subdiretório.

## Atualizar a lista

Mexa só no `js/dados.js`. Nada ali sabe como a página é desenhada, e nada no
`app.js` sabe quais grupos existem.

```js
var GRUPOS = [
  { nome: "Spotted 1", membros: 50, cat: "conversa", url: "https://chat.whatsapp.com/..." },
  ...
];
```

A contagem de grupos, o total de pessoas e os chips de filtro se ajustam
sozinhos — não há número escrito à mão na página.

O campo `membros` aceita três coisas:

| valor | como aparece |
|---|---|
| um número | `966 membros` |
| `"lotado"` | etiqueta vermelha **lotado** |
| `0` | etiqueta verde **novo** |

As categorias ficam logo abaixo, em `CATEGORIAS`, cada uma com nome e cor. Um
chip só aparece se existir grupo daquela categoria, então dá para criar
categoria nova sem tocar em mais nada.

Os três números do painel (104 grupos, 45.882 membros, média 436) são das seis
listas somadas, e não desta página — esses estão no `index.html`, na seção
`painel`.

## Por que os scripts não são módulos ES

`dados.js` e `app.js` são carregados como scripts comuns, nessa ordem. Com
`type="module"` a página só funcionaria servida por um servidor: aberta por
duplo clique, o navegador bloqueia o carregamento por CORS e a tela fica
vazia. Como é útil poder abrir o arquivo direto para conferir uma alteração,
scripts comuns saem mais barato aqui do que a organização que módulos trariam.

## O brasão da UFMG

O emblema do topo é um desenho original: dez pessoas em pé, em roda, ao redor
de uma casa. O brasão da UFMG é marca registrada da universidade, e esta
página não tem vínculo com a administração — por isso ele não foi reproduzido.

Se houver autorização para usar o brasão, o ponto de troca está comentado
dentro do `<svg class="emblema">` no `index.html`: é substituir o grupo
`#centro` por uma `<image>`.

## Detalhes que valem saber

**A busca ignora acento.** Quem digita `brecho` encontra `Brechó`, porque
ninguém escreve acento no celular com pressa. Ela também procura pelo nome da
categoria, então `brecho` traz a seção de trocas inteira.

**Os dois pedidos de lista são montados em JavaScript**, com o texto da
mensagem codificado pelo navegador. Escrever esse link pronto à mão é onde
nasce acento quebrado no WhatsApp.

**O botão de copiar o pix tem plano B.** `navigator.clipboard` só existe em
HTTPS; fora disso a página usa o método antigo, e se nem esse funcionar mostra
a chave para copiar à mão.

**A animação dos carros respeita `prefers-reduced-motion`.** Quem pediu menos
movimento no sistema vê a rua parada.

**As ilustrações ficam no `index.html`, em SVG inline.** Poderiam virar
arquivos `.svg` à parte, mas SVG carregado por `<img>` fica isolado do CSS da
página — e aí os carros parariam de andar e as cores deixariam de acompanhar
o tema.
