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

### 🚨 A imagem precisa ser refeita maior — é o gargalo agora

O arquivo tem **519px de largura**. Desde que a equipe virou faixa de
largura total, ela é esticada até a largura da página inteira:

| Tela | Grupo renderizado | Ampliação | Em retina |
|---|---|---|---|
| 390 (celular) | 390px | 0,8× | 1,5× |
| 1280×800 | 1280px | 2,5× | 4,9× |
| 1440×900 | 1440px | 2,8× | 5,5× |
| 1920×1080 | 1920px | 3,7× | 7,4× |

No celular está ótimo. **No desktop está visivelmente borrado** — dá pra
ver no contorno do cabelo, na barba e na transição azul/vermelho das
camisas. É a primeira coisa que o visitante vê, então vale resolver.

Não dá pra consertar por software: a informação não existe no arquivo.
A imagem precisa ser **gerada de novo em resolução maior**, não só
reexportada.

**Alvo: 2880px de largura.** Cobre 1440px em tela retina.

Como só o tronco pra cima aparece, dá pra exportar já cortado —
**2880 × 1980** basta, sem as pernas. Se vier assim, é só ajustar duas
linhas do `style.css` (`--crew-cut: 1` e a proporção em `--crew-h`).

Em PNG-24 esse tamanho passa fácil de 3 MB. Melhor caminho: **WebP com
alfa**, que fica em torno de 300-600 KB com a mesma qualidade, e deixar o
PNG só como fallback no `<picture>`.

### Como ajustar o enquadramento

```css
--crew-span: 100vw;   /* largura do grupo. 100vw = de ponta a ponta */
--crew-cut:  0.60;    /* fração da altura que aparece */
```

`--crew-span` é o que controla o tamanho das pessoas. Baixar pra `70vw`
deixa a equipe menor e **bem mais nítida** — é a saída se você preferir
não refazer a imagem.

`--crew-cut` é onde as pernas são cortadas. Medi a cobertura do alfa
linha a linha: até 63% da altura é tronco; passando disso as pernas se
separam e o corte fica estranho. 0,60 corta logo abaixo dos braços
cruzados.

A trava `78vh` no `--crew-h` impede que numa janela baixa a faixa tome a
tela inteira.

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
