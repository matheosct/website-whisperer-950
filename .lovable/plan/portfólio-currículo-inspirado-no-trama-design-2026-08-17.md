# Portfólio-currículo inspirado no Trama Design

Recriar o layout do site de referência (coluna fixa à esquerda + conteúdo numerado à direita, tema escuro com alternância claro/escuro), com tipografia ~20% menor e textos reescritos em tom de currículo profissional em vez de oferta de serviços freelancer/agência.

## Estrutura da página (rota `/`)

Coluna esquerda fixa (desktop) / topo (mobile):
- Nome + título profissional no lugar de "Portfolio Design."
- Linha de resumo curta e factual (ex.: "Designer gráfico e de produto, com foco em UX/UI, infografia e comunicação visual.")
- Links: LinkedIn, Behance, E-mail
- Rodapé da coluna: "Rio de Janeiro · Currículo atualizado em 2026" (substitui "Disponível para projetos")

Coluna direita, seções numeradas:
1. `01/ Perfil` — resumo profissional objetivo (3ª pessoa neutra, sem "vamos criar algo juntos")
2. `02/ Habilidades` — Photoshop, Illustrator, InDesign, Figma (pills compactas)
3. `03/ Projetos` — carrossel horizontal com imagens, categoria e título, igual à referência
4. `04/ Formação` — Pós IBMR, Bacharel UFRJ, Tecnólogo Senac Rio (com monitorias)
5. `05/ Experiência` — Draw the Law, Fiotec, Monica Pondé, SEINFRA, isFactory, com períodos e descrições em bullets curtos

Conteúdo de experiência e formação: o mesmo do site de referência, reescrito para linguagem de currículo (verbos no infinitivo/particípio, sem tom promocional).

## Tipografia e escala

- Redução geral de ~20% em relação à referência: nome ~clamp(2.2rem–3rem), títulos de seção ~0.75rem em maiúsculas com tracking, cargos ~0.95rem, corpo ~0.8125rem, rótulos mono ~0.6875rem.
- Espaçamentos entre seções levemente reduzidos para acompanhar a tipografia menor.

## Detalhes técnicos

- `src/routes/index.tsx` substitui o placeholder e monta a página a partir de componentes em `src/components/resume/`: `SidebarProfile`, `SectionHeading`, `SkillsRow`, `ProjectsCarousel`, `TimelineList`.
- Dados de formação, experiência, habilidades e projetos em `src/lib/resume-data.ts` (arrays tipados), facilitando edição futura.
- Design system em `src/styles.css`: tokens escuros (fundo quase preto, texto off-white, cinza para texto secundário, borda sutil), par de fontes sans geométrica + mono para rótulos, carregadas via `<link>` no `__root.tsx`. Escala de tipografia como tokens (`--text-*`) para manter a redução consistente.
- Alternância claro/escuro com botão no canto superior direito, classe `.dark` no `<html>`, preferência persistida em `localStorage` e lida após hidratação.
- Carrossel com scroll horizontal por CSS (scroll-snap) + botões prev/next, sem dependências novas.
- `head()` da rota com título/descrição/OG próprios do currículo; imagens dos projetos como URLs remotas (Unsplash) com `alt` e `loading="lazy"`.
- H1 único (nome), seções em `<section>` com `<h2>`, layout responsivo em uma coluna no mobile.
