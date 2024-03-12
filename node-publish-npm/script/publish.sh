#!/bin/sh

set -e

pnpm install --no-frozen-lockfile
pnpm build

npm publish --provenance
cd -

echo "✅ Publish completed"