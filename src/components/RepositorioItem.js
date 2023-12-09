import React from "react";
import { View, Text, StyleSheet } from "react-native";
import EstiloTexto from './EstiloTexto.js'

const RepositorioItem = (props) => (
    <View key={props.id} style={styles.container}>
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
)

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingBottom: 5,
        paddingTop: 5
    },
    marca: {
        fontWeight: "bold", 
        marginBottom: 5
    }
})

export default RepositorioItem