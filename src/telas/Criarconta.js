import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function Criarconta({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleCadastro = () => {
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Confirmar:', confirmarSenha);

    if (!nome || !email || !senha || !confirmarSenha) {
      setMensagem('⚠️ Preencha todos os campos');
      return;
    }

    if (senha !== confirmarSenha) {
      setMensagem('⚠️ As senhas não coincidem');
      return;
    }

    if (senha.length < 6) {
      setMensagem('⚠️ A senha deve ter pelo menos 6 caracteres');
      return;
    }

    setMensagem('✅ Conta criada com sucesso!');
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1500);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>CRIAR CONTA</Text>
      <Text style={styles.subtitulo}>Preencha os dados abaixo</Text>

      {mensagem !== '' && (
        <Text style={styles.mensagem}>{mensagem}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha (mínimo 6 caracteres)"
        placeholderTextColor="#999"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      <TouchableOpacity style={styles.botaoPrimario} onPress={handleCadastro}>
        <Text style={styles.botaoTexto}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoSecundario} onPress={() => navigation.goBack()}>
        <Text style={styles.botaoTextoAzul}>Voltar para o Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#b5b5b5',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000c37',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 14,
    color: '#01005a',
    marginBottom: 20,
  },
  mensagem: {
    fontSize: 14,
    color: '#060030',
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    textAlign: 'center',
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