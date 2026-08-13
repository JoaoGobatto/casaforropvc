#!/usr/bin/env python3
"""Carimba o hash do CSS no <link> do index.html.

Sem isso o navegador pode servir CSS velho junto com HTML novo. Foi assim
que a galeria apareceu esticada e sem rolagem depois de um deploy: o HTML
novo tinha o <dialog>, o CSS em cache ainda era o da versão quebrada.

Rodar sempre que style.css ou fonts.css mudar, antes do commit.
"""
import hashlib, pathlib, re

raiz = pathlib.Path(__file__).resolve().parent.parent / 'site'
html = raiz / 'index.html'
s = html.read_text()

for nome in ['style.css', 'fonts.css']:
    v = hashlib.sha1((raiz / 'css' / nome).read_bytes()).hexdigest()[:8]
    s, n = re.subn(r'href="css/%s(\?v=[0-9a-f]+)?"' % re.escape(nome),
                   'href="css/%s?v=%s"' % (nome, v), s)
    print('%-10s v=%s  (%d link)' % (nome, v, n))

html.write_text(s)
