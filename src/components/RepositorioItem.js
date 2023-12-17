import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import EstiloTexto from './EstiloTexto.js'

const RepositorioItem = (props) => (
    <View key={props.id} style={styles.container}>
        {props.imagen_url && (
            <View>
                <Image source={{ uri: props.imagen_url }} style={styles.imagen} />
            </View>
        )}
        <View>
            <EstiloTexto fontSize='subheading' fontWeight='bold'>Marca: {props.marca}</EstiloTexto>
            <Text>Modelo: {props.modelo}</Text>
            <Text>Año lanzamiento: {props.lanzamiento}</Text>
            <Text>Pantalla tipo: {props.pantalla.tipo}</Text>
            <Text>Tamaño de la pantalla: {props.pantalla.tamano}</Text>
            <Text>Resolución cámara: {props.camara_principal.resolucion}</Text>
            <Text>Apertura de cámara: {props.camara_principal.apertura}</Text>
            <Text>Bateria: {props.bateria}</Text>
            <Text>Almacenamiento: {props.almacenamiento}</Text>
            <Text>Precio: {props.precio}</Text>
        </View>
        <View style={styles.boton}>
            <Button title="Detalle Producto" />
        </View>
    </View>
)


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        paddingBottom: 3,
        paddingTop: 5,
        alignItems: "center",
        flexWrap: "wrap",
        borderWidth: 0.5,
        borderColor: '#a9a9a9',
        borderRadius: 20
    },
    marca: {
        fontWeight: "bold",
        marginBottom: 5
    },
    imagen: {
        width: 150,
        height: 180,
        marginRight: 8
    },
    boton: {
        color: '#000'
    }
})

export default RepositorioItem