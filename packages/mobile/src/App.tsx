import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1a1a2e' }}>
      <Text style={{ fontSize: 24, color: '#fff', fontWeight: 'bold' }}>🎴 Tarot Learning App</Text>
      <Text style={{ fontSize: 16, color: '#ccc', marginTop: 10 }}>Mobile Version</Text>
    </View>
  );
}
