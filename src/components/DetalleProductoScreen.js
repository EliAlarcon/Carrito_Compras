import { CardDivider } from '@rneui/base/dist/Card/Card.Divider';
import { CardTitle } from '@rneui/base/dist/Card/Card.Title';
import { Card } from '@rneui/themed';
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';
import { CardImage } from '@rneui/base/dist/Card/Card.Image';
import { CardBase } from '@rneui/base/dist/Card/Card';
import { useNavigation } from '@react-navigation/native';

const DetalleProductoScreen = ({ route }) => {

    const { producto } = route.params;

    //Obtenemos el objeto de navegación
    const navigation = useNavigation();

    //Función para el botón Agregar al Carrito
    const carritoCompras = () => {
        //Envíamos los datos del producto a la siguiente ventana mediante la navegación
        navigation.navigate('Carrito', { carrito: producto });
    };

    return (
        <View key={producto.id} style={styles.container}>
            <Card style={styles.container}>
                <CardTitle>{producto.marca} {producto.modelo}</CardTitle>
                <CardDivider></CardDivider>
                <CardImage source={{ uri: producto.imagen_url }} style={styles.imagen} />
                <CardBase>
                    <Text>Marca: {producto.marca}</Text>
                    <Text>Año lanzamiento: {producto.lanzamiento}</Text>
                    <Text>Pantalla tipo: {producto.pantalla.tipo}</Text>
                    <Text>Tamaño de la pantalla: {producto.pantalla.tamano}</Text>
                    <Text>Resolución cámara: {producto.camara_principal.resolucion}</Text>
                    <Text>Apertura de cámara: {producto.camara_principal.apertura}</Text>
                    <Text>Bateria: {producto.bateria}</Text>
                    <Text>Almacenamiento: {producto.almacenamiento}GB</Text>
                </CardBase>
                <Text style={styles.fonts} h4>Precio: {producto.precio}</Text>
                <Button
                    title="Agregar al Carrito"
                    onPress={carritoCompras}
                />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fonts: {
        marginBottom: 8,
        fontWeight: 'bold'
    },
    imagen: {
        width: 150,
        height: 180,
    },
});

export default DetalleProductoScreen;