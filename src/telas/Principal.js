import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTarefas } from '../context/TarefasContext';

export default function Principal({ navigation }) {
  const { tarefas, atualizarTarefa } = useTarefas();

  const alternarConcluida = (id) => {
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa) {
      atualizarTarefa({ ...tarefa, concluida: !tarefa.concluida });
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('DetalhesTarefa', { tarefaId: item.id })}
    >
      <View style={styles.cardContent}>
        <TouchableOpacity onPress={() => alternarConcluida(item.id)} style={styles.checkbox}>
          {item.concluida && <Text style={styles.checkMark}>✓</Text>}
        </TouchableOpacity>
        <View style={styles.textContent}>
          <Text style={[styles.titulo, item.concluida && styles.concluida]}>
            {item.titulo}
          </Text>
          <Text style={styles.descricao}>{item.descricao}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitulo}>MINHAS TAREFAS</Text>
      <FlatList
        data={tarefas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.lista}
      />
      <TouchableOpacity style={styles.botaoFlutuante} onPress={() => navigation.navigate('AdicionarTarefa')}>
        <Text style={styles.botaoFlutuanteTexto}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoConfig} onPress={() => navigation.navigate('Configuracoes')}>
        <Text style={styles.botaoTexto}>⚙️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9f9f9f',
  },
  headerTitulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000d5a',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  lista: {
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#09004b',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkMark: {
    color: '#09004b',
    fontSize: 14,
    fontWeight: 'bold',
  },
  textContent: {
    flex: 1,
  },
  titulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 4,
  },
  concluida: {
    textDecorationLine: 'line-through',
    color: '#B2BEC3',
  },
  descricao: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  botaoFlutuante: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#fcfcfc',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#080047',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  botaoFlutuanteTexto: {
    color: '#00054e',
    fontSize: 28,
    fontWeight: 'bold',
  },
  botaoConfig: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    backgroundColor: '#FFFFFF',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  botaoTexto: {
    fontSize: 24,
  },
});