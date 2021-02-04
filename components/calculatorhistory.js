import React, {useState} from 'react'; 
import { Text } from 'react-native-elements';
import {Button, TextInput, StyleSheet, View, FlatList} from 'react-native'; 

export default function ImprovedCalculator () {
    // First define the required useStates

    const [calc1, setCalc1 ] = useState(''); // Number(s) in the first textinput
    const [calc2, setCalc2] = useState('');  // Number(s) in the second textinput
    const [result, setResult] = useState('');  // result of calculation 

    // Älä käytä kommentteja return-lauseessa
    // Syy? Text strings must be rendered within a <text> component virhe... 

    const calculation = operation => {
        console.log(calc1, calc2, operation); 
        const [number1, number2] = [Number(calc1), Number(calc2)]; // This is where numbers come into play
        switch (operation) {
            case '+': 
                setResult(number1 + number2); // Käytetään rivillä  42 
                break;
            case '-':
                setResult(number1 - number2); // Käytetään rivillä 47
                break; 
        }
        setCalc1(''); 
        setCalc2(''); 

        }
    
    
   return ( 
      <View> 
        
        <Text style={styles.container}> Calculator </Text>

        
        <Text style={styles.result}> Result: {result} </Text>

    <View style= {styles.input} >

    <TextInput style={styles.input} 
    keyboardType='number-pad'
    onChangeText={text => setCalc1(text)}
    value={calc1} /> 

    <TextInput style={styles.input} 
    keyboardType='number-pad'
    onChangeText={text => setCalc2(text)}
    value={calc2} /> 

    </View>
    <View style={styles.buttons}> 

        <Button title="+" onPress={() => calculation('+')}> </Button>
        <Button title="-" onPress={() => calculation('-')}> </Button> 
    </View>

    
    </View>
   );
};

const styles = StyleSheet.create({
    buttons: { // edit: react native does not respond to style prop :(
        flexDirection: 'row', 
        alignItems:"center",
        justifyContent: "space-around",
        marginHorizontal: 3
    },
    input: {
        borderWidth: 1, 
        borderColor: 'gray',
        width: 200
    },
    container: {
        fontSize: 24,
        fontWeight: "bold"
    },
    result:  {
        fontSize: 16, 
        color: 'red'
    }
});
