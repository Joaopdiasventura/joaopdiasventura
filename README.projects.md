# Projects Rebuild README

This file complements `README.md`. It does not replace the current root README and exists only as a handoff document for rebuilding the projects area in a new portfolio version.

## Purpose

Use this document as the source of truth for:

- project order
- bilingual copy
- route structure
- asset conventions
- links to production and repositories
- case-study content
- SEO metadata tied to each project

## Current App Context

- Framework: Angular 21.2 with SSR
- Language support: `en`, `pt`
- Package manager: `npm@11.6.2`
- Key scripts:
  - `npm start`
  - `npm run build`
  - `npm test`
  - `npm run lint`

## Project-Level Invariants To Preserve

1. The app is bilingual and route-driven by language.
2. The root redirects to `/en`.
3. Valid project routes live under `/:lang`.
4. The canonical project order is:
   - `auronix`
   - `modularis`
   - `votrix`
   - `vox`
   - `etecfy`
5. Home only highlights the first 2 items from that canonical order.
6. `/projects` lists all 5 projects in that same order.
7. `/project/:slug` uses that same order to compute the next-project CTA in a loop.
8. Contact form submissions are sent to `https://joaopdias-email.vercel.app/`.
9. CV paths are language-dependent:
   - `en`: `/cv/CV_JoaoPaulo_EN.pdf`
   - `pt`: `/cv/CV_JoaoPaulo_PT.pdf`

## Routes

- `/` -> redirect to `/en`
- `/404` -> not found page
- `/:lang` -> home page
- `/:lang/projects` -> projects index
- `/:lang/project/:slug` -> case-study page

## Source Files In The Current Codebase

Primary data sources:

- `src/app/core/data/case-study-previews.data.ts`
- `src/app/core/data/project-showcases.data.ts`
- `src/app/core/data/case-studies.data.ts`
- `src/app/core/data/portfolio.data.ts`

Structure and routing:

- `src/app/app.routes.ts`
- `src/app/features/home/home.routes.ts`
- `src/app/features/home/components/projects-section/projects-section.ts`
- `src/app/features/projects/pages/projects-page.ts`
- `src/app/features/work/pages/case-study-page.ts`

Utilities and conventions:

- `src/app/core/utils/case-study-order.ts`
- `src/app/core/utils/project-cover.ts`
- `src/app/core/services/language.service.ts`
- `src/app/features/home/services/contact-email-api.service.ts`

## How The Current Portfolio Surfaces Projects

### Home featured projects section

Current source: `FEATURED_PROJECTS_CONTENT` plus the first 2 items of `CASE_STUDY_PREVIEWS`.

Section copy:

- eyebrow
  - en: `Featured public projects`
  - pt: `Cases publicos em destaque`
- title
  - en: `Featured projects`
  - pt: `Projetos em destaque`
- summary
  - en: `The homepage surfaces the essential signal: what each project does, why it matters, and where to open the full breakdown.`
  - pt: `A home expoe o sinal essencial: o que cada projeto entrega, por que ele importa e onde abrir a analise completa.`
- primary CTA
  - en: `Open case study`
  - pt: `Abrir case study`
- secondary CTA
  - en: `Production`
  - pt: `Producao`
- browse CTA
  - en: `View all projects`
  - pt: `Ver todos os projetos`

Behavior:

- Only 2 featured cards are rendered.
- Each featured card uses project preview data.
- Each featured card shows:
  - category
  - name
  - summary
  - first 2 highlights
  - first 3 stack items
  - case-study CTA
  - production CTA when a live URL exists

### Projects index page

Current source: `PROJECT_SHOWCASES`.

Page copy:

- eyebrow
  - en: `Projects`
  - pt: `Projetos`
- title
  - en: `Technical products with fast signal`
  - pt: `Produtos tecnicos com leitura rapida de valor`
- summary
  - en: `A focused showcase of product scope, architectural choices, and execution proof without case-study noise in the first scan.`
  - pt: `Uma vitrine focada em escopo de produto, decisoes de arquitetura e prova de execucao, sem ruido de case study na primeira leitura.`
- seoTitle
  - en: `Projects | Joao Paulo Dias Ventura`
  - pt: `Projetos | Joao Paulo Dias Ventura`

Behavior:

- Lists all 5 projects in canonical order.
- Each showcase card shows:
  - icon
  - name
  - tagline
  - description
  - all technical highlights
  - all metrics
  - full stack list
  - repository links
  - live-project CTA when `productionUrl` exists
  - case-study CTA

### Case-study page

Current source: `CASE_STUDIES`.

Shared labels:

- back
  - en: `Back to projects`
  - pt: `Voltar para projetos`
- role
  - en: `Role`
  - pt: `Papel`
- stack
  - en: `Stack`
  - pt: `Stack`
- production
  - en: `Production`
  - pt: `Producao`
- repositories
  - en: `Repositories`
  - pt: `Repositorios`
- architecture
  - en: `Architecture highlight`
  - pt: `Destaque arquitetural`
- overview
  - en: `Overview`
  - pt: `Visao geral`
- challenge
  - en: `Challenge`
  - pt: `Desafio`
- constraints
  - en: `Constraints`
  - pt: `Restricoes`
- decisions
  - en: `Architecture decisions`
  - pt: `Decisoes de arquitetura`
- decisionsTitle
  - en: `Decisions that drive the system.`
  - pt: `Decisoes que conduzem o sistema.`
- results
  - en: `Results`
  - pt: `Resultados`
- nextProject
  - en: `Next project`
  - pt: `Proximo projeto`

Behavior:

- Reads one project by `slug`.
- Sets the page title and meta description from each case study.
- Scrolls to top on route change in the browser.
- Uses the next item in canonical order for the footer CTA.

## Asset Conventions

### Icons

Path pattern:

- `/assets/projects/icons/{slug}.svg`

Current icon sizes:

- `auronix`: `24x24`
- `modularis`: `24x24`
- `votrix`: `24x24`
- `vox`: `24x30`
- `etecfy`: `24x24`

### Covers

Responsive card/detail images use:

- widths: `640`, `960`, `1280`
- source pattern: `/assets/projects/covers/{slug}/{slug}-{width}.png`
- original pattern: `/assets/projects/covers/{slug}/{slug}.png`

Card `sizes` string:

- `(min-width: 1200px) calc((100vw - 28rem) / 2), (min-width: 960px) calc((100vw - 7rem) / 2), (min-width: 768px) calc(100vw - 6rem), calc(100vw - 2rem)`

Detail `sizes` string:

- `(min-width: 1520px) 1280px, (min-width: 1200px) calc(100vw - 3.5rem), (min-width: 768px) calc(100vw - 6rem), calc(100vw - 2rem)`

Original cover dimensions:

- `auronix`: `6487x3826`
- `modularis`: `8131x1703`
- `votrix`: `1640x848`
- `vox`: `1903x995`
- `etecfy`: `1919x995`

## Detailed Project Catalog

---

## 1. Auronix

### Identity

- slug: `auronix`
- theme: `auronix`
- name
  - en: `Auronix`
  - pt: `Auronix`
- live URL: `https://auronix-client.vercel.app`
- repositories:
  - `Auronix Client` -> `https://github.com/Joaopdiasventura/Auronix-client`
  - `Auronix Server` -> `https://github.com/Joaopdiasventura/Auronix-server`

### Assets

- icon: `/assets/projects/icons/auronix.svg`
- cover original: `/assets/projects/covers/auronix/auronix.png`
- cover responsive:
  - `/assets/projects/covers/auronix/auronix-640.png`
  - `/assets/projects/covers/auronix/auronix-960.png`
  - `/assets/projects/covers/auronix/auronix-1280.png`
- cover alt
  - en: `Cover for Auronix showing account state, transfer authorization, QR entry, and real-time settlement feedback.`
  - pt: `Capa do Auronix mostrando estado da conta, autorizacao de transferencia, entrada por QR e feedback de liquidacao em tempo real.`

### Home Preview Data

- category
  - en: `Stored-value transfers and payment requests`
  - pt: `Transferencias de saldo e cobrancas`
- summary
  - en: `Full-stack financial workspace with Angular and NestJS, PostgreSQL as the system of record, Redis-backed async delivery, and live updates for transfer outcomes.`
  - pt: `Workspace financeiro full-stack com Angular e NestJS, PostgreSQL como fonte de verdade, entrega assincrona apoiada por Redis e atualizacoes ao vivo para desfechos de transferencia.`
- highlights
  - en:
    - `Modular monolith keeps monetary correctness server-side.`
    - `Pending transfers settle under pessimistic balance checks.`
    - `One canonical entry flow accepts email, links, requests, and QR.`
  - pt:
    - `Monolito modular mantem a corretude monetaria no servidor.`
    - `Transferencias pendentes liquidam com rechecagem pessimista de saldo.`
    - `Um fluxo canonico aceita email, links, cobrancas e QR.`
- metrics
  - `208` -> en `Automated tests` | pt `Testes automatizados`
  - `10` -> en `Guarded screens` | pt `Telas protegidas`
  - `100 / 24h` -> en `SSE replay window` | pt `Janela de replay SSE`
- home stack:
  - `Angular`
  - `NestJS`
  - `PostgreSQL + Redis`

### Projects Index Data

- tagline
  - en: `Digital bank`
  - pt: `Banco digital`
- description
  - en: `Financial workspace for account access, balance, transfers, payment requests, and QR flows in one product, with asynchronous settlement and real-time feedback.`
  - pt: `Workspace financeiro para conta, saldo, transferencias, cobrancas e QR em uma experiencia unica, com liquidacao assincrona e feedback em tempo real.`
- technicalHighlights
  - en:
    - `Modular monolith organized by financial domain.`
    - `Asynchronous settlement with balance recheck and pessimistic locks.`
    - `Redis-backed SSE replay for balance and transfer status updates.`
  - pt:
    - `Monolito modular organizado por dominio financeiro.`
    - `Liquidacao assincrona com rechecagem de saldo e locks pessimistas.`
    - `Replay de SSE em Redis para saldo e status de transferencia.`
- metrics
  - `10` -> en `Protected screens` | pt `Telas protegidas`
  - `248` -> en `Automated tests` | pt `Testes automatizados`
  - `100 / 24h` -> en `Replay window` | pt `Janela de replay`
- showcase stack:
  - `Angular`
  - `NestJS`
  - `Node.js with TypeScript`
  - `PostgreSQL`
  - `Redis`

### Case Study Data

- role
  - en: `Full-stack architecture, transactional backend design, workflow UX`
  - pt: `Arquitetura full-stack, desenho de backend transacional e UX de fluxo`
- overview
  - en:
    - `Auronix combines a feature-sliced Angular workspace with a modular NestJS backend for account access, balance views, transfer authorization, payment requests, QR entry, and transfer detail screens.`
    - `Monetary correctness stays on the server: PostgreSQL is the system of record, transfers enter as pending, workers settle them asynchronously, and final balance mutation runs under pessimistic row locks while live updates keep the UI current.`
  - pt:
    - `Auronix combina um workspace Angular organizado por features com um backend NestJS modular para acesso de conta, visualizacao de saldo, autorizacao de transferencia, cobrancas, entrada por QR e telas de detalhe.`
    - `A corretude monetaria fica no servidor: PostgreSQL e a fonte de verdade, transferencias entram como pendentes, workers as liquidam de forma assincrona e a mutacao final de saldo roda sob row locks pessimistas enquanto atualizacoes ao vivo mantem a UI atualizada.`
- challenge
  - en: `Transfer entry had to feel immediate even though settlement, balance rechecks, and double-spend protection happen asynchronously under strict consistency rules.`
  - pt: `A entrada de transferencia precisava parecer imediata mesmo com liquidacao, rechecagem de saldo e protecao contra double spend acontecendo de forma assincrona sob regras estritas de consistencia.`
- constraints
  - en:
    - `All monetary values use integer cents.`
    - `Cookie-based auth with backend-owned session authority.`
    - `Pending transfers must resist double spend under concurrency.`
    - `Payment requests expire in ten minutes and notification replay stays bounded.`
  - pt:
    - `Todos os valores monetarios usam centavos inteiros.`
    - `Autenticacao por cookie com autoridade de sessao no backend.`
    - `Transferencias pendentes precisam resistir a double spend sob concorrencia.`
    - `Cobrancas expiram em dez minutos e o replay de notificacoes permanece limitado.`
- decisions
  - 1:
    - en title: `Keep monetary consistency inside one modular monolith`
    - pt title: `Manter a consistencia monetaria em um monolito modular`
    - en description: `User, transfer, payment-request, notification, cache, and persistence concerns stay separated by module, but deployment remains unified so balance mutation does not depend on distributed coordination.`
    - pt description: `Responsabilidades de usuario, transferencia, cobranca, notificacao, cache e persistencia ficam separadas por modulo, mas o deploy continua unificado para que a mutacao de saldo nao dependa de coordenacao distribuida.`
  - 2:
    - en title: `Accept transfers fast and settle them carefully`
    - pt title: `Aceitar transferencias rapido e liquidar com cuidado`
    - en description: `The API persists a pending transfer immediately, then workers re-check balance under pessimistic locks before mutating both accounts and emitting the terminal event.`
    - pt description: `A API persiste a transferencia pendente imediatamente; depois, os workers rechecam o saldo sob locks pessimistas antes de mutar as duas contas e emitir o evento terminal.`
  - 3:
    - en title: `Unify transfer entry around one canonical resolution path`
    - pt title: `Unificar a entrada de transferencia em um caminho canonico`
    - en description: `Manual keys, payment requests, first-party links, and QR payloads all resolve to the same authorization flow, and live updates remove the need for polling-first UX after submission.`
    - pt description: `Chaves manuais, cobrancas, links de primeira parte e payloads de QR convergem para o mesmo fluxo de autorizacao, e atualizacoes ao vivo removem a necessidade de uma UX guiada por polling apos o envio.`
- results
  - en: `Re-run successfully on April 8, 2026: 149 client tests, 59 server unit tests, and 40 checked-in end-to-end scenarios covering account flows, payment-request expiry, double-spend protection, and notification replay.`
  - pt: `Reexecutado com sucesso em 8 de abril de 2026: 149 testes do cliente, 59 testes unitarios do servidor e 40 cenarios end-to-end versionados cobrindo fluxos de conta, expiracao de cobranca, double spend e replay de notificacoes.`
- mediaCaption
  - en: `System view of account state, transfer authorization, and real-time settlement feedback.`
  - pt: `Visao de sistema do estado da conta, da autorizacao de transferencia e do feedback de liquidacao em tempo real.`
- mediaPanels
  - 1:
    - eyebrow: en `Workspace` | pt `Workspace`
    - title: en `Protected account surface with explicit states` | pt `Superficie protegida com estados explicitos`
    - body: en `Balance, ledger slices, transfer flows, and profile actions live in one session-aware workspace with clear loading, empty, and failure handling.` | pt `Saldo, recortes de extrato, fluxos de transferencia e acoes de perfil vivem em um unico workspace orientado a sessao com tratamento claro de carregamento, vazio e falha.`
  - 2:
    - eyebrow: en `Settlement` | pt `Liquidacao`
    - title: en `Pending first, balanced later` | pt `Pendente primeiro, saldo depois`
    - body: en `Transfers enter quickly, settle in workers, and only finalize after balance is rechecked under pessimistic locks.` | pt `Transferencias entram rapido, liquidam em workers e so finalizam depois de rechecagem de saldo sob locks pessimistas.`
  - 3:
    - eyebrow: en `Entry model` | pt `Modelo de entrada`
    - title: en `One authorization flow for every input path` | pt `Um fluxo de autorizacao para qualquer entrada`
    - body: en `Email, request identifiers, links, and QR payloads all converge to one canonical transfer authorization state.` | pt `Email, identificadores de cobranca, links e payloads de QR convergem para um unico estado canonico de autorizacao de transferencia.`
- SEO
  - title
    - en: `Auronix Project | Joao Paulo Dias Ventura`
    - pt: `Projeto Auronix | Joao Paulo Dias Ventura`
  - description
    - en: `Project page about a financial workspace with transfer processing, payment requests, QR entry, and real-time notifications in Auronix.`
    - pt: `Pagina do projeto sobre um workspace financeiro com processamento de transferencias, cobrancas, entrada por QR e notificacoes em tempo real no Auronix.`

---

## 2. Modularis

### Identity

- slug: `modularis`
- theme: `modularis`
- name
  - en: `Modularis`
  - pt: `Modularis`
- live URL: none
- repositories:
  - `Modularis Workspace` -> `https://github.com/Joaopdiasventura/Modularis`

### Assets

- icon: `/assets/projects/icons/modularis.svg`
- cover original: `/assets/projects/covers/modularis/modularis.png`
- cover responsive:
  - `/assets/projects/covers/modularis/modularis-640.png`
  - `/assets/projects/covers/modularis/modularis-960.png`
  - `/assets/projects/covers/modularis/modularis-1280.png`
- cover alt
  - en: `Cover for Modularis showing service boundaries, queues, and payment state propagation.`
  - pt: `Capa do Modularis mostrando fronteiras de servico, filas e propagacao de estado de pagamento.`

### Home Preview Data

- category
  - en: `Event-driven onboarding and payments`
  - pt: `Onboarding e pagamentos orientados a eventos`
- summary
  - en: `Event-driven onboarding backend with four NestJS services, RabbitMQ contracts, PostgreSQL plus MongoDB persistence, and verified webhooks for premium activation.`
  - pt: `Backend de onboarding orientado a eventos com quatro servicos NestJS, contratos sobre RabbitMQ, persistencia em PostgreSQL e MongoDB, e webhooks validados para ativacao premium.`
- highlights
  - en:
    - `Four services coordinated through typed contracts.`
    - `Idempotent consumers with retry and dead-letter handling.`
    - `Split persistence for identity and mutable payment state.`
  - pt:
    - `Quatro servicos coordenados por contratos tipados.`
    - `Consumidores idempotentes com retry e dead letter.`
    - `Persistencia separada para identidade e estado de pagamento.`
- metrics
  - `4` -> en `Deployable services` | pt `Servicos implantaveis`
  - `8` -> en `Typed message patterns` | pt `Padroes tipados`
  - `57` -> en `Passing tests` | pt `Testes aprovados`
- home stack:
  - `NestJS`
  - `RabbitMQ`
  - `PostgreSQL + MongoDB`

### Projects Index Data

- tagline
  - en: `Distributed backend for payments`
  - pt: `Backend distribuido para pagamentos`
- description
  - en: `Event-driven backend for onboarding, payment issuance, webhook confirmation, and asynchronous premium activation across isolated services.`
  - pt: `Backend orientado a eventos para onboarding, emissao de pagamento, confirmacao por webhook e ativacao premium assincrona em servicos isolados.`
- technicalHighlights
  - en:
    - `Four services with clear runtime boundaries.`
    - `Typed RabbitMQ contracts with split persistence ownership.`
    - `Webhook flow with HMAC validation, idempotency, and retry/backoff.`
  - pt:
    - `Quatro servicos com fronteiras de runtime claras.`
    - `Contratos tipados em RabbitMQ com persistencia separada por responsabilidade.`
    - `Fluxo de webhook com validacao HMAC, idempotencia e retry/backoff.`
- metrics
  - `4` -> en `Deployable services` | pt `Servicos deployaveis`
  - `8` -> en `Message contracts` | pt `Contratos de mensagem`
  - `7` -> en `Critical e2e scenarios` | pt `Cenarios criticos em e2e`
- showcase stack:
  - `NestJS`
  - `Node.js with TypeScript`
  - `RabbitMQ`
  - `PostgreSQL`
  - `MongoDB`

### Case Study Data

- role
  - en: `Backend architecture, async workflow design, service contracts`
  - pt: `Arquitetura de backend, desenho de fluxo assincrono e contratos de servico`
- overview
  - en:
    - `Modularis splits onboarding into four services: browser ingress, identity, payment orchestration, and webhook verification, all coordinated through typed contracts.`
    - `User identity stays relational, payment state stays document-oriented, and the runtime ships verified webhooks, rate limiting, session cookies, live updates, and a deterministic local mock gateway.`
  - pt:
    - `Modularis divide o onboarding em quatro servicos: entrada do navegador, identidade, orquestracao de pagamento e verificacao de webhook, todos coordenados por contratos tipados.`
    - `A identidade do usuario fica em modelo relacional, o estado do pagamento em modelo documental, e o runtime entrega webhooks validados, rate limiting, cookies de sessao, atualizacoes ao vivo e gateway mock deterministico.`
- challenge
  - en: `The browser-facing API had to return quickly while retries, duplicate callbacks, premium activation, and ownership boundaries remained explicit across asynchronous services.`
  - pt: `A API voltada ao navegador precisava responder rapido enquanto retries, callbacks duplicados, ativacao premium e fronteiras de responsabilidade permaneciam explicitos entre servicos assincronos.`
- constraints
  - en:
    - `Service-owned data only, with no cross-service global transaction.`
    - `At-least-once delivery with idempotent consumers, retries, and dead-letter handling.`
    - `Webhook signature verification over raw body plus cookie-authenticated browser flows.`
  - pt:
    - `Dados pertencem aos servicos, sem transacao global entre eles.`
    - `Entrega at-least-once com consumidores idempotentes, retries e dead letter.`
    - `Verificacao de assinatura em raw body e fluxos de navegador autenticados por cookie.`
- decisions
  - 1:
    - en title: `Split onboarding into explicit service boundaries`
    - pt title: `Dividir o onboarding em fronteiras explicitas de servico`
    - en description: `Browser ingress, identity, payments, and webhook validation own distinct responsibilities, making trust boundaries and failure modes visible in the architecture.`
    - pt description: `Entrada do navegador, identidade, pagamentos e validacao de webhook assumem responsabilidades distintas, deixando fronteiras de confianca e falhas visiveis na arquitetura.`
  - 2:
    - en title: `Use persistence that matches each state model`
    - pt title: `Usar persistencia aderente a cada modelo de estado`
    - en description: `Identity keeps strong relational guarantees while payments use mutable document state for callback metadata, retries, and processed-event tracking.`
    - pt description: `Identidade preserva garantias relacionais fortes enquanto pagamentos usam estado documental mutavel para metadados de callback, retries e rastreio de eventos processados.`
  - 3:
    - en title: `Make async progress observable end to end`
    - pt title: `Tornar o progresso assincrono observavel ponta a ponta`
    - en description: `Live updates, centralized runtime config, and a deterministic mock gateway make retries, expiry, duplicate webhooks, and premium convergence reproducible in local runs.`
    - pt description: `Atualizacoes ao vivo, configuracao centralizada e gateway mock deterministico tornam retries, expiracao, webhooks duplicados e convergencia premium reproduziveis localmente.`
- results
  - en: `Locally verified on April 8, 2026: build, unit, and end-to-end suites passed with 57 tests across 14 suites while four services coordinated through eight typed message patterns.`
  - pt: `Verificado localmente em 8 de abril de 2026: build, testes unitarios e end-to-end passaram com 57 testes em 14 suites enquanto quatro servicos se coordenavam por oito padroes tipados.`
- mediaCaption
  - en: `System view of service boundaries, queue choreography, and premium-state propagation.`
  - pt: `Visao de sistema das fronteiras de servico, da coreografia de filas e da propagacao de estado premium.`
- mediaPanels
  - 1:
    - eyebrow: en `Services` | pt `Servicos`
    - title: en `Four deployable responsibilities` | pt `Quatro responsabilidades implantaveis`
    - body: en `Ingress, identity, payments, and webhooks coordinate through shared contracts rather than shared persistence.` | pt `Entrada, identidade, pagamentos e webhooks se coordenam por contratos compartilhados em vez de persistencia compartilhada.`
  - 2:
    - eyebrow: en `Messaging` | pt `Mensageria`
    - title: en `Idempotent async processing` | pt `Processamento assincrono idempotente`
    - body: en `Payment progress is modeled through explicit message patterns, retries, and terminal states instead of hidden background behavior.` | pt `O progresso de pagamento e modelado por padroes explicitos de mensagem, retries e estados terminais, sem comportamento oculto em segundo plano.`
  - 3:
    - eyebrow: en `Client loop` | pt `Ciclo do cliente`
    - title: en `Live updates close the workflow` | pt `Atualizacoes ao vivo fecham o fluxo`
    - body: en `The browser receives scoped updates when payment state and premium access converge.` | pt `O navegador recebe atualizacoes por usuario quando estado de pagamento e acesso premium convergem.`
- SEO
  - title
    - en: `Modularis Event-Driven Backend Project | Joao Paulo Dias Ventura`
    - pt: `Projeto Modularis Backend Orientado a Eventos | Joao Paulo Dias Ventura`
- description
  - en: `Project page about Modularis, an event-driven backend with typed service coordination, split persistence, verified webhooks, and live user-state updates.`
  - pt: `Pagina do projeto sobre o Modularis, um backend orientado a eventos com coordenacao tipada entre servicos, persistencia segmentada, webhooks validados e atualizacoes ao vivo do estado do usuario.`

---

## 3. Votrix

### Identity

- slug: `votrix`
- theme: `votrix`
- name
  - en: `Votrix`
  - pt: `Votrix`
- live URL: none
- repositories:
  - `Votrix Repository` -> `https://github.com/Joaopdiasventura/Votrix`

### Assets

- icon: `/assets/projects/icons/votrix.svg`
- cover original: `/assets/projects/covers/votrix/votrix.png`
- cover responsive:
  - `/assets/projects/covers/votrix/votrix-640.png`
  - `/assets/projects/covers/votrix/votrix-960.png`
  - `/assets/projects/covers/votrix/votrix-1280.png`
- cover alt
  - en: `Cover for Votrix showing route maps, dispatch stages, and benchmark throughput.`
  - pt: `Capa do Votrix mostrando mapas de rota, etapas de despacho e throughput em benchmark.`

### Home Preview Data

- category
  - en: `High-performance Node.js HTTP framework`
  - pt: `Framework HTTP de alta performance para Node.js`
- summary
  - en: `Minimal TypeScript HTTP runtime on node:http focused on route resolution, deferred parsing, and reproducible benchmark throughput across real request scenarios.`
  - pt: `Runtime HTTP minimalista em TypeScript sobre node:http focado em resolucao de rotas, parsing adiado e throughput reproduzivel em benchmark com cenarios reais.`
- highlights
  - en:
    - `Static Map lookup plus compact dynamic tree traversal.`
    - `Deferred query and conditional body parsing.`
    - `Benchmark harness proves 4/4 local wins.`
  - pt:
    - `Lookup estatico em Map e arvore compacta para rotas dinamicas.`
    - `Parse de query adiado e body parsing condicional.`
    - `Harness de benchmark comprova 4/4 vitorias locais.`
- metrics
  - `30.1K` -> en `Local RPS` | pt `RPS local`
  - `37.3%` -> en `Lead vs Fastify` | pt `Vantagem vs Fastify`
  - `42.08%` -> en `Lead vs Express` | pt `Vantagem vs Express`
- home stack:
  - `TypeScript`
  - `node:http`
  - `autocannon`

### Projects Index Data

- tagline
  - en: `High-performance HTTP runtime`
  - pt: `Runtime HTTP de alta performance`
- description
  - en: `Minimal HTTP framework for Node.js focused on cutting hot-path overhead and proving gains with reproducible benchmarks.`
  - pt: `Framework HTTP minimo para Node.js focado em reduzir overhead no hot path e provar ganho com benchmark reproduzivel.`
- technicalHighlights
  - en:
    - `Static routes in Map structures and dynamic routes in a compact tree.`
    - `Query and body parsing run only when the request path needs them.`
    - `Benchmarks are versioned against Fastify and Express in the repository.`
  - pt:
    - `Rotas estaticas em estruturas Map e rotas dinamicas em arvore compacta.`
    - `Query e body parsing rodam so quando o caminho da requisicao precisa disso.`
    - `Benchmarks versionados contra Fastify e Express dentro do repositorio.`
- metrics
  - `30.1K` -> en `RPS on /health` | pt `RPS em /health`
  - `4 / 4` -> en `Leading scenarios` | pt `Cenarios com lideranca`
  - `+37.25%` -> en `vs Fastify on create-user` | pt `vs Fastify em create-user`
- showcase stack:
  - `Node.js with TypeScript`
  - `node:http`
  - `autocannon`

### Case Study Data

- role
  - en: `Runtime architecture, performance engineering, benchmark methodology`
  - pt: `Arquitetura de runtime, engenharia de performance e metodologia de benchmark`
- overview
  - en:
    - `Votrix is a TypeScript runtime on top of node:http built to reduce work before the handler runs: direct route matching, deferred parsing, and a small response path.`
    - `The public surface stays narrow with App, Router, AsyncLogger, body parsing, and logging helpers, and the repository includes a benchmark harness that measures the same scenarios against broader frameworks.`
  - pt:
    - `Votrix e um runtime TypeScript sobre node:http construido para reduzir trabalho antes do handler: match direto de rota, parsing adiado e caminho de resposta pequeno.`
    - `A superficie publica permanece enxuta com App, Router, AsyncLogger, body parsing e helpers de log, e o repositorio inclui um harness de benchmark que mede os mesmos cenarios contra frameworks mais amplos.`
- challenge
  - en: `The goal was measurable speed, not a generic framework clone. Routing, middleware, parsing, and error flow had to remain useful without paying unnecessary baseline runtime cost.`
  - pt: `O objetivo era velocidade mensuravel, nao um clone generico de framework. Roteamento, middleware, parsing e fluxo de erro precisavam continuar uteis sem pagar custo basal desnecessario.`
- constraints
  - en:
    - `Built directly on platform HTTP primitives.`
    - `No plugin runtime, schema validation layer, or specialized serialization subsystem.`
    - `Performance claims are limited to the checked-in local benchmark harness.`
  - pt:
    - `Construido diretamente sobre os primitivos HTTP da plataforma.`
    - `Sem runtime de plugin, camada de validacao por schema ou serializacao especializada.`
    - `As alegacoes de performance ficam limitadas ao harness local versionado.`
- decisions
  - 1:
    - en title: `Keep the hot path structurally short`
    - pt title: `Manter o hot path estruturalmente curto`
    - en description: `Server setup and optional middleware stay outside the common request path, while Router focuses on match, dispatch, and error flow with as little overhead as possible.`
    - pt description: `Setup do servidor e middleware opcional ficam fora do caminho comum da requisicao, enquanto o Router se concentra em match, despacho e erro com o menor overhead possivel.`
  - 2:
    - en title: `Do routing work before parsing work`
    - pt title: `Fazer o trabalho de roteamento antes do parsing`
    - en description: `Exact routes resolve through per-method Map lookups, dynamic paths traverse a compact tree, and query or params are only materialized after a real match.`
    - pt description: `Rotas exatas resolvem por lookup em Map por metodo, caminhos dinamicos percorrem uma arvore compacta, e query ou params so sao materializados depois de um match real.`
  - 3:
    - en title: `Ship the proof with the runtime`
    - pt title: `Entregar a prova junto do runtime`
    - en description: `The repository validates the scenarios and benchmarks Votrix against the comparison runtimes under the same local contracts, so the performance claim remains inspectable.`
    - pt description: `O repositorio valida os cenarios e benchmarka Votrix contra runtimes de comparacao sob os mesmos contratos locais, para que a alegacao de performance continue inspecionavel.`
- results
  - en: `The benchmark artifact dated 2026-04-03T03:18:21.722Z shows Votrix ahead in all four measured scenarios, peaking at 30,124.80 RPS on GET /health and keeping a 37.25% to 42.08% lead on create-user versus the comparison runtimes.`
  - pt: `O artefato de benchmark datado em 2026-04-03T03:18:21.722Z mostra o Votrix a frente nos quatro cenarios medidos, chegando a 30.124,80 RPS em GET /health e mantendo vantagem de 37,25% a 42,08% em create-user contra os runtimes comparados.`
- mediaCaption
  - en: `System view of the hot path, routing stages, and benchmark evidence.`
  - pt: `Visao de sistema do hot path, das etapas de roteamento e da evidencia de benchmark.`
- mediaPanels
  - 1:
    - eyebrow: en `Routing` | pt `Roteamento`
    - title: en `Exact and dynamic routes stay cheap` | pt `Rotas exatas e dinamicas permanecem baratas`
    - body: en `Map lookup handles exact paths while a compact tree handles params without pulling in expensive generalized machinery.` | pt `Lookup em Map atende caminhos exatos enquanto uma arvore compacta trata params sem puxar maquinario generalista caro.`
  - 2:
    - eyebrow: en `Parsing` | pt `Parsing`
    - title: en `Requests pay only for features they use` | pt `A requisicao so paga pelo que usa`
    - body: en `Query parsing, body parsing, and promise checks happen only when the matched route actually needs them.` | pt `Parse de query, parsing de body e verificacoes de promise acontecem apenas quando a rota casada realmente precisa disso.`
  - 3:
    - eyebrow: en `Proof` | pt `Prova`
    - title: en `Benchmark claims stay inspectable` | pt `As alegacoes de benchmark permanecem inspecionaveis`
    - body: en `The same harness validates the scenarios first and then measures all runtimes under equivalent local contracts.` | pt `O mesmo harness valida os cenarios primeiro e depois mede todos os runtimes sob contratos locais equivalentes.`
- SEO
  - title
    - en: `Votrix High-Performance Runtime Project | Joao Paulo Dias Ventura`
    - pt: `Projeto Votrix Runtime de Alta Performance | Joao Paulo Dias Ventura`
  - description
    - en: `Project page about Votrix, a high-performance runtime focused on hot-path reduction and locally benchmarked throughput advantages.`
    - pt: `Pagina do projeto sobre o Votrix, um runtime de alta performance focado em reducao de hot path e vantagens locais de throughput medidas em benchmark.`

---

## 4. VOX

### Identity

- slug: `vox`
- theme: `vox`
- name
  - en: `VOX`
  - pt: `VOX`
- home preview display name
  - en: `VOX Electoral System`
  - pt: `VOX Sistema Eleitoral`
- live URL: `https://v-o-x.vercel.app`
- repositories:
  - `VOX App` -> `https://github.com/Joaopdiasventura/Vox`
  - `VOX Landing Page` -> `https://github.com/Joaopdiasventura/vox-landing-page`

### Assets

- icon: `/assets/projects/icons/vox.svg`
- cover original: `/assets/projects/covers/vox/vox.png`
- cover responsive:
  - `/assets/projects/covers/vox/vox-640.png`
  - `/assets/projects/covers/vox/vox-960.png`
  - `/assets/projects/covers/vox/vox-1280.png`
- cover alt
  - en: `Cover for VOX showing vote flow, audit checkpoints, and operator visibility.`
  - pt: `Capa do VOX mostrando fluxo de voto, checkpoints de auditoria e visibilidade operacional.`

### Home Preview Data

- category
  - en: `Auditability and voting integrity`
  - pt: `Auditabilidade e integridade eleitoral`
- summary
  - en: `Voting platform built with Angular, NestJS, and PostgreSQL to keep ballot state, audit trails, and operator feedback consistent under concurrent sessions.`
  - pt: `Plataforma de votacao em Angular, NestJS e PostgreSQL para manter estado do voto, trilhas de auditoria e feedback operacional consistentes sob concorrencia.`
- highlights
  - en:
    - `Explicit election, ballot, and validation states.`
    - `Transactional audit trail for critical vote actions.`
    - `Frontend flow exposes progress and terminal states.`
  - pt:
    - `Estados explicitos para eleicao, cedula e validacao.`
    - `Trilha transacional de auditoria para acoes criticas.`
    - `Fluxo de frontend expoe progresso e estados finais.`
- metrics
  - `500+` -> en `Concurrent users` | pt `Usuarios simultaneos`
  - `100%` -> en `Vote trail coverage` | pt `Cobertura de trilha de voto`
  - `0` -> en `Ambiguous flow states` | pt `Estados ambiguos no fluxo`
- home stack:
  - `Angular`
  - `NestJS`
  - `PostgreSQL`

### Projects Index Data

- tagline
  - en: `Auditable voting platform`
  - pt: `Plataforma de votacao auditavel`
- description
  - en: `Electoral system for elections, candidates, ballots, voting, credit purchases, and result aggregation with explicit, traceable states.`
  - pt: `Sistema eleitoral com gestao de eleicoes, candidatos, cedulas, votacao, compra de creditos e apuracao com estados explicitos e rastreaveis.`
- technicalHighlights
  - en:
    - `Explicit domain modeling for elections, ballots, votes, and payments.`
    - `Combines HTTP, SSE, WebSocket, and async queue processing.`
    - `Auditability and operator feedback are built into the product flow.`
  - pt:
    - `Modelagem explicita de dominio para eleicao, cedula, voto e pagamento.`
    - `Combina HTTP, SSE, WebSocket e processamento assincrono em fila.`
    - `Auditabilidade e feedback operacional fazem parte do fluxo do produto.`
- metrics
  - `29` -> en `HTTP routes` | pt `Rotas HTTP`
  - `2 + 3` -> en `SSE streams and WS events` | pt `Streams SSE e eventos WS`
  - `108` -> en `Tests` | pt `Testes`
- showcase stack:
  - `Angular`
  - `NestJS`
  - `Node.js with TypeScript`
  - `PostgreSQL`
  - `Redis`
  - `Socket.IO`

### Case Study Data

- role
  - en: `Product architecture, backend design, audit-oriented modeling`
  - pt: `Arquitetura de produto, desenho de backend e modelagem orientada a auditoria`
- overview
  - en:
    - `VOX models elections, ballots, sessions, and validation checkpoints as explicit domain state so vote progress remains auditable end to end.`
    - `Angular keeps operator and voter feedback readable while NestJS plus PostgreSQL preserve transactional integrity during concurrent voting windows.`
  - pt:
    - `VOX modela eleicoes, cedulas, sessoes e checkpoints de validacao como estado explicito de dominio para manter a votacao auditavel de ponta a ponta.`
    - `Angular mantem o feedback para operador e eleitor legivel enquanto NestJS e PostgreSQL preservam integridade transacional em janelas concorrentes.`
- challenge
  - en: `Correctness could not stay implicit. Every irreversible vote step had to be visible, recoverable, and explainable to both operators and voters.`
  - pt: `A corretude nao podia ficar implicita. Cada passo irreversivel do voto precisava ser visivel, recuperavel e explicavel para operadores e eleitores.`
- constraints
  - en:
    - `Institutional trust requirements.`
    - `Concurrent access during critical voting windows.`
    - `Transparent audit history without cluttering the interface.`
  - pt:
    - `Requisitos institucionais de confianca.`
    - `Acesso concorrente em janelas criticas de votacao.`
    - `Historico de auditoria transparente sem poluir a interface.`
- decisions
  - 1:
    - en title: `Model irreversible vote steps explicitly`
    - pt title: `Modelar passos irreversiveis de forma explicita`
    - en description: `Election progress, ballot validation, and terminal states live in explicit transitions so the system never hides what has already become final.`
    - pt description: `Progresso da eleicao, validacao de cedula e estados terminais vivem em transicoes explicitas para que o sistema nunca esconda o que ja ficou final.`
  - 2:
    - en title: `Treat audit history as first-class product behavior`
    - pt title: `Tratar historico de auditoria como comportamento de produto`
    - en description: `Trace data shapes entities, validations, and operator views from the start instead of becoming an afterthought around logs.`
    - pt description: `Dados de rastreio moldam entidades, validacoes e visoes operacionais desde o inicio, em vez de aparecerem depois em logs soltos.`
  - 3:
    - en title: `Keep high-attention flows readable`
    - pt title: `Manter fluxos criticos legiveis`
    - en description: `The interface exposes pending, confirmed, and blocked states clearly so users do not need to infer whether a vote was accepted.`
    - pt description: `A interface expoe estados pendentes, confirmados e bloqueados com clareza para que o usuario nao precise inferir se o voto foi aceito.`
- results
  - en: `The project demonstrates traceability as a system property: vote state, audit lineage, and UI feedback reinforce one another instead of competing for clarity.`
  - pt: `O projeto demonstra rastreabilidade como propriedade do sistema: estado do voto, linhagem de auditoria e feedback de interface se reforcam em vez de competir por clareza.`
- mediaCaption
  - en: `System view of vote state, audit checkpoints, and operator visibility.`
  - pt: `Visao de sistema do estado do voto, dos checkpoints de auditoria e da visibilidade operacional.`
- mediaPanels
  - 1:
    - eyebrow: en `State model` | pt `Modelo de estado`
    - title: en `Election flow with explicit terminal states` | pt `Fluxo eleitoral com estados terminais explicitos`
    - body: en `The domain names final states directly instead of hiding them inside service-side branching.` | pt `O dominio nomeia estados finais diretamente em vez de esconde-los em desvios internos de servico.`
  - 2:
    - eyebrow: en `Audit view` | pt `Visao de auditoria`
    - title: en `Trace history attached to critical actions` | pt `Historico de rastreio ligado a acoes criticas`
    - body: en `Relevant transitions leave inspectable footprints for operators and administrators.` | pt `Transicoes relevantes deixam rastros inspecionaveis para operadores e administradores.`
  - 3:
    - eyebrow: en `UX view` | pt `Visao de UX`
    - title: en `No ambiguous progress for the voter` | pt `Sem progresso ambiguo para o eleitor`
    - body: en `The frontend keeps the user aware of where they are in the vote and whether the action is final.` | pt `O frontend mantem o usuario consciente de onde esta no voto e se a acao ja e final.`
- SEO
  - title
    - en: `VOX Electoral System Project | Joao Paulo Dias Ventura`
    - pt: `Projeto VOX Sistema Eleitoral | Joao Paulo Dias Ventura`
- description
  - en: `Project page about architecture, traceability, and voting integrity in the VOX electoral system.`
  - pt: `Pagina do projeto sobre arquitetura, rastreabilidade e integridade eleitoral no sistema VOX.`

---

## 5. Etecfy

### Identity

- slug: `etecfy`
- theme: `etecfy`
- name
  - en: `Etecfy`
  - pt: `Etecfy`
- live URL: `https://etecfy.vercel.app`
- repositories:
  - `Etecfy Client` -> `https://github.com/Joaopdiasventura/etecfy-client`
  - `Etecfy Server` -> `https://github.com/Joaopdiasventura/etecfy-server`

### Assets

- icon: `/assets/projects/icons/etecfy.svg`
- cover original: `/assets/projects/covers/etecfy/etecfy.png`
- cover responsive:
  - `/assets/projects/covers/etecfy/etecfy-640.png`
  - `/assets/projects/covers/etecfy/etecfy-960.png`
  - `/assets/projects/covers/etecfy/etecfy-1280.png`
- cover alt
  - en: `Cover for Etecfy showing catalog depth, playback controls, and launch-focused hierarchy.`
  - pt: `Capa do Etecfy mostrando profundidade de catalogo, controles de playback e hierarquia para lancamento.`

### Home Preview Data

- category
  - en: `Music streaming`
  - pt: `Streaming de musica`
- summary
  - en: `Streaming product structured around scalable catalog modeling, fast discovery, and media-ready client surfaces that stay responsive during launch spikes.`
  - pt: `Produto de streaming estruturado para modelagem escalavel de catalogo, descoberta rapida e superficies de cliente preparadas para picos de lancamento.`
- highlights
  - en:
    - `Catalog model scales beyond fixed shelves.`
    - `Discovery paths stay short before playback.`
    - `Media surfaces keep hierarchy readable under load.`
  - pt:
    - `Modelo de catalogo escala alem de prateleiras fixas.`
    - `Fluxos de descoberta ficam curtos antes do playback.`
    - `Superficies de midia mantem hierarquia legivel sob carga.`
- metrics
  - `1.3K` -> en `Launch accesses in 6h` | pt `Acessos em 6h`
  - `Fast` -> en `Catalog discovery` | pt `Descoberta de catalogo`
  - `Ready` -> en `Growth-oriented model` | pt `Modelo pronto para crescer`
- home stack:
  - `Angular`
  - `Web Audio API`
  - `MongoDB`

### Projects Index Data

- tagline
  - en: `Music streaming`
  - pt: `Streaming musical`
- description
  - en: `Streaming application with searchable catalog, track details, and continuous chunk-based playback across web, SSR, and mobile delivery.`
  - pt: `Aplicacao de streaming com catalogo pesquisavel, detalhe da faixa e reproducao continua por chunks, atendendo web, SSR e entrega mobile.`
- technicalHighlights
  - en:
    - `SPA with cookie auth, persisted theme, and player built on MediaSource and Media Session.`
    - `Backend is split into users, songs, and song-chunk resources.`
    - `Upload flow fragments audio into chunks and exposes a searchable catalog.`
  - pt:
    - `SPA com auth por cookie, tema persistido e player em MediaSource e Media Session.`
    - `Backend separado em recursos de usuarios, musicas e chunks.`
    - `Fluxo de upload fragmenta audio em chunks e expoe um catalogo pesquisavel.`
- metrics
  - `8` -> en `Public endpoints` | pt `Endpoints publicos`
  - `10s` -> en `Audio chunk size` | pt `Tamanho do chunk`
  - `3` -> en `Delivery surfaces` | pt `Superficies de entrega`
- showcase stack:
  - `Angular`
  - `NestJS`
  - `Node.js with TypeScript`
  - `PostgreSQL`
  - `MediaSource API`
  - `Capacitor`

### Case Study Data

- role
  - en: `Architecture, product structure, media-oriented frontend`
  - pt: `Arquitetura, estrutura de produto e frontend orientado a midia`
- overview
  - en:
    - `Etecfy was organized around catalog scale first: discovery, metadata, and playback surfaces had to keep working as content breadth increased.`
    - `The client prioritizes quick navigation and readable media hierarchy while the backend model stays open to future catalog and integration growth.`
  - pt:
    - `Etecfy foi organizado com escala de catalogo como premissa: descoberta, metadados e superficies de playback precisavam continuar funcionais com mais conteudo.`
    - `O cliente prioriza navegacao rapida e hierarquia legivel de midia enquanto o modelo de backend fica aberto para crescimento futuro de catalogo e integracoes.`
- challenge
  - en: `Music products lose quickly when discovery is noisy. The main problem was reducing navigation friction without flattening the catalog model.`
  - pt: `Produtos de musica perdem rapido quando a descoberta fica ruidosa. O problema principal era reduzir atrito de navegacao sem achatar o modelo de catalogo.`
- constraints
  - en:
    - `Short launch window with immediate audience spikes.`
    - `Need for a catalog model that can grow without redesigning the information architecture.`
    - `Media behavior across web and native-oriented surfaces.`
  - pt:
    - `Janela curta de lancamento com pico inicial de audiencia.`
    - `Necessidade de um modelo de catalogo que cresca sem redesenhar a arquitetura de informacao.`
    - `Comportamento de midia em superficies web e orientadas a mobile.`
- decisions
  - 1:
    - en title: `Make discovery carry structural weight`
    - pt title: `Fazer a descoberta carregar peso estrutural`
    - en description: `Navigation, grouping, and metadata were designed so users reach music quickly while the catalog can expand without turning into a flat list.`
    - pt description: `Navegacao, agrupamento e metadados foram desenhados para levar o usuario rapido a musica enquanto o catalogo pode crescer sem virar uma lista plana.`
  - 2:
    - en title: `Model the catalog for growth`
    - pt title: `Modelar o catalogo para crescer`
    - en description: `The entities and content structure were planned to support more releases, contexts, and browsing paths without rewriting the core views.`
    - pt description: `Entidades e estrutura de conteudo foram planejadas para suportar mais lancamentos, contextos e caminhos de navegacao sem reescrever as views centrais.`
  - 3:
    - en title: `Keep playback surfaces responsive`
    - pt title: `Manter superficies de playback responsivas`
    - en description: `Playback controls and transitions stay immediate so discovery and listening feel like one continuous flow instead of two disconnected states.`
    - pt description: `Controles e transicoes de playback permanecem imediatos para que descoberta e escuta parecam um fluxo continuo, e nao dois estados desconectados.`
- results
  - en: `The launch reached 1.3K accesses within six hours, validating the product direction around discovery speed, catalog readiness, and perceived responsiveness.`
  - pt: `O lancamento alcancou 1,3 mil acessos em seis horas, validando a direcao do produto em velocidade de descoberta, preparo de catalogo e responsividade percebida.`
- mediaCaption
  - en: `System view of catalog hierarchy, playback pacing, and launch-facing media surfaces.`
  - pt: `Visao de sistema da hierarquia de catalogo, do ritmo de playback e das superficies de midia voltadas ao lancamento.`
- mediaPanels
  - 1:
    - eyebrow: en `Catalog` | pt `Catalogo`
    - title: en `Discovery starts with the data model` | pt `A descoberta comeca no modelo de dados`
    - body: en `Grouping and metadata were planned so content can widen without forcing new navigation patterns.` | pt `Agrupamentos e metadados foram planejados para ampliar o conteudo sem forcar novos padroes de navegacao.`
  - 2:
    - eyebrow: en `Playback` | pt `Playback`
    - title: en `Fast transitions keep the flow alive` | pt `Transicoes rapidas mantem o fluxo vivo`
    - body: en `The listening experience preserves context instead of interrupting discovery with heavy view changes.` | pt `A experiencia de escuta preserva contexto em vez de interromper a descoberta com trocas pesadas de view.`
  - 3:
    - eyebrow: en `Launch` | pt `Lancamento`
    - title: en `Built for immediate traffic` | pt `Construido para trafego imediato`
    - body: en `The project was shaped to absorb launch attention without losing responsiveness or hierarchy.` | pt `O projeto foi moldado para absorver a atencao inicial sem perder responsividade nem hierarquia.`
- SEO
  - title
    - en: `Etecfy Streaming Project | Joao Paulo Dias Ventura`
    - pt: `Projeto Etecfy Plataforma de Streaming | Joao Paulo Dias Ventura`
  - description
    - en: `Project page about catalog scale, media delivery, and interface pacing in Etecfy.`
    - pt: `Pagina do projeto sobre escala de catalogo, entrega de midia e ritmo de interface no Etecfy.`

## Quick Rebuild Checklist

If you are implementing a new version, preserve at least these rules:

1. Keep the language-based routing model with `en` and `pt`.
2. Keep the canonical project order: `auronix`, `modularis`, `votrix`, `vox`, `etecfy`.
3. Keep home limited to the first 2 preview projects.
4. Keep `/projects` as the full list view for all 5 projects.
5. Keep `/project/:slug` as the deep-dive view with next-project cycling.
6. Preserve production URLs and repository URLs exactly as listed here.
7. Preserve cover/icon path conventions or remap them deliberately in the new implementation.
8. Preserve bilingual SEO titles and descriptions.
9. Preserve the dated proof statements already attached to the projects:
   - Votrix benchmark artifact: `2026-04-03T03:18:21.722Z`
   - Auronix re-run verification: `April 8, 2026`
   - Modularis local verification: `April 8, 2026`
10. Keep the contact endpoint and language-specific CV files if the new version still exposes those actions.

## Notes For Migration

- The current portfolio separates project data into 3 layers:
  - preview data for home
  - showcase data for `/projects`
  - detailed case-study data for `/project/:slug`
- If the new implementation prefers a single CMS-like schema, merge the layers carefully but keep the canonical order and per-surface copy differences.
- The home section and the projects page intentionally do not use the same copy density.
- A few metrics differ between preview and showcase layers by design, so do not auto-deduplicate values without reviewing intent.
