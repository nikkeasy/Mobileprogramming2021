import React,  { useState } from "react"
import { Text } from 'react-native-elements';
import {TextInput, Button, ViewStyle, View, StyleSheet, Header} from 'react-native'; 
import { Alert } from "react-native";

// Flexdirection row -> -> -> 
// alignItems - flexbox <View style={{flex: 1, flexDirection: 'row'}}



const CalculatorComponent = () => {
    const [value1, onChangeText1] = React.useState("")
    const [value2, onChangeText2] = React.useState("")

    const buttonPressed1 = () => {
        Alert.alert('The answer is: ' + (value1 + value2))
    }

    const buttonPressed2 = () => {
        Alert.alert('The answer is: ' + (value1 - value2))
    }
    

    
    return ( 
        <View> 
          <Text>Calculator</Text>
            
         <View style={{ alignContent: "center" }} >
  
  
        <TextInput
        style={{ width: 200, borderColor: 'blue', borderWidth: 1}}
        keyboardType='numeric'
        onChangeText={int => onChangeText1(int)}
        value={value1}
    /> 
    <TextInput
    style={{ width: 200, borderColor: 'blue', borderWidth: 1}}
    keyboardType='numeric'
    onChangeText={int => onChangeText2(int)}
    value={value2} /> 
    </View>
    <View style={styles.ButtonStyles}> 
    <Button
    title="+" onPress={buttonPressed1}/> 
      <Button title="-" onPress={buttonPressed2}/>
    </View>
    </View>
    
    );
}; 
// CHECKING OUT button styling later on
// EDIT: Don't use styling on buttons directly, rather on view tag before button
const styles = StyleSheet.create({
    ButtonStyles: { 
        flexDirection: 'row',
        alignItems: 'center', justifyContent: 'space-around',  marginHorizontal: 30
        } // Note, marginhorizontal affects how close the buttons are each oter
    });  

export default CalculatorComponent; 