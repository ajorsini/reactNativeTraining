import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View
      style={footerStyle.container}>
      <Text
        style={footerStyle.text}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}

const footerStyle = StyleSheet.create({
        container: {
            backgroundColor: '#F4CE14',
            marginBottom: 1,
        },
        text: {
            fontSize: 18,
            fontStyle: 'italic',
            color: 'black',
            textAlign: 'center',
        }
    }
);