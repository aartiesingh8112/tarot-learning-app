# Setup Guide

## Prerequisites
- Node.js 18+
- pnpm (recommended) or npm
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/aartiesingh8112/tarot-learning-app.git
cd tarot-learning-app
```

2. Install dependencies:
```bash
pnpm install
```

## Running the Applications

### Terminal 1 - API Server
```bash
cd packages/api
pnpm dev
```
API runs on `http://localhost:3001`

### Terminal 2 - Web App
```bash
cd packages/web
pnpm dev
```
Web app opens on `http://localhost:5173`

### Terminal 3 - Mobile App (Optional)
```bash
cd packages/mobile
pnpm start
```
Scan the QR code with Expo Go app

## Troubleshooting

### Port already in use
- Change ports in respective `vite.config.ts` or Express server files

### Dependencies not installing
- Clear cache: `pnpm store prune`
- Reinstall: `rm -rf node_modules pnpm-lock.yaml && pnpm install`

### CORS errors
- Ensure API is running on port 3001
- Check that web app is configured to call `http://localhost:3001`
