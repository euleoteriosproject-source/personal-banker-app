# personal-banker-app

Site institucional para Personal Banker em Next.js 14 (App Router) + TailwindCSS. Estilo premium com cores vinho/pêssego e tipografia Great Vibes + Inter.

## Estrutura
```
src/
  app/
    layout.tsx
    globals.css
    page.tsx
    produtos/page.tsx
    sobre/page.tsx
    contato/page.tsx
  components/
    Header.tsx
    Footer.tsx
    Hero.tsx
    FeatureCard.tsx
    ServiceCard.tsx
    AboutSection.tsx
    ContactForm.tsx
    WhatsButton.tsx
```

## Rodando localmente
```bash
cd personal-banker-app
npm install
npm run dev
# abrir http://localhost:3000
```

## Deploy na Vercel
1. Suba o repositório para GitHub/GitLab.  
2. Na Vercel, importe o projeto e escolha Next.js.  
3. Deploy acontece automaticamente (não há variáveis de ambiente nesta V1).  
4. Opcional: `vercel --prod` via CLI.

## Páginas e funcionalidades
- Home: Hero com CTA WhatsApp, benefícios e chamada consultiva.  
- Produtos: Grid de 8 produtos; ao clicar, abre modal com descrição e botão “Quero saber mais → WhatsApp”.  
- Sobre: Conteúdo institucional com badge “Certificação ANBIMA - CPA-10”.  
- Contato: Formulário (Nome, WhatsApp, Produto desejado) que redireciona ao WhatsApp com mensagem preenchida.

## Estilo
- Cores: Primária `#6d1b2d`, Secundária `#f4a48d`, Neutras `#FFF5F0 / #E8E8E8 / #1D1D1D`.  
- Tipografia: Títulos em Great Vibes; corpo em Inter/Nunito.  
- Layout: espaçamento amplo, sombras suaves, botões arredondados, estética premium e minimalista.
