import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './components/cadastro';
import Login from './components/login';
import Termos from './components/termos';
import NovoPet from './components/novo-pet';
import RecuperarSenha from './components/recuperar-senha';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }}/>
          <Stack.Screen name="Termos" component={Termos} options={{ headerShown: false }} />
          <Stack.Screen name="NovoPet" component={NovoPet} options={{ headerShown: false }} />
          <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
