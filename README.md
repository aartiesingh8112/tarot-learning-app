# Tarot Learning App

A comprehensive tarot card learning platform for web and mobile with interactive games, practice exercises, numerology, elemental associations, and card combination studies.

## Features

- **Card Library**: Complete 78-card tarot deck with meanings, numerology, elements, and reversals
- **Learning Modules**: Study card meanings, suit associations, numerology, and elemental connections
- **Card Combinations**: Learn how cards interact in spreads and combinations
- **Interactive Practice**: Games, quizzes, and exercises to reinforce learning
- **Progress Tracking**: Track your study progress and achievements
- **Reversals Toggle**: Option to include or exclude reversed card meanings
- **Multi-platform**: Web app (React) and Mobile app (React Native)

## Project Structure

```
tarot-learning-app/
├── packages/
│   ├── shared/              # Shared data models and utilities
│   │   ├── src/
│   │   │   ├── types/       # TypeScript interfaces
│   │   │   ├── data/        # Tarot card data and seed files
│   │   │   ├── utils/       # Shared utilities
│   │   │   └── constants/   # App constants
│   │   └── package.json
│   │
│   ├── api/                 # Node.js/Express backend
│   │   ├── src/
│   │   │   ├── routes/      # API endpoints
│   │   │   ├── controllers/ # Business logic
│   │   │   ├── models/      # Data models
│   │   │   ├── middleware/  # Auth, validation, etc.
│   │   │   └── server.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── web/                 # React web application
│   │   ├── src/
│   │   │   ├── components/  # Reusable components
│   │   │   ├── pages/       # Page components
│   │   │   ├── hooks/       # Custom hooks
│   │   │   ├── services/    # API and data services
│   │   │   ├── store/       # State management (Redux/Zustand)
│   │   │   ├── styles/      # CSS/Tailwind
│   │   │   ├── App.tsx
│   │   │   └── main.tsx
│   │   ├── package.json
│   │   └── vite.config.ts
│   │
│   └── mobile/              # React Native mobile app
│       ├── src/
│       │   ├── components/  # Native components
│       │   ├── screens/     # Screen components
│       │   ├── hooks/       # Custom hooks
│       │   ├── services/    # API and data services
│       │   ├── store/       # State management
│       │   ├── navigation/  # Navigation stack
│       │   ├── styles/      # NativeWind/Tailwind
│       │   └── App.tsx
│       ├── app.json
│       ├── eas.json
│       └── package.json
│
├── docs/                    # Documentation
│   ├── API.md
│   ├── DATA_SCHEMA.md
│   ├── SETUP.md
│   └── FEATURES.md
│
├── .github/workflows/       # CI/CD
├── package.json             # Root package.json (monorepo)
├── tsconfig.json
├── tsconfig.base.json
└── pnpm-workspace.yaml
```

## Tech Stack

### Shared
- **TypeScript**: Type-safe shared code
- **Zod**: Data validation

### Backend (API)
- **Node.js 18+**
- **Express.js**: HTTP server
- **TypeScript**: Type-safe backend
- **SQLite/PostgreSQL**: Database (optional for persistence)

### Web
- **React 18+**: UI framework
- **Vite**: Build tool
- **TypeScript**: Type safety
- **TailwindCSS**: Styling
- **React Router**: Navigation
- **Zustand/Redux**: State management

### Mobile
- **React Native**: Cross-platform mobile
- **Expo**: Development framework
- **TypeScript**: Type safety
- **NativeWind**: Tailwind on React Native
- **React Navigation**: Navigation

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- For mobile: Expo CLI
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aartiesingh8112/tarot-learning-app.git
cd tarot-learning-app
```

2. Install dependencies:
```bash
pnpm install
```

3. Setup environment files:
```bash
cp .env.example .env
```

### Development

**Start API Server:**
```bash
cd packages/api
pnpm dev
# Server runs on http://localhost:3001
```

**Start Web App:**
```bash
cd packages/web
pnpm dev
# App runs on http://localhost:5173
```

**Start Mobile App:**
```bash
cd packages/mobile
pnpm start
# Use Expo Go app to scan QR code
```

## Configuration

### Reversals Toggle
Users can enable/disable reversed card meanings in app settings:
- **With Reversals**: Full 156-card interpretation (78 upright + 78 reversed)
- **Without Reversals**: 78-card interpretation (upright only)

This setting is:
- Stored in user preferences
- Applied globally across learning modules and games
- Configurable in settings page

## API Endpoints

See [API.md](./docs/API.md) for complete endpoint documentation.

### Key Endpoints
- `GET /api/cards` - Get all cards
- `GET /api/cards/:id` - Get single card
- `GET /api/combinations` - Get card combinations
- `POST /api/users/progress` - Track learning progress
- `GET /api/lessons/:topic` - Get lesson content

## Data Schema

See [DATA_SCHEMA.md](./docs/DATA_SCHEMA.md) for detailed card and data structure documentation.

## License

MIT

## Contributing

Contributions welcome! Please read CONTRIBUTING.md for guidelines.

## Support

For issues and questions, please open a GitHub issue.
