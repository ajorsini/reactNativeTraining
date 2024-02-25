import * as React from 'react';
import { View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/myLittleLemonFooter';

export default App = () => {
  return (
    <View
    style={{
        flex: 1,
        backgroundColor: '#495E57',
      }}>
      <LittleLemonHeader />
      <LittleLemonFooter />
    </View>
  );
}