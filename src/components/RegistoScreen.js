import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const RegistroScreen = () => {
    const [datosRegistro, setDatosRegistro] = useState({
        ci: '',
        nombre: '',
        apellido: '',
        correo: '',
        celular: '',
        direccion: '',
        nombreUsuario: '',
        contrasena: '',
    });

    const handleInputChange = (campo, valor) => {
        setDatosRegistro({
            ...datosRegistro,
            [campo]: valor,
        });
    };

    //Obtenemos el objeto de navegación
    const navigation = useNavigation(); 
    
    const handleSubmit = () => {
        // Aquí puedes realizar la lógica para almacenar los datos en un servidor o en local storage
        // Por ahora, solo mostramos los datos en una alerta

        navigation.navigate('InicioSesion');

        Alert.alert('Datos Registrados', JSON.stringify(datosRegistro));
    };

    return (
        <View style={styles.container}>
            <Text>Formulario de Registro</Text>
            <TextInput
                style={styles.input}
                placeholder="CI"
                value={datosRegistro.ci}
                onChangeText={(text) => handleInputChange('ci', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={datosRegistro.nombre}
                onChangeText={(text) => handleInputChange('nombre', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Apellido"
                value={datosRegistro.apellido}
                onChangeText={(text) => handleInputChange('apellido', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Correo"
                value={datosRegistro.correo}
                onChangeText={(text) => handleInputChange('correo', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Celular"
                value={datosRegistro.celular}
                onChangeText={(text) => handleInputChange('celular', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Dirección"
                value={datosRegistro.direccion}
                onChangeText={(text) => handleInputChange('direccion', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Nombre de Usuario"
                value={datosRegistro.nombreUsuario}
                onChangeText={(text) => handleInputChange('nombreUsuario', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                value={datosRegistro.contrasena}
                onChangeText={(text) => handleInputChange('contrasena', text)}
            />
            <Button title="Registrar" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        width: '80%',
    },
});

export default RegistroScreen;