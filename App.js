import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,  View } from 'react-native';
import ImprovedCalculator from './components/improvedcalculator';


export default function App() {
  return (
    <View style={styles.container}>
      <View> 
      <ImprovedCalculator /> 
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
