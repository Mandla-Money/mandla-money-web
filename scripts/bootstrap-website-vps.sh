#!/usr/bin/env bash
# Deprecated: the company website now deploys to the staging VPS via
# mandla-actions staging-deploy (compose service: company-website).
#
# See deployment.md — merge/push the `production` branch; do not run this on a
# dedicated website box.

echo "This bootstrap is retired."
echo "Deploy path: push mandla-money-web production → GHCR prod-latest → staging VPS company-website"
echo "Docs: deployment.md"
exit 1
