import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RepositorioList from './src/components/Producto/RepositorioList';
import CarritoCompras from './src/components/CarritoCompras';
import RepositorioItem from './src/components/Producto/RepositorioItem';
import DetalleProductoScreen from './src/components/DetalleProductoScreen';
import HomeScreen from './src/components/HomeScreen';
import InicioSesion from './src/components/InicioSesionScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='InicioSesion' component={InicioSesion}/>
        <Stack.Screen name='Productos' component={RepositorioList} />
        <Stack.Screen name="DetalleProducto" component={DetalleProductoScreen} />
        <Stack.Screen name="Carrito" component={CarritoCompras} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
;
