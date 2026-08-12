# site/img — imagens do site

---

## `logo.webp` e `logo-barra.webp` — a marca ✅ em uso

O arquivo veio do cliente com **fundo branco chapado, sem alfa**
(`ChatGPT Image 10 de ago. de 2026, 23_17_38.png`, 1572 × 1001, RGB).

O recorte aqui foi por **limiar**, não por preenchimento a partir das
bordas: o alfa sai da distância ao branco (`255 − menor canal`), com a
cor "despré-multiplicada" depois pra borda não ficar leitosa. É o
caminho certo pra esse arquivo porque as contraformas das letras — o
miolo do `A`, do `o`, do `P`, do `R` — não tocam a borda, e num
preenchimento por borda elas continuariam brancas e opacas.

### São dois arquivos porque são dois tamanhos de leitura

| Arquivo | Onde | Por quê |
|---|---|---|
| `logo-barra.webp` (700 × 403) | barra do topo | **sem a tarja da assinatura** |
| `logo.webp` (880 × 573) | rodapé | completo, com a assinatura |

Na barra a marca tem ~50px de altura. A tarja "Inovar, mudar, renovar…"
ficaria com 5px e viraria um borrão cinza — então ela sai. O corte não é
uma máscara: as linhas 700–800 do master foram **removidas** e a base da
casa colada de volta. Dá certo porque naquela faixa só existem a tarja e
a parede esquerda, que é uma barra vertical uniforme.

### No rodapé a marca é negativo, e isso é de propósito

`filter: brightness(0) invert(1)` achata tudo em preto e devolve em
branco. Como as contraformas continuam vazadas, a tarja da assinatura
vira branca com o texto lendo o fundo escuro por trás — legível. O que
se perde é o vermelho do `FORRO`; é o preço de uma marca que só existe
em versão colorida.

Se um dia vier uma versão clara de verdade (ou o vetor), é só trocar o
`src` e tirar o `filter` da regra `.logo--rodape .logo__img`.

### Atenção à paleta

O logo usa **azul-marinho `#041F44` e vermelho `#A8101A`**. O azul é bem
mais escuro que o `--navy #172D68` da identidade, e o vermelho **não
existe na paleta** que foi passada (azul, marrom, dourado). O site
continua na paleta da identidade — quem manda nessa decisão é você.

Masters sem perda: `logo.png` e `logo-barra.png` (guardados, não
servidos).

---

## `equipe-faixa.webp` — a faixa da seção 1 ✅ em uso

**1198 × 687, WebP com alfa, 92 KB.** É o arquivo que o CSS carrega.
`equipe-faixa.png` é o mesmo conteúdo sem perda (1,2 MB) — fica guardado
como master pra futuros recortes, não é servido.

### O upload veio com o fundo chapado

O arquivo enviado (`Gemini_Generated_Image_ffksncffksncffks.png`) **não
tinha transparência**: todos os pixels vinham opacos e o "fundo" era o
quadriculado cinza-e-branco desenhado. Era uma captura de tela da
pré-visualização, não o arquivo com alfa.

Dava pra ver na medição: os pixels do fundo alternavam entre `#CECECE` e
`#FFFFFF` num padrão regular, e o canal alfa tinha 0 pixels transparentes
em 1.056.768.

O alfa foi reconstruído assim:

1. Marca todo pixel **neutro e claro** (canais R≈G≈B, valor ≥ 185)
2. Preenche a partir das **bordas** — só vira transparente o que está
   ligado à borda. É isso que impede que brilhos brancos dentro da
   camisa e do rosto virem buraco
3. Encolhe a máscara em 1px pra remover a franja que se misturou com o
   quadriculado, e suaviza a borda
4. Apara na caixa do grupo → 1198 × 687

Se um dia precisar refazer, o caminho é pedir o PNG com alfa de verdade
em vez de captura de tela — o resultado é mais limpo do que qualquer
reconstrução.

### Resolução

O grupo tem 1198px de largura e é esticado até a largura da página:

| Tela | Ampliação | Em retina |
|---|---|---|
| 390 (celular) | 0,33× (reduz) | 0,65× |
| 1280×800 | 1,07× | 2,1× |
| 1440×900 | 1,20× | 2,4× |
| 1920×1080 | 1,60× | 3,2× |

Em monitor comum está nítido em qualquer tamanho. Em retina ainda há
ampliação, mas o resultado ficou bom — é **2,3× mais informação** que o
arquivo anterior (519px). Só vale mexer nisso de novo se aparecer
incômodo real: o alvo seria 2880px de largura.

### Como ajustar o enquadramento

```css
--crew-span: 100vw;   /* largura do grupo. 100vw = de ponta a ponta */
--crew-h: min(calc(var(--crew-span) * 687 / 1198), 88vh);
```

`--crew-span` controla o tamanho das pessoas. Passar de `100vw` amplia o
grupo e corta as pessoas das pontas nas bordas da tela.

O `687 / 1198` é a proporção do arquivo — **se trocar a imagem por uma de
outra proporção, esses dois números mudam**.

A trava `88vh` impede que numa janela baixa a faixa tome a tela inteira;
quando ela entra, o corte extra sai por baixo, escondido pela faixa preta.

### Retoque pendente

Sobrou um risco azul claro, tipo brilho, na altura do ombro da pessoa
mais à direita. Veio da imagem original — está dentro do recorte, então
não dá pra tirar automaticamente sem apagar pedaço da camisa.

---

## Arquivos guardados (não servidos)

| Arquivo | O que é |
|---|---|
| `equipe-faixa.png` | master sem perda da faixa em uso |
| `Gemini_Generated_Image_ffksncffksncffks.png` | upload original, com o quadriculado chapado |
| `equipe-recorte-original.png` | primeira versão, corpo inteiro, 519px |

A versão anterior derivada (`equipe-recorte.png`) foi removida — está no
histórico do git se precisar.

## `equipe-galpao.jpg` — a versão com fundo

Ainda não subiu. Não entra na seção 1, mas vale guardar: é a foto certa
pra seção de empresa ou de obras, onde o galpão cheio de estoque é o
argumento — mostra porte e capacidade de entrega, coisa que o recorte
perde.

Exportar em JPG qualidade 78-82, abaixo de 600 KB.

## `sobrenos.webp` — a foto do "Sobre nós" ✅ em uso

**1500 × 1125, 104 KB.** Díptico: galpão com estoque e carreta carregada
à esquerda, instalador colocando forro à direita. Casa exatamente com o
argumento da seção — material em casa e equipe própria.

A proporção do arquivo é 1,334, que é 4/3 na bochecha. Como o quadro é
`aspect-ratio: 4/3`, não há corte nenhum no desktop.

Master sem perda: `sobrenos.png` (7,1 MB, guardado, não servido).

## `obras1.webp` … `obras4.webp` — a seção de obras ✅ em uso

**1200 px de largura, 78–96 KB cada.** São **colagens em pé**, feitas pro
Instagram — não são fotos soltas:

| Arquivo | O que é |
|---|---|
| `obras1` | ANTES/DEPOIS com legendas "Fase 1" e "Fase 2" |
| `obras2` | ANTES/DEPOIS 2×2, telha exposta → forro branco |
| `obras3` | grade 2×2 de tetos amadeirados, sem rótulo |
| `obras4` | grade 2×2: forro branco, vigas, beiral e galpão |

### O formato do cartão saiu delas

O cartão era `16/10` deitado, com o grid em duas colunas. Nesse formato
metade de cada colagem sairia do quadro e os rótulos ANTES/DEPOIS seriam
decapitados. Então o cartão virou **`aspect-ratio: 3/4`** e o grid virou
**quatro colunas** (duas até 1180px, uma até 640px).

**Se um dia entrar foto deitada, as duas coisas voltam juntas** — mudar só
uma deixa o cartão errado.

As razões dos arquivos variam de 0,75 a 0,80. Com `3/4` e `cover`, o corte
máximo é de 3% em cada lado da `obras1`, longe das letras.

Masters sem perda: `obras1.png` … `obras4.png` (6–7 MB cada, guardados,
não servidos — o `.vercelignore` mantém todos eles fora do deploy).

### O que fotografar daqui pra frente

O que vende forro é o **antes e depois** e o **ambiente pronto com boa
luz**. Enquadramento com o teto ocupando boa parte do quadro, linhas
retas, sem contraluz de janela estourando. Foto de celular resolve, desde
que o ambiente esteja limpo e iluminado.

## `cta.jpg` — a peça da chamada final

O bloco antes do rodapé não é um quadro de foto: é uma **peça cortada na
diagonal**, no espírito da telha da referência. O corte é feito por
`clip-path`, então a foto que entrar ali vai ser recortada no mesmo
ângulo — não precisa vir cortada.

Enquanto não existe, o lugar é preenchido por uma madeira desenhada em
CSS, com as réguas convergindo em perspectiva (é a convergência que faz
ler como teto e não como piso). **Não há rótulo de placeholder ali**: a
peça se sustenta sozinha, com fio de luz no corte, luz quente escorrendo
do alto e recuo nos cantos. Sem essas camadas ela lê como chapa lisa.

- Enquadramento: **teto amadeirado visto de baixo**, com as réguas
  correndo na diagonal — a foto que você mandou no chat é exatamente isso
- Tamanho: **1600 × 1100** basta
- JPG qualidade 78-82, abaixo de 500 KB

### Como ligar

1. Em `css/style.css`, na regra `.cta`, trocar o `none`:
   ```css
   .cta { --cta-foto: url('../img/cta.jpg'); }
   ```
2. Em `index.html`, tirar a classe `cta--vazia` do `<section class="cta">`
   (é ela que mostra a madeira de CSS e o rótulo).

## Outras imagens pendentes

- **O painel ripado do hero não usa imagem.** Ripa, vão, veio da madeira
  e fita de LED são todos desenhados em CSS, e a montagem na abertura é
  feita por JS. Não há foto pra subir ali.

  Os dois círculos decorativos que existiam no hero saíram — o painel
  ocupa o lugar deles. A textura de madeira (`--madeira-img`) continua
  viva na amostra do "Sobre nós" e na peça da chamada final
- **Logo real** (`logo.png` / `logo.svg`) — o header usa um lockup
  provisório desenhado em SVG
