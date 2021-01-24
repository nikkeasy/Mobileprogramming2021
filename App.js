import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
// Luodaan funktio joka palautetaan return-lausekkeessa
const App = () =>  {
  const createAlertingButton = () => 
    Alert.alert(
      "Attention!", 
      "You have pressed T H E button!!!!!!",
      [
        { // Kaksi eri vaihtoehtoa, Accept ja NOPE
          text: "Accept",  
          onPress: () => console.log("Accepted pressed")
        },
        { text: "NOPE!", onPress: () => console.log("Nope pressed") }
      ]
    ); 

  return (
    <View style={styles.container}>
      <Text> Click the button to see something fun!</Text>
      
      <Button
      title="Hello World!"
      color="#f194ff"
      onPress={createAlertingButton} />
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default App; 
