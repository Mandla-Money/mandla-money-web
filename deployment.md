# Mandla company website (mandlamoney.com / staging preview)

Marketing site for Mandla Money.

## Deploy model

Same as other Mandla services: merge/push to **`staging`**.

```text
merge/push to staging
        → GitHub Actions (this repo)
            1. docker build linux/amd64 (static Next export + nginx)
            2. push ghcr.io/mandla-money/mandla-money-web:staging-latest
            3. repository_dispatch → Mandla-Money/mandla-actions (staging-deploy)
        → staging VPS (144.126.210.43)
            4. docker compose pull + force-recreate company-website
```

Compose service: `company-website` · container `mandla-company-website` · NPM hosts
`www.mandlamoney.com` / `mandlamoney.com` and `www.mandlastaging.xyz` / `mandlastaging.xyz`
→ port `80` (all on the staging VPS).

Same SSH secrets / pipeline as every other staging service (`STAGING_SSH_*` in `mandla-actions`).

## Promotion

```text
main
  └─ feature/<name>
         │
         ▼ merge
      staging   ← builds + deploys to staging VPS
```

```bash
git checkout main && git pull
git checkout -b feature/my-change
# ... commit ...
git checkout staging && git pull
git merge feature/my-change
git push origin staging
```

Manual retry: Actions → **Staging** → **Run workflow**, or in `mandla-actions`
→ **Deploy staging** → service `company-website`.

## Required secrets (this repo)

| Secret | Purpose |
|--------|---------|
| `GHCR_TOKEN` | Classic PAT with `write:packages` |
| `MANDLA_ACTIONS_DISPATCH_PAT` | Fine-grained PAT for `mandla-actions` Contents write |

## Verify

```bash
ssh -i ~/.ssh/mandla-staging-deploy mandla@144.126.210.43 \
  'docker inspect mandla-company-website --format "{{.Config.Image}} {{.State.Health.Status}}"'

curl -sI https://www.mandlamoney.com | head -5
curl -sI https://www.mandlastaging.xyz | head -5
```

## Related

- Staging compose: `mandla-money-vps/staging/docker-compose.yml` (`company-website`)
- Central deploy: [Mandla-Money/mandla-actions](https://github.com/Mandla-Money/mandla-actions) (`staging-deploy`)
- Pattern reference: `mandla-control-centre/deployment.md`
