/* Verificacao da galeria (o <dialog> de "Ver todas as obras").
 *
 * Existe por causa de dois bugs que passaram batido no olho:
 *
 * 1. Uma chave orfa no CSS derrubou a regra .galeria inteira, em silencio.
 *    O painel abriu esticado e sem rolagem.
 * 2. Um `display: flex` solto em .galeria venceu o `dialog:not([open])
 *    { display: none }` do navegador — regra de autor ganha da folha dele —
 *    e o painel ficou plantado no meio da pagina, sempre visivel, sem
 *    botao que o fechasse.
 *
 * Por isso o teste cobre os tres estados, nao so o de aberto.
 *
 *   node scripts/verifica-galeria.mjs
 */
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// o playwright nao e dependencia do site — quem roda o teste instala:
//   npm i -D playwright && npx playwright install chromium
let chromium;
try { ({ chromium } = await import('playwright')); }
catch {
  console.error('playwright nao encontrado.\n' +
                'instale com:  npm i -D playwright && npx playwright install chromium');
  process.exit(2);
}

const SITE = 'file://' + resolve(dirname(fileURLToPath(import.meta.url)), '..', 'site', 'index.html');
const b = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
let falhas = 0;
const conf = (ok, txt) => { console.log((ok ? '  ok   ' : '  FALHA') + '  ' + txt); if (!ok) falhas++; };

const estado = p => p.evaluate(() => {
  const d = document.getElementById('galeria');
  const r = d.getBoundingClientRect();
  const c = d.querySelector('.galeria__corpo');
  return { open: d.open, display: getComputedStyle(d).display,
           visivel: r.width > 0 && r.height > 0,
           cabe: Math.round(r.height) <= window.innerHeight,
           rolavel: c.scrollHeight > c.clientHeight,
           travado: document.body.classList.contains('galeria-aberta') };
});

for (const [larg, alt, tag] of [[1440, 900, 'desktop'], [390, 844, 'celular']]) {
  console.log('\n' + tag + ' ' + larg + 'x' + alt);
  for (const [via, fechar] of [
    ['botao X',     p => p.click('[data-fechar]')],
    ['Escape',      p => p.keyboard.press('Escape')],
    ['clique fora', p => p.mouse.click(4, Math.round(alt / 2))],
  ]) {
    const p = await b.newPage({ viewport: { width: larg, height: alt } });
    const erros = []; p.on('pageerror', e => erros.push(e.message));
    await p.goto(SITE);
    await p.waitForTimeout(400);

    const antes = await estado(p);
    conf(!antes.visivel, via + ' · antes de abrir, o painel esta escondido');

    await p.click('[data-abre-galeria]');
    await p.waitForTimeout(700);
    const aberto = await estado(p);
    conf(aberto.open && aberto.visivel, via + ' · abre');
    conf(aberto.cabe, via + ' · cabe na janela (nao vaza pra fora)');
    conf(aberto.rolavel, via + ' · o corpo rola');
    conf(aberto.travado, via + ' · a pagina de tras fica travada');

    await fechar(p);
    await p.waitForTimeout(700);
    const depois = await estado(p);
    conf(!depois.open && !depois.visivel, via + ' · fecha e some de vez');
    conf(!depois.travado, via + ' · devolve a rolagem da pagina');
    conf(!erros.length, via + ' · sem erro de JS' + (erros.length ? ': ' + erros[0] : ''));
    await p.close();
  }
}
await b.close();
console.log(falhas ? '\n' + falhas + ' FALHA(S)' : '\nGALERIA OK');
process.exit(falhas ? 1 : 0);
