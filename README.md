# Site da UDS · Sebrae RN

Protótipo do site da Unidade de Desenvolvimento Setorial.

## Estrutura
- `index.html`: página inicial
- `setores/`: uma página por setor (todas usam o mesmo modelo)
- `dados/setores.js`: **conteúdo das páginas de setor** (programas, trilhas, feiras, consultorias, gestor)
- `assets/img/`: fotos e logo
- `assets/fontes/`: fonte Archivo (hospedada no próprio site)
- `assets/js/dc.js`: motor que monta as páginas e faz as animações

## Como editar
- Conteúdo de um setor: abra `dados/setores.js` e troque os textos entre aspas.
- Foto: coloque o arquivo em `assets/img/` e aponte o caminho no setor (ex.: `foto: 'img/yves.jpg'`).
- Os números do topo de cada setor são contados sozinhos.

## Publicar no GitHub Pages
Settings → Pages → Source: "Deploy from a branch" → Branch: `main` / `(root)` → Save.
