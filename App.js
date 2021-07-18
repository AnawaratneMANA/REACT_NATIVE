import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  TouchableNativeFeedback, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  let x = 1;

  const handlePressed = () =>  {
    console.log("Pressed The Text")
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableNativeFeedback onPress={() => console.log("Image Tapped")}>
              <View
                  style={{width: 200, height: 70, backgroundColor:  "dodgerblue" }}
              >
              </View>

      </TouchableNativeFeedback>
      <Text numberOfLines={1} onPress = {handlePressed}>Open up App.js to
        start working on
        our app! This is a very long text, Want to see what happen</Text>

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
