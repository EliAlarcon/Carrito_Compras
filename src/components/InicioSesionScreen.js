import { Dialog } from '@rneui/base';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const InicioSesion = ({ navigation }) => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const iniciarSesion = () => {
    // Lógica para verificar las credenciales, por ejemplo, hacer una solicitud a un servidor
    // Si las credenciales son válidas, navegar a la siguiente pantalla
    navigation.navigate('Productos');
  };

  return (
      <View style={styles.container}>
        <Text>Iniciar Sesión</Text>
        <TextInput
          placeholder="Usuario"
          value={usuario}
          onChangeText={(text) => setUsuario(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Contraseña"
          value={contrasena}
          onChangeText={(text) => setContrasena(text)}
          secureTextEntry
          style={styles.input}
        />
        <Button title="Iniciar Sesión" onPress={iniciarSesion} />
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

export default InicioSesion;