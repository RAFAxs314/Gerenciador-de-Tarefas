import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1995/1995572.png' }}
        style={styles.logo}
      />
      <Text style={styles.titulo}>CHECKLIST DIGITAL</Text>
      <Text style={styles.subtitulo}>Organize suas tarefas de forma simples</Text>
      
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      
      <TouchableOpacity style={styles.botaoPrimario} onPress={() => navigation.navigate('Principal')}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
      
      
      <TouchableOpacity style={styles.botaoSecundario} onPress={() => navigation.navigate('Criarconta')}>
        <Text style={styles.botaoTextoAzul}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#b5b5b5',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
    tintColor: '#040026',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000c37',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 14,
    color: '#01005a',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  botaoPrimario: {
    width: '100%',
    backgroundColor: '#060030',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  botaoSecundario: {
    width: '100%',
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  botaoTextoAzul: {
    color: '#040026',
    fontSize: 16,
    fontWeight: '600',
  },
});