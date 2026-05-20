#!/bin/bash
# Quick-start script for ascend-web
# Usage: bash setup.sh

set -e

echo "═══════════════════════════════════════════"
echo "  Ascend Web — Quick Setup"
echo "═══════════════════════════════════════════"
echo ""

# Check Node version
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Install from https://nodejs.org (need v18+)"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d 'v' -f 2 | cut -d '.' -f 1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js v18+ required. You have: $(node -v)"
    exit 1
fi

echo "✓ Node $(node -v)"

# Install dependencies
echo ""
echo "📦 Installing dependencies (this takes ~1 min)..."
npm install

echo ""
echo "═══════════════════════════════════════════"
echo "  ✅ Setup complete!"
echo "═══════════════════════════════════════════"
echo ""
echo "Next steps:"
echo ""
echo "  1. Edit src/components/landing/WaitlistSection.tsx"
echo "     → Replace YOUR_FORM_ID with your Formspree endpoint"
echo ""
echo "  2. Edit next.config.js"
echo "     → Set repoName to your GitHub repo name"
echo ""
echo "  3. Start the dev server:"
echo "       npm run dev"
echo ""
echo "  4. Open http://localhost:3000"
echo ""
