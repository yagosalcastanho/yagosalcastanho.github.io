# Guia de Deploy — GitHub Pages

Este portfólio é um site estático hospedado via **GitHub Pages**, sem necessidade de servidor local em produção.

## Pré-requisitos

- Conta no [GitHub](https://github.com)
- Repositório `yagosalcastanho/portifolio` (ou `yagosalcastanho.github.io` para URL na raiz)

## Deploy automático (recomendado)

O workflow `.github/workflows/deploy.yml` publica automaticamente a branch `main` no GitHub Pages a cada push.

1. Crie o repositório no GitHub
2. Faça push da branch `main`
3. Em **Settings → Pages → Build and deployment**, selecione **GitHub Actions**
4. Após o workflow concluir, acesse:

   ```
   https://yagosalcastanho.github.io/portifolio/
   ```

## Deploy manual (alternativa)

1. Vá em **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / pasta `/ (root)`
4. Salve e aguarde alguns minutos

## Domínio customizado (opcional)

1. Adicione seu domínio no arquivo `CNAME` (ex.: `yagocastanho.dev`)
2. Configure DNS no provedor:
   - Tipo `CNAME`: `www` → `yagosalcastanho.github.io`
   - Tipo `A` para apex (opcional): IPs do GitHub Pages
3. Em **Settings → Pages**, habilite **Enforce HTTPS**

## Desenvolvimento local

Para testar com módulos ES e `fetch` do `projects.json`:

```bash
# Python 3
python -m http.server 8080

# Node.js (npx)
npx serve .
```

Abra `http://localhost:8080` — use apenas para desenvolvimento, não para produção.

## Checklist pós-deploy

- [ ] URL pública acessível
- [ ] Projetos carregam via `data/projects.json`
- [ ] Links de GitHub e LinkedIn funcionam
- [ ] Preview Open Graph (`og-preview.png`) visível ao compartilhar
- [ ] Favicon aparece na aba do navegador
- [ ] Site responsivo no mobile

## Troubleshooting

| Problema | Solução |
|----------|---------|
| Projetos não aparecem | Confirme que `data/projects.json` está no repo e o site não foi aberto via `file://` |
| CSS/JS não carrega | Verifique paths relativos e se o deploy incluiu a pasta `assets/` |
| 404 na URL | Confirme nome do repo e configuração em Settings → Pages |
