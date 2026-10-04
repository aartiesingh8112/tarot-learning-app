export function getCardById(id: number): string {
  return `card_${id}`;
}

export function validateCardId(id: number): boolean {
  return id >= 0 && id < 78;
}

export function getSuitName(cardId: number): string {
  if (cardId < 22) return 'Major Arcana';
  const minorId = cardId - 22;
  const suitIndex = Math.floor(minorId / 14);
  const suits = ['Wands', 'Cups', 'Swords', 'Pentacles'];
  return suits[suitIndex];
}
