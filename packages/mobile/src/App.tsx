import React, { useState } from 'react';
import { Text, View, Switch, StyleSheet } from 'react-native';
import { ALL_TAROT_CARDS, CARD_PATTERNS } from '@tarot/shared';

export default function App() {
  const [reversalsEnabled, setReversalsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarot Learning</Text>
      <Text style={styles.subtitle}>Pattern recognition, numerology, and combination study</Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Study settings</Text>
        <View style={styles.switchRow}>
          <Text>Use reversed meanings</Text>
          <Switch value={reversalsEnabled} onValueChange={setReversalsEnabled} />
        </View>
        <Text style={styles.note}>
          {reversalsEnabled
            ? 'Reversed meanings are enabled.'
            : 'Reversals are off. Only upright meanings are shown.'}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Deck overview</Text>
        <Text>Total cards: {ALL_TAROT_CARDS.length}</Text>
        <Text>Pattern models: {CARD_PATTERNS.length}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120f1a',
    padding: 28,
    justifyContent: 'center'
  },
  title: {
    fontSize: 34,
    color: '#f0e7ff',
    fontWeight: '700',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 16,
    color: '#d5c7ea',
    marginBottom: 24
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#f0e7ff',
    marginBottom: 12
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  note: {
    color: '#d5c7ea'
  }
});
