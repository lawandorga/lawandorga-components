#!/bin/bash
set -e

# Known variables
outdir="./dist"
name="lawandorga-components"
input="./src/index.ts"

# Find executables
esbuild=$(npm bin)/esbuild
tsc=$(npm bin)/tsc

# Setup shared options for esbuild
sharedOptions=()
sharedOptions+=("--bundle")
sharedOptions+=("--platform=browser")
sharedOptions+=("--target=es2019")

# Generate actual builds
NODE_ENV=production  $esbuild $input --format=esm  --outfile=$outdir/$name.esm.js    --minify ${sharedOptions[@]} --external:vue &
NODE_ENV=production  $esbuild $input --format=cjs  --outfile=$outdir/$name.prod.cjs  --minify ${sharedOptions[@]} --external:vue &
NODE_ENV=development $esbuild $input --format=cjs  --outfile=$outdir/$name.dev.cjs            ${sharedOptions[@]} --external:vue &

# Generate types
$tsc --emitDeclarationOnly --outDir $outdir &

# Copy build files over
cp -rf ./build/ $outdir

# Wait for all the scripts to finish
wait