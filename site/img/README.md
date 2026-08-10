# site/img — imagens do site

Nenhuma imagem está aqui ainda. Enquanto os arquivos não existirem, o
layout continua funcionando: os slots caem em padrões CSS ou ficam
vazios, sem quadro quebrado.

---

## `equipe-recorte.png` — a imagem que fecha a seção 1

**É a versão com fundo transparente**, não a do galpão.

O efeito da referência depende disso: a imagem é um objeto solto sobre o
fundo claro, sem moldura, atravessando a emenda pra faixa escura. Uma foto
com fundo viraria um retângulo — e retângulo não atravessa emenda, ele
corta a página em duas.

### Como exportar

**Apare o PNG na caixa do grupo.** O arquivo original tem uma faixa larga
de transparência de cada lado, e o CSS usa `background-size: contain` —
transparência conta como imagem, então cada pixel vazio encolhe a equipe
na tela. Aparado, o grupo ocupa o quadro inteiro.

- Formato: **PNG-24 com alfa** (PNG-8 serrilha a borda do recorte)
- Largura: **2000px** já aparado é suficiente — o elemento tem no máximo
  580px de altura, então 2000px cobre telas retina com folga
- Peso: passar num compressor (TinyPNG, oxipng). Alvo: **abaixo de 500 KB**
- Vale gerar também um `.webp` com alfa e servir via `<picture>`

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
