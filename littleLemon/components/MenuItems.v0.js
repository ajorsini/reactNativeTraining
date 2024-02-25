import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const menuItemsToDisplay = [
  ' Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];

const MenuItems = () => {
  return (
    <View style={menuStyles.container}>
      <ScrollView style={menuStyles.scrollContainer}>
        <Text style={menuStyles.title}>View Menu</Text>
        <Text style={menuStyles.items}>{menuItemsToDisplay[0]}</Text>
      </ScrollView>
    </View>
  );
}

const menuStyles = StyleSheet.create({
    container: { flex: 0.88 },
    scrollContainer: {
        paddingHorizontal: 40,
        paddingVertical: 40,
        backgroundColor: "black",
    },
    title: {
        color: 'white',
        fontSize: 40,
        flexWrap: 'wrap'
    },
    items: {
        color: '#F4CE14',
        fontSize: 36,
        paddingBottom: 80
    }
});

export default MenuItems;
