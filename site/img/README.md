# site/img — imagens do site

---

## `equipe-recorte.png` — a imagem que fecha a seção 1 ✅ em uso

**É a versão com fundo transparente**, não a do galpão.

O efeito da referência depende disso: a imagem é um objeto solto sobre o
fundo claro, sem moldura, atravessando a emenda pra faixa escura. Uma foto
com fundo viraria um retângulo — e retângulo não atravessa emenda, ele
corta a página em duas.

### O que foi feito no arquivo enviado

O upload original está preservado em `equipe-recorte-original.png`. O
arquivo em uso passou por dois tratamentos:

1. **Aparado na caixa do grupo** — 1376×768 → **519×594**. O original
   tinha 441px de transparência à esquerda e 416px à direita. O CSS usa
   `background-size: contain`, e transparência conta como imagem: cada
   pixel vazio encolhia a equipe na tela. Aparado, o grupo ocupa o quadro.
2. **Convertido de PNG-8 (paleta) para PNG-24 com alfa** — a paleta de 256
   cores serrilha a borda do recorte e cria banda nos degradês da pele e
   do jeans.

### ⚠️ O arquivo está sendo ampliado — vale reexportar

O arquivo em uso tem **519×594**. Depois que a equipe cresceu pra ocupar
a tela do desktop, o elemento renderiza assim:

| Tela | Tamanho na página | Ampliação em telas retina |
|---|---|---|
| 1280×800 | 464×531 | 1,8× |
| 1440×900 | 522×597 | 2,0× |
| 1920×1080 | 620×710 | 2,4× |

Em monitor comum a imagem fica no tamanho certo. Em tela retina (celular,
MacBook, monitor 4K) ela é esticada e perde definição — mais visível no
rosto e no contorno do recorte.

**Alvo pra reexportar: 1300×1490.** Cobre o maior caso (620px) em retina
com folga.

### Se for reexportar

- Formato: **PNG-24 com alfa**, já aparado no grupo
- Tamanho: **1300×1490** (ver tabela acima)
- A cor limitada veio do PNG-8 de origem — reexportar da fonte em 24 bits
  melhora a nitidez
- Peso: passar num compressor (TinyPNG, oxipng). Alvo: **abaixo de 500 KB**
- Vale gerar também um `.webp` com alfa e servir via `<picture>`

### Como ajustar o tamanho na tela

```css
--crew-w: clamp(280px, min(40vw, 58vh), 620px);
```

A **largura** manda — é ela que dá presença na tela larga. A altura sai
sozinha da proporção do arquivo. O `min(…, 58vh)` é a trava pra que numa
janela baixa (notebook, navegador com muitas abas) a equipe não estoure a
altura da tela. Hoje ela ocupa **66% da altura** em qualquer desktop.

**Retoque pendente:** há um resíduo claro do recorte perto da perna da
pessoa mais à direita, visível quando a imagem renderiza grande.

### Ajustes de composição

Três variáveis no topo de `css/style.css` controlam tudo:

```css
--crew-h:     clamp(300px, 48vh, 580px);  /* altura do recorte */
--crew-bleed: clamp(28px, 4.5vh, 62px);   /* quanto invade a faixa escura */
--strip-h:    clamp(88px, 12vh, 124px);   /* altura da faixa escura */
```

`--crew-bleed` é o coração do efeito: é o quanto a equipe passa por cima
da faixa. Aumentar faz a equipe "pisar" mais dentro da seção 2. Note que
`--crew-h` também alimenta o padding de baixo do hero, então mexer nela
reserva espaço automaticamente — não precisa ajustar mais nada.

---

## `equipe-galpao.jpg` — a versão com fundo

Não é usada na seção 1, mas **guardar**. É a foto certa pra seção de
empresa ou de obras, onde o galpão cheio de estoque é o argumento —
mostra porte e capacidade de entrega, coisa que o recorte perde.

Exportar em JPG qualidade 78-82, abaixo de 600 KB.

---

## Outras imagens pendentes

- **Círculos decorativos** — os dois `.orb` (esquerda e direita) estão com
  padrão de ripas em CSS esperando foto de amostra de forro. Entram pelas
  variáveis `--orb-left` e `--orb-right`, também no topo do `style.css`
- **Logo real** (`logo.png` / `logo.svg`) — o header usa um lockup
  provisório desenhado em SVG
