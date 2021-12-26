import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Professores(props){

  return (
     <View style = {estiloP.container}>
        <Text style = {estiloP.title}> Lista de Professores </Text>
        <Text style = {estiloP.prof}> Anderson </Text>
        <Text style = {estiloP.prof}> Doni </Text>
        <Text style = {estiloP.prof}> Silvio </Text>
        <Text style = {estiloP.prof}> Rute </Text>

     </View>

        );

}

const estiloP = StyleSheet.create ({

  container: {
    alignItems: 'center',
    backgroundColor: '#D69FC4'


  },

  title: {
    fontColor: 'red',
    fontSize: 30,
    marginBottom: 10,
    marginTop: 10

  },

  prof: { 
    marginTop: 10,
    fontColor: 'blue',
    fontSize: 20
  }

});