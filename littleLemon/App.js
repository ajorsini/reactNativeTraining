import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
// import LittleLemonFooter from './components/myLittleLemonFooter';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItems from './components/MenuItems';
// import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (
    <>
      <View style={appStyles.container}>
        <LittleLemonHeader />
        <MenuItems />
      </View>
      <View style={appStyles.bottomContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  bottomContainer: { backgroundColor: '#495E57' }
});