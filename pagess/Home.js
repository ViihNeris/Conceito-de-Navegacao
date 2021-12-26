import * as React from 'react';
import {View, StyleSheet, Button} from 'react-native';


export default function Home(props){

  return (
    <View style = {style.container}>

        <Button title = "Alunos"
        onPress = {() => {props.navigation.navigate ('Alunos'
        )}} />
        <Button title = "Professores"  onPress = {() =>{props.navigation.navigate ('Professores')}} />

    </View>

  );

}

  const style = StyleSheet.create ({
    container: {
      flex: 1, 
      alignItems: 'center'

    }


  })
