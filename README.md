# gustanxr — Portfólio

Portfólio em Next.js App Router, React, TypeScript e Tailwind CSS. Mantém o desenho original com fundo escuro e detalhes roxos. A lista de projetos começa vazia; nenhum trabalho fictício foi incluído.

## Começar

Instale o Node.js 22 ou superior. Na pasta deste projeto:

```sh
npm ci
npm run dev
```

Abra http://localhost:3000. Diferentemente da primeira versão em HTML, este projeto precisa desses comandos para desenvolvimento.

## Organização

```text
src/
  app/
    layout.tsx          Idioma, metadados e estilos globais
    page.tsx            Composição da página principal
    not-found.tsx       Página 404
    globals.css         Tailwind e cores do tema
  components/
    layout/             Cabeçalho e rodapé
    sections/           Apresentação, projetos e sobre
    ui/                 Cartão reutilizável para futuros projetos
  config/site.ts        Nome, GitHub, descrição e textos pessoais
  data/projects.ts      Lista de projetos, inicialmente vazia
  types/project.ts      Estrutura tipada de um projeto
public/                 Arquivos estáticos e favicon
.github/workflows/      Compilação e publicação pelo GitHub Actions
```

Os componentes são Server Components por padrão. O carrossel de projetos usa um Client Component para a pesquisa e a navegação. O conteúdo é renderizado durante a compilação, sem banco de dados, autenticação ou servidor em produção.

## Personalizar

- **Nome, GitHub e apresentação:** `src/config/site.ts`.
- **Título principal:** `src/components/sections/hero.tsx`.
- **Roxo e demais cores:** variáveis `--color-*` no bloco `@theme` de `src/app/globals.css`.
- **Projetos futuros:** adicione itens em `src/data/projects.ts`, seguindo o tipo `Project`. Os campos obrigatórios são `slug`, `title`, `description` e `technologies`; `repositoryUrl` e `liveUrl` são opcionais. O estado “Em breve” é substituído pelos cartões automaticamente.
- **Números e ícones dos cards:** a numeração (01, 02, 03…) acompanha a ordem dos projetos. Basta preencher `technologies`, por exemplo `["Java", "React", "TypeScript"]`, para mostrar os ícones. Java, JavaScript, HTML, CSS, Next.js, React, TypeScript e Tailwind CSS têm ícones próprios; outros nomes recebem um ícone genérico de código. Novos ícones podem ser cadastrados em `src/components/ui/technology-icon.tsx`.
- **Carrossel e pesquisa:** novos projetos entram automaticamente no carrossel, com um card por vez, setas e avanço a cada 5 segundos. Para mudar o intervalo, ajuste `AUTOPLAY_DELAY` em `src/components/ui/project-carousel.tsx`. O avanço pausa com o mouse sobre o carrossel, foco dentro dele ou pelo botão Pausar; respeita a preferência por movimento reduzido. A busca filtra pelo título sem diferenciar maiúsculas e acentos, preservando a numeração original dos cards.

## Verificar e compilar

```sh
npm run lint
npm run typecheck
npm run build
```

A compilação gera um site estático na pasta `out/`. Não use `next start` para esta configuração. Para hospedar em outro caminho, defina `NEXT_PUBLIC_BASE_PATH` antes da compilação; o padrão local é vazio.

## Publicar no repositório existente

1. Envie **o conteúdo desta pasta** para a raiz de `gustanxr/portifolio`, incluindo `.github`, `package.json` e `package-lock.json`. Se a versão HTML antiga já estiver no repositório, substitua-a por esta estrutura. Não envie `node_modules`, `.next` ou `out`.
2. Em **Settings → Pages → Build and deployment → Source**, selecione **GitHub Actions**. Esta versão usa Actions, em vez de “Deploy from a branch”.
3. Faça um commit na branch `main` ou execute o workflow manualmente na aba **Actions**.
4. Após o workflow concluir, confira o endereço exibido pelo Pages. O endereço esperado é https://gustanxr.github.io/portifolio/.

O workflow configura `/portifolio` como caminho base para carregar corretamente CSS, JavaScript e favicon. Se o repositório mudar de nome, atualize `NEXT_PUBLIC_BASE_PATH` no workflow. Para um repositório `gustanxr.github.io` ou domínio próprio na raiz, use um valor vazio.

No GitHub Free, o repositório precisa ser público para usar Pages. GitHub Pro também permite publicar a partir de repositórios privados. Este projeto foi preparado localmente; não altera a visibilidade do repositório nem publica sozinho até você enviá-lo e habilitar Pages.

## Referências

### Verificação desta entrega

TypeScript e ESLint verificados localmente. O Next.js compilou a página com sucesso usando Turbopack, mas a exportação completa não pôde ser concluída neste ambiente devido à restrição de criação de processos (`spawn EPERM`). O workflow incluído executa as verificações e a compilação completa no GitHub Actions; ele ainda não foi executado no seu repositório.

- https://nextjs.org/docs/app/guides/static-exports
- https://tailwindcss.com/docs/installation/framework-guides/nextjs
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
