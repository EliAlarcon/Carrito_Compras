import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CarritoCompras from './src/components/CarritoCompras';
import DetallesProductoScreen from './src/components/DetalleProducto';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="DetallesProducto">
      <Stack.Screen name="DetallesProducto" component={DetallesProductoScreen} />
      <Stack.Screen name="Carrito" component={CarritoCompras} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
;
