import * as React from 'react';  
import { View, Text, StyleSheet } from 'react-native';
    
export default LittleLemonFooter = () => {
return (
    <View style={myFooterStyle.container}>
        <Text style={myFooterStyle.text}>All rights reserved by Little Lemon, 2022</Text>
    </View>
    );
}

const myFooterStyle = StyleSheet.create({
    container: {
        flex: 0.05,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#F4CE14'
    },
    text: { 
        padding: 3,
        textAlign: 'left',
        fontSize: 15,
        color: 'black'
    }
})