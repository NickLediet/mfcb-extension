#!/user/bin/env bash

# Compile TypeScript
tsc

# Compile vite
vite build

# Move extension and dependency files
cp src/manifest.json node_modules/lit/polyfill-support.js dist/

# Run search and replace script
node ./inject-content-script.js