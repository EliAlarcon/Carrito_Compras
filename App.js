import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CarritoCompras from './src/components/CarritoCompras';
import DetallesProductoScreen from './src/components/DetalleProducto';
import RepositorioItem from './src/components/RepositorioItem';
import RepositorioList from './src/components/Producto/RepositorioList';
import AppBar from './src/components/AppBar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <AppBar></AppBar>
      <Stack.Navigator initialRouteName="Repositorio">
        <Stack.Screen name='Repositorio' component={RepositorioList} />
        <Stack.Screen name="DetallesProducto" component={DetallesProductoScreen} />
        <Stack.Screen name="Carrito" component={CarritoCompras} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
;
