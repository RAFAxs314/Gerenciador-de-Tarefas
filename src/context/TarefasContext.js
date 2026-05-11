import React, { createContext, useState, useContext } from 'react';

const TarefasContext = createContext();

export function TarefasProvider({ children }) {
  const [tarefas, setTarefas] = useState([
    { id: '1', titulo: 'Estudar React Native', descricao: 'Seg-Sext 1 hora por dia', concluida: false },
  ]);

  const adicionarTarefa = (novaTarefa) => {
    setTarefas([...tarefas, novaTarefa]);
  };

  const atualizarTarefa = (tarefaAtualizada) => {
    const novasTarefas = tarefas.map(t => 
      t.id === tarefaAtualizada.id ? tarefaAtualizada : t
    );
    setTarefas(novasTarefas);
  };

  const excluirTarefa = (id) => {
    const novasTarefas = tarefas.filter(t => t.id !== id);
    setTarefas(novasTarefas);
  };

  return (
    <TarefasContext.Provider value={{ tarefas, adicionarTarefa, atualizarTarefa, excluirTarefa }}>
      {children}
    </TarefasContext.Provider>
  );
}

export function useTarefas() {
  return useContext(TarefasContext);
}