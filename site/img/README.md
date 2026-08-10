# site/img — imagens do site

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

## `obra-1.jpg` … `obra-4.jpg` — fotos da seção 3

Ainda não existem. Enquanto não entrarem, os cartões mostram um
placeholder desenhado com o rótulo "foto da obra" — não fica quadro
quebrado.

- Proporção: **16/10** (o cartão recorta pelo centro, então a foto não
  precisa ser exata)
- Tamanho: **1200 × 750** já cobre bem
- JPG qualidade 78-82, abaixo de 400 KB cada

### Como ligar cada foto

Duas edições por obra:

1. Em `css/style.css`, no bloco "fotos das obras", trocar o `none`:
   ```css
   .obra:nth-child(1) .obra__foto { --foto: url('../img/obra-1.jpg'); }
   ```
2. Em `index.html`, tirar a classe `obra--vazia` do `<li>` correspondente
   (é ela que mostra o rótulo de placeholder).

### O que fotografar

O que vende forro é o **antes e depois** e o **ambiente pronto com boa
luz**. Enquadramento com o teto ocupando boa parte do quadro, linhas
retas, sem contraluz de janela estourando. Foto de celular resolve, desde
que o ambiente esteja limpo e iluminado.

## Outras imagens pendentes

- **Círculos decorativos** — os dois `.orb` (esquerda e direita) estão com
  padrão de ripas em CSS esperando foto de amostra de forro. Entram pelas
  variáveis `--orb-left` e `--orb-right`, no topo do `style.css`
- **Logo real** (`logo.png` / `logo.svg`) — o header usa um lockup
  provisório desenhado em SVG
