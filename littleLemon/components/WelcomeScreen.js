import * as React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView indicatorStyle={"white"} style={welcomeStyles.container}>
      <Text
        style={welcomeStyles.title}>Welcome to Little Lemon</Text>
      <Text
        style={welcomeStyles.text}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const welcomeStyles = StyleSheet.create({
    container: { flex: 1 },
    title: {
        padding: 40,
        fontSize: 50,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    text: {
        fontSize: 38,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    }
});