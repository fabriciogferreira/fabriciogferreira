# Melhorias em espera (`subportifolio`)

Ideias **boas em produto**, mas que só entram quando aparecer uma forma com custo/risco aceitável. Não confundir com o `DECISIONS.md` (o que já foi escolhido e por quê).

Quando uma entrada sair daqui: implementar, apagar a linha, e registrar a nova decisão no `DECISIONS.md` se mudar o produto.

## Formato

```
### Título curto
**Valor:** o que melhora para o visitante
**Bloqueio hoje:** por que não está no site
**Caminho aceitável:** o que precisaria existir para desbloquear
```

---

### Heatmap de commits (GitHub)

**Valor:** prova visual de atividade contínua — forte para recrutador tech; complementa os três números.

**Bloqueio hoje:** o antigo usava `react-activity-calendar` + GraphQL com `NEXT_PUBLIC_CONTRIBUTIONS_TOKEN` no browser (token exposto, libs extras, fetch client-side frágil).

**Caminho aceitável:** dados sem secret no client — Route Handler / Server Component com token só no servidor, snapshot em build, ou fonte pública cacheada; UI leve na seção Números; fallback se a fonte falhar (números + link ao perfil bastam).

---

### i18n com URLs por locale (`/br`, `/en`)

**Valor:** SEO e compartilhamento com idioma na URL; deep link em EN.

**Bloqueio hoje:** one-page com âncoras + `LocaleProvider` client já cobre troca PT/EN sem `next-intl` / pasta `[locale]`.

**Caminho aceitável:** migrar para `next-intl` (ou equivalente App Router) só se SEO multi-URL for requisito real — não “porque é o padrão”.

---

### Bloco de idiomas / certificados em Skills

**Valor:** English (ou outros) como sinal explícito para vagas internacionais.

**Bloqueio hoje:** no antigo estava comentado — sem conteúdo real para migrar.

**Caminho aceitável:** nível e prova (certificado ou autoavaliação clara) antes de inventar uma linha “English”.

---

### Voltar ao topo

**Valor:** em página longa, atalho após rolar (bases / vários portfólios de referência).

**Bloqueio hoje:** nav sticky + hash cobrem parte do caso; botão flutuante ainda não.

**Caminho aceitável:** botão discreto após sair do hero (não competir com a primeira dobra).

---

### Open source / métricas por repo

**Valor:** prova de contribuição além dos projetos listados (referências tipo developerfolio / ashutosh).

**Bloqueio hoje:** mesma família do heatmap — API/token/peso; projetos já mostram stack.

**Caminho aceitável:** cards só de repos escolhidos à mão, ou fetch server-side sem secret no browser.

---

### Skill em % / barras

**Valor:** aparente clareza de nível.

**Bloqueio hoje:** % autoavaliada é frágil e datada; chips + logos já escaneiam melhor.

**Caminho aceitável:** só se houver prova externa (certificação) — senão manter fora de propósito.
