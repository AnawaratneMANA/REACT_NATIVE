import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet,  TouchableNativeFeedback, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  let x = 1;

  const handlePressed = () =>  {
    console.log("Pressed The Text")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Me" onPress={() => console.log("But")}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems : "center"
  },
});
