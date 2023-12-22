import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/base";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const HomeScreen = () =>{
  
  //Obtenemos el objeto de navegación
  const navigation = useNavigation();

  const iniciarSesion = () =>{
    navigation.navigate('InicioSesion');
  };

    return(
        <View>
            <Text style={flattenStyle}>CeluQuito</Text>
            <Image style={styles.portada} source={{uri: 'https://th.bing.com/th/id/OIP.vNd3X8ldrU2xXqZwL6I3dQHaD4?rs=1&pid=ImgDetMain'}}></Image>
            <Button title="Iniciar Sesión" onPress={iniciarSesion} buttonStyle={styles.boton}></Button>
        </View>
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      header: {
        color: '#000000',
        fontSize: 30,
        marginTop: 10,
        marginBottom: 10,
      },
      portada: {
        width: 395,
        height: 210,
      },
      encabezado:{
        backgroundColor: '#f5f5f5',
      },
      boton: {
        backgroundColor: '#4c5155',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30,
    }
})

const flattenStyle = StyleSheet.create([styles.text, styles.header])