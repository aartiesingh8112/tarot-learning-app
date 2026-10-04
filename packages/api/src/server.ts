import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Tarot API is running' });
});

app.get('/api/cards', (req, res) => {
  res.json({
    cards: [
      { id: 0, name: 'The Fool', suit: 'Major Arcana', meaning: 'New beginnings' },
      { id: 1, name: 'The Magician', suit: 'Major Arcana', meaning: 'Manifestation and resourcefulness' },
      { id: 22, name: 'Ace of Wands', suit: 'Wands', meaning: 'Inspiration and new opportunities' }
    ]
  });
});

app.get('/api/cards/:id', (req, res) => {
  const cardId = parseInt(req.params.id);
  res.json({
    id: cardId,
    name: `Card ${cardId}`,
    meaning: 'Card meaning here',
    description: 'Detailed description'
  });
});

app.listen(PORT, () => {
  console.log(`🎴 Tarot API running on http://localhost:${PORT}`);
  console.log(`📚 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🃏 Cards endpoint: http://localhost:${PORT}/api/cards`);
});
