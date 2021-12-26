import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';


import {createStackNavigator} from '@react-navigation/stack';


import Alunos from './Alunos';
import Professores from './Professores';
import Home from './Home';


const Stack = createStackNavigator();

export default function Rotas(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Home' component = {Home}/>
        <Stack.Screen name = 'Alunos' component = {Alunos}/>
        <Stack.Screen name = 'Professores' component = {Professores}/>
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}