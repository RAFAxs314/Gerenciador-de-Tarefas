import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useTarefas } from '../context/TarefasContext';

export default function AdicionarTarefa({ navigation }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const { adicionarTarefa } = useTarefas();

  const salvarTarefa = () => {
    if (titulo.trim() === '') {
      Alert.alert('Erro', 'Digite um título');
      return;
    }

    adicionarTarefa({
      id: Date.now().toString(),
      titulo: titulo.trim(),
      descricao: descricao.trim() || 'Sem descrição',
      concluida: false
    });

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>NOVA TAREFA</Text>
      
      <Text style={styles.label}>Título</Text>
      <TextInput style={styles.input} value={titulo} onChangeText={setTitulo} placeholder="Digite o título" />
      
      <Text style={styles.label}>Descrição</Text>
      <TextInput style={[styles.input, styles.textArea]} value={descricao} onChangeText={setDescricao} placeholder="Digite a descrição" multiline />
      
      <TouchableOpacity style={styles.botao} onPress={salvarTarefa}>
        <Text style={styles.botaoTexto}>Salvar Tarefa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#a1a1a1',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#050045',
    marginBottom: 30,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  botao: {
    backgroundColor: '#09004b',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});