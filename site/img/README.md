# site/img — imagens do site

## `equipe.jpg` — fundo da seção 1

Ainda **não está aqui**. Enquanto o arquivo não existir, o hero cai num
gradiente azul (fallback definido em `css/style.css`) e o layout continua
funcionando normalmente.

Quando for salvar a foto da equipe nessa pasta, dois requisitos:

**1. Resolução mínima de 4200px de largura.**
A animação de abertura começa em `scale(2.2)` — ou seja, o primeiro frame
usa só 45% da largura do arquivo. Numa tela de 1920px isso exige
`1920 × 2.2 ≈ 4224px` de fonte pra não borrar no começo.

**2. A equipe centralizada.**
A âncora do zoom é `transform-origin: 50% 38%` — calibrada pro rosto da
pessoa do meio. Se o enquadramento da foto mudar, ajustar esse valor em
`css/style.css` (seletor `.hero__photo`).

### Para trocar por outro arquivo

Mudar só a variável no topo de `css/style.css`:

```css
:root { --photo: url('../img/equipe.jpg'); }
```

### Peso

Exportar como JPG qualidade 78-82 e passar num compressor. Alvo: **abaixo
de 600 KB**. Vale gerar também um `.webp` e servir via `<picture>` quando
o resto do site estiver montado.

## Outras imagens pendentes

- Faixa do card **Forro PVC** — hoje é um padrão de ripas em CSS
- Faixa do card **Acabamento** — hoje é um gradiente madeira em CSS
- Logo real (`logo.png` / `logo.svg`) — o header usa um lockup provisório
  desenhado em SVG
