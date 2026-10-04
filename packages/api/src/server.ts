import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ALL_TAROT_CARDS, CARD_INTERACTIONS, CARD_PATTERNS } from '@tarot/shared';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Tarot learning API is running.' });
});

app.get('/api/cards', (_req, res) => {
  res.json(ALL_TAROT_CARDS);
});

app.get('/api/cards/:id', (req, res) => {
  const card = ALL_TAROT_CARDS.find((item) => item.id === req.params.id);
  if (!card) {
    res.status(404).json({ message: 'Card not found' });
    return;
  }
  res.json(card);
});

app.get('/api/patterns', (_req, res) => {
  res.json(CARD_PATTERNS);
});

app.get('/api/interactions', (_req, res) => {
  res.json(CARD_INTERACTIONS);
});

app.get('/api/summary', (_req, res) => {
  res.json({
    totalCards: ALL_TAROT_CARDS.length,
    majorArcana: ALL_TAROT_CARDS.filter((card) => card.arcana === 'major').length,
    minorArcana: ALL_TAROT_CARDS.filter((card) => card.arcana === 'minor').length,
    patterns: CARD_PATTERNS.length,
    interactionModels: CARD_INTERACTIONS.length
  });
});

app.listen(port, () => {
  console.log(`Tarot API listening on http://localhost:${port}`);
});
