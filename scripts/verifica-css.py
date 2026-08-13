# uma chave orfa no CSS nao quebra o arquivo: o parser so descarta a regra
# seguinte, em silencio. Foi assim que a .galeria sumiu inteira uma vez.
import re, sys, pathlib
s = pathlib.Path('/home/user/casaforropvc/site/css/style.css').read_text()
s = re.sub(r'/\*.*?\*/', '', s, flags=re.S)
s = re.sub(r'"[^"]*"|\'[^\']*\'', '""', s)
nivel, linha, erros = 0, 1, []
for ch in s:
    if ch == '\n': linha += 1
    elif ch == '{': nivel += 1
    elif ch == '}':
        nivel -= 1
        if nivel < 0: erros.append(linha); nivel = 0
if erros or nivel:
    print('CSS DESEQUILIBRADO — orfas na linha', erros, '| sobrando', nivel); sys.exit(1)
print('chaves do CSS: equilibradas')
