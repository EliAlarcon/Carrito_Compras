import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import EstiloTexto from '../EstiloTexto.js'
import { useNavigation } from "@react-navigation/native";
import { Button, Card } from "@rneui/base";
import { CardTitle } from "@rneui/base/dist/Card/Card.Title.js";

const RepositorioItem = (props) => {

    //Obtenemos el objeto de navegación
    const navigation = useNavigation();

    //Función para el botón de Detalle Producto
    const verDetalle = () => {
        //Envíamos los datos del producto a la siguiente ventana mediante la navegación
        navigation.navigate('DetalleProducto', { producto: props });
    };

    return (
        <Card>
        <View key={props.id} style={styles.container}>
            {props.imagen_url && (
                <View>
                    <Image source={{ uri: props.imagen_url }} style={styles.imagen} />
                </View>
            )}
            <View>
                <CardTitle fontSize='subheading' fontWeight='bold'>{props.marca} {props.modelo}</CardTitle>
                <Text>Año lanzamiento: {props.lanzamiento}</Text>
                <Text>Pantalla tipo: {props.pantalla.tipo}</Text>
                <Text>Tamaño de la pantalla: {props.pantalla.tamano}</Text>
                <Text>Resolución cámara: {props.camara_principal.resolucion}</Text>
                <Text>Apertura de cámara: {props.camara_principal.apertura}</Text>
                <Text>Bateria: {props.bateria}</Text>
                <Text>Almacenamiento: {props.almacenamiento}</Text>
                <Text>Precio: {props.precio}</Text>
            </View>
            <View>
                <Button title="Detalle Producto" onPress={verDetalle} buttonStyle={styles.boton}/>
            </View>
        </View>
        </Card>
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
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30,
    }
})

export default RepositorioItem