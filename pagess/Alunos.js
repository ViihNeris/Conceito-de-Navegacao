import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Alunos(props){

  return (
     <View style = {estiloA.container}>
        <Text style = {estiloA.title}> Lista de Alunos </Text>
        <Text style = {estiloA.alunos}> Yasmin </Text>
        <Text style = {estiloA.alunos}> Viih </Text>
        <Text style = {estiloA.alunos}> Thalles </Text>
        <Text style = {estiloA.alunos}> Pedro </Text>

     </View>

        );

}

const estiloA = StyleSheet.create ({

  container: {
    alignItems: 'center',
    backgroundColor: 'pink'


  },

  title: {
    fontColor: 'red',
    fontSize: 30,
    marginBottom: 10,
    marginTop: 10

  },

  alunos: {
    marginTop: 10,
    fontColor: 'red',
    fontSize: 20,
  }

});