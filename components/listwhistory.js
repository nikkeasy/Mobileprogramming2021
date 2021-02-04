import React from 'react';
import { View } from 'react-native';
import {Text, useState, FlatList, TextInput, Button, SafeAreaView, StatusBar, StyleSheet} from 'react-native'; 

export default function ListWithHistory () {

    const [list, setList] = React.useState(uselessList); 
    const [name, setName] = React.useState(''); 

    let a = 0; 

    const uselessList = [
        {id: 'a',
        name: 'Testi1', 
        },
        {id: 'b',
        name: 'Testi2'
        },
    ]; 


    const Item = ({ name }) => ( 
        <View>  
        <Text> Name: {name} Row: {++a}  </Text> 
        </View>
    ); 

    const renderer = ({ item }) => ( 
        <Item name={item.name} /> 
    ); 


                        // Can the event be renamed to anything else? 
    function handleChange (event) {  // Handle input field's state HEHE 
        setName(event.target.value); 
    }
    function handleAdd () {     // Add stuff to list function BOII 
        const newList = list.concat({name});
        setList(newList); 
    }

    
    
    return(
        <View> 
            <View>
                <TextInput keyboardType="default" value={name} onChange={handleChange} /> 
            </View>    
            <Button title="Add" onClick={handleAdd}></Button>  
            <View> 
                <FlatList
                data={uselessList}
                renderItem={renderer}
                keyExtractor={ item => item.id} /> 
           
                </View>
        </View>

    ); 
} 
