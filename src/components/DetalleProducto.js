import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetallesProductoScreen = ({ navigation }) => {
    const producto = {
        nombre: 'Producto de ejemplo',
        precio: 50, // Precio de ejemplo
    };

    return (
        <View style={styles.container}>
            <Text>Detalles del Producto</Text>
            <Text>Nombre: {producto.nombre}</Text>
            <Text>Precio: {producto.precio}</Text>

            <Button
                title="Agregar al Carrito"
                onPress={() => navigation.navigate('Carrito', { producto })}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DetallesProductoScreen;