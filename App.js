import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  TouchableHighlight, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  let x = 1;

  const handlePressed = () =>  {
    console.log("Pressed The Text")
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight onPress={() => console.log("Image Tapped")}>
        <Image
            blurRadius={10}
            fadeDuration={1000}
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300"}}/>

      </TouchableHighlight>
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
