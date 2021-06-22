import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Cadastro from './components/cadastro';
import Login from './components/login';
import Termos from './components/termos';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Cadastro />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#374999',
    alignItems: 'center'
  },
});
