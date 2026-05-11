import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TarefasProvider } from './src/context/TarefasContext';
import Login from './src/telas/Login';
import Principal from './src/telas/Principal';
import AdicionarTarefa from './src/telas/AdicionarTarefa';
import DetalhesTarefa from './src/telas/DetalhesTarefa';
import Configuracoes from './src/telas/Configuracoes';
import Criarconta from './src/telas/Criarconta';

const Stack = createStackNavigator();

export default function App() {
  return (
    <TarefasProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Criarconta" component={Criarconta} />
          <Stack.Screen name="Principal" component={Principal} />
          <Stack.Screen name="AdicionarTarefa" component={AdicionarTarefa} />
          <Stack.Screen name="DetalhesTarefa" component={DetalhesTarefa} />
          <Stack.Screen name="Configuracoes" component={Configuracoes} />
        </Stack.Navigator>
      </NavigationContainer>
    </TarefasProvider>
  );
}