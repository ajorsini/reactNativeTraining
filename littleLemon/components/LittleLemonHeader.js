import * as React from 'react';  
import { View, Text, StyleSheet } from 'react-native';
    
export default LittleLemonHeader = () => {
return (
    <View style={headerStyle.container}>
        <Text style={headerStyle.text}>
            Little Lemon
        </Text>
    </View>
    );
}

const headerStyle = StyleSheet.create({
    container: {
        flex: 0.13,
        backgroundColor: '#F4CE14'
    },
    text: { 
        paddingTop: 40,
        paddingBottom: 10,
        textAlign: 'center',
        fontSize: 30,
        color: 'black'
    }
});