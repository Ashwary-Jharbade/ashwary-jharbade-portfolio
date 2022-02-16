#!/bin/sh

echo "Starting Deployment Process"

echo "Pulling changes form remote server started" 
git pull origin main
echo "Pulling changes from remote server done"

echo "Installing packages started"
npm i
echo "Installing packages completed"

echo "Bundling process started"
npm run build
echo "Bundling process completed"

echo "Serving build started"
npm run serve
echo "Serving build completed"