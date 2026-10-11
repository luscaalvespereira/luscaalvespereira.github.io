# Lucas Alves Pereira · Portfólio

Portfólio profissional com formação jurídica, experiência institucional, pesquisa, extensão e projetos de tecnologia. Interface responsiva em português, sem fotos ou logo na página, com temas claro e escuro.

## Desenvolvimento

Requer Node.js 22.12+ e pnpm 10.

```sh
pnpm install --frozen-lockfile
pnpm run dev
```

```sh
pnpm run build
pnpm run preview
```

O conteúdo fica em `src/data/portfolio.ts`, a interface em `src/App.tsx` e o design em `src/styles.css`.

## Publicação

Em Settings → Pages, selecione **GitHub Actions**. O workflow incluído publica a pasta `dist` em cada atualização da branch `main`. A configuração de caminhos relativos permite hospedar em subdiretórios, como o GitHub Pages. Também é possível importar o repositório em uma hospedagem compatível com Vite, usando `pnpm run build` e a saída `dist`.

## Recursos

- Tema inicial acompanha o sistema; a escolha manual fica salva no navegador.
- Navegação para seções, menu móvel, filtros de experiência e projetos com links diretos.
- Contatos por e-mail, LinkedIn, GitHub e Currículo Lattes.
- Favicon SVG, ícones PNG e manifesto próprios, independentes de serviços de edição.
- Foco visível, navegação por teclado e respeito à preferência por movimentos reduzidos.

As informações profissionais foram preservadas da versão fornecida. Revise `src/data/portfolio.ts` para atualizar vínculos, datas e contatos.
