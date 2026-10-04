# API Documentation

## Base URL
```
http://localhost:3001/api
```

## Endpoints

### Health Check
```
GET /health
```

### Get All Cards
```
GET /cards
```

Response:
```json
{
  "cards": [
    {
      "id": 0,
      "name": "The Fool",
      "suit": "Major Arcana",
      "meaning": "New beginnings"
    }
  ]
}
```

### Get Single Card
```
GET /cards/:id
```

## Running the API
```bash
cd packages/api
pnpm dev
```

Server runs on `http://localhost:3001`
