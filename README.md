# Ana Rëynaud — Site institucional

Site estático (Astro + TypeScript) para Ana Rëynaud, nail designer e instrutora em Joinville — SC.
Conversão por WhatsApp e Instagram. Sem backend, banco de dados, CMS, login, checkout ou agenda própria.

## Como executar

Requer Node.js 18.20+ (recomendado 20+).

```bash
npm install
npm run dev       # desenvolvimento em http://localhost:4321
npm run build     # gera a pasta dist/ (site estático)
npm run preview   # serve o build localmente
npm run check     # verificação de tipos (astro check)
```

## Estrutura

```text
public/images/        fotos otimizadas (hero, gallery, courses, about)
src/data/siteContent.ts   TODO o conteúdo editável (textos, contatos, mensagens do WhatsApp, fotos, cursos)
src/lib/whatsapp.ts       gera os links wa.me (mensagem codificada)
src/components/           Header, Hero, PathCards, Services/ServiceCard, Portfolio/GalleryGrid,
                          CourseSection, About, Testimonials, Contact, Footer, Lightbox, WhatsAppCta
src/layouts/BaseLayout.astro   <head>, SEO básico, Open Graph, fontes (self-hosted)
src/scripts/site.ts       JS mínimo: menu móvel, filtro da galeria, lightbox
src/styles/global.css     tokens (cores, tipografia, raios) e estilos
```

## Como alterar conteúdo

Edite `src/data/siteContent.ts`. Para trocar uma foto, substitua o arquivo em `public/images/` mantendo o nome
(ou atualize o caminho e as dimensões no arquivo de dados). Contatos e mensagens do WhatsApp ficam em `contact` e `messages`.

## Publicação (Cloudflare Pages) — não executada

Configuração sugerida ao conectar o repositório: *Build command* `npm run build`, *Output directory* `dist`.
Antes da publicação definitiva, preencha `site` em `astro.config.mjs` (ativa canonical e `og:image` absoluto).

## Pendências para validar antes de publicar

- Qual curso corresponde ao bloco "Curso Mold F1" (formato de 1 dia + retorno após 15 dias) e se o formato vale para os demais.
- Preços, parcelamento, duração e datas dos cursos: omitidos (consulta pelo WhatsApp). Curso podal russo: só "individual, com acompanhamento".
- Classificação das fotos de alongamento x manutenção (seleção provisória).
- Fotos de Yasmin não usadas (confirmar maioridade/autorização do responsável); certificados com nome visível não usados (o exibido tem o nome desfocado).
- Depoimentos: sem nomes; texto levemente ajustado. Confirmar autorizações arquivadas.
- Testar os links do WhatsApp em celular e desktop; aviso de privacidade só se forem adicionados analytics/cookies.
