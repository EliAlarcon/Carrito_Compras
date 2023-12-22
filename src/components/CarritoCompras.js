import { Card, PricingCard } from '@rneui/base';
import { CardBase } from '@rneui/base/dist/Card/Card';
import { CardImage } from '@rneui/base/dist/Card/Card.Image';
import { CardTitle } from '@rneui/base/dist/Card/Card.Title';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CarritoCompras = ({ route }) => {
    const [subtotal, setSubtotal] = useState(0);
    const [iva, setIVA] = useState(0);
    const [total, setTotal] = useState(0);

    const { carrito } = route.params; // Recibe el producto seleccionado

    // Calcula el subtotal, IVA y total
    const calcularTotales = () => {
        const precio = carrito.precio || 0;
        const ivaPorcentaje = 0.12; // 12% de IVA
        const ivaCalculado = precio * ivaPorcentaje;
        const subtotalCalculado = precio;
        const totalCalculado = subtotalCalculado + ivaCalculado;

        setSubtotal(subtotalCalculado.toFixed(2));
        setIVA(ivaCalculado.toFixed(2));
        setTotal(totalCalculado.toFixed(2));
    };

    return (
        <View>
            <View key={carrito.id} style={styles.container}>
                <View>
                    <CardImage source={{ uri: carrito.imagen_url }} style={styles.imagen} />
                </View>
                <View>
                    <CardTitle fontSize='subheading' fontWeight='bold'>{carrito.marca} {carrito.modelo}</CardTitle>
                    <Text>Pantalla tipo: {carrito.pantalla.tipo}</Text>
                    <Text>Resolución cámara: {carrito.camara_principal.resolucion}</Text>
                    <Text>Bateria: {carrito.bateria}</Text>
                    <Text>Almacenamiento: {carrito.almacenamiento}GB</Text>
                    <Text>Precio: {carrito.precio}</Text>
                </View>
            </View>
            <CardBase>
                <View style={styles.containerTotales}>
                    <View style={styles.buttonContainer}>
                        <Button title="Calcular Total" onPress={calcularTotales} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text>Subtotal: {subtotal}</Text>
                        <Text>IVA (12%): {iva}</Text>
                        <Text style={styles.totalText}>Total a Pagar: {total}</Text>
                    </View>
                </View>
            </CardBase>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        paddingBottom: 3,
        paddingTop: 5,
        alignItems: "center",
        flexWrap: "wrap",
    },
    imagen: {
        width: 150,
        height: 180,
        marginRight: 8
    },
    boton: {
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30,
    },
    containerTotales: {
        justifyContent: 'center', // Para centrar horizontalmente
        alignItems: 'center', // Para centrar verticalmente
      },
      buttonContainer: {
        marginRight: 10, // Espacio entre el botón y los textos
      },
      textContainer: {
        alignItems: 'center', // Para centrar los textos en el eje horizontal
      },
      totalText: {
        fontWeight: 'bold',
        fontSize: 15,
      },
});

export default CarritoCompras;
