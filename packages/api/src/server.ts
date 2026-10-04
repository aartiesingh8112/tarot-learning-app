import express from 'express';
import cors from 'cors';
import { tarotDeck } from '@tarot/shared';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_, res) => {
  res.json({ ok: true, message: 'Tarot API is running' });
});

app.get('/api/cards', (_, res) => {
  res.json({ cards: tarotDeck });
});

app.get('/api/cards/:id', (req, res) => {
  const card = tarotDeck.find((item) => item.id === req.params.id);
  if (!card) {
    return res.status(404).json({ error: 'Card not found' });
  }
  return res.json(card);
});

app.listen(port, () => {
  console.log(`Tarot API running on http://localhost:${port}`);
});
