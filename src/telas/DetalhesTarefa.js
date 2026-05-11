import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useTarefas } from '../context/TarefasContext';

export default function DetalhesTarefa({ route, navigation }) {
  const { tarefaId } = route.params;
  const { tarefas, atualizarTarefa, excluirTarefa } = useTarefas();
  
  const tarefa = tarefas.find(t => t.id === tarefaId);

  if (!tarefa) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Tarefa não encontrada</Text>
        <TouchableOpacity style={styles.botaoSalvar} onPress={() => navigation.goBack()}>
          <Text style={styles.botaoTexto}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const [titulo, setTitulo] = useState(tarefa.titulo);
  const [descricao, setDescricao] = useState(tarefa.descricao);

  const salvarEdicao = () => {
    atualizarTarefa({
      ...tarefa,
      titulo: titulo,
      descricao: descricao
    });
    navigation.goBack();
  };

  const excluir = () => {
    excluirTarefa(tarefa.id);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>EDITAR TAREFA</Text>
      
      <Text style={styles.label}>Título</Text>
      <TextInput style={styles.input} value={titulo} onChangeText={setTitulo} />
      
      <Text style={styles.label}>Descrição</Text>
      <TextInput 
        style={[styles.input, styles.textArea]} 
        value={descricao} 
        onChangeText={setDescricao} 
        multiline 
      />
      
      <TouchableOpacity style={styles.botaoSalvar} onPress={salvarEdicao}>
        <Text style={styles.botaoTexto}>Salvar Alterações</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botaoExcluir} onPress={excluir}>
        <Text style={styles.botaoTextoExcluir}>Excluir Tarefa</Text>
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
  botaoSalvar: {
    backgroundColor: '#09004b',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  botaoExcluir: {
    backgroundColor: '#FF4757',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  botaoTextoExcluir: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});