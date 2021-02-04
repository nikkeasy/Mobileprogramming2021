import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,  View } from 'react-native';
import ImprovedCalculator from './components/improvedcalculator';
import ListWithHistory from './components/listwhistory';
import listHistory from './components/listwhistory';
import TipInputScreen from './components/shoppinglist'; 


export default function App() {
  return (
    <View style={styles.container}>
      <View> 
     <Text> asd </Text> 
     <ListWithHistory /> 
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
