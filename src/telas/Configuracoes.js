import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Configuracoes({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CONFIGURAÇÕES</Text>
      
      <View style={styles.card}>
        <Text style={styles.optionText}>🌙 Tema: Claro</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.optionText}>🔔 Notificações: Desligadas</Text>
      </View>

      {/* NOVAS OPÇÕES - com suas cores */}
      <View style={styles.card}>
        <Text style={styles.optionText}>📱 Versão: 1.0.0</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.optionText}>👥 Desenvolvedores: Grupo 3</Text>
      </View>
      
      <TouchableOpacity style={styles.botaoSair} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.botaoTextoSair}>Sair do App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#a2a2a2',  // SUA COR
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000e39',  // SUA COR
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 18,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  optionText: {
    fontSize: 16,
    color: '#2C3E50',
  },
  botaoSair: {
    backgroundColor: '#05004f',  // SUA COR
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30,
  },
  botaoTextoSair: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});