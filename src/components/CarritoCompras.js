import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CarritoCompras = ({ route }) => {
    const [subtotal, setSubtotal] = useState(0);
    const [iva, setIVA] = useState(0);
    const [total, setTotal] = useState(0);

    const { producto } = route.params; // Recibe el producto seleccionado

    // Calcula el subtotal, IVA y total
    const calcularTotales = () => {
        const precio = producto.precio || 0;
        const ivaPorcentaje = 0.12; // 12% de IVA
        const ivaCalculado = precio * ivaPorcentaje;
        const subtotalCalculado = precio;
        const totalCalculado = subtotalCalculado + ivaCalculado;

        setSubtotal(subtotalCalculado.toFixed(2));
        setIVA(ivaCalculado.toFixed(2));
        setTotal(totalCalculado.toFixed(2));
    };

    return (
        <View style={styles.container}>
            <Text>Producto: {producto.nombre}</Text>
            <Text>Precio: {producto.precio}</Text>

            <Button title="Calcular Totales" onPress={calcularTotales} />

            <Text>Subtotal: {subtotal}</Text>
            <Text>IVA (12%): {iva}</Text>
            <Text>Total a Pagar: {total}</Text>
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

export default CarritoCompras;
