import React from "react";
import theme from "./theme";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import styles from "./StyleAppBar";
import { Header } from "@rneui/base";

const AppBar = (props) => {

    return (
        <SafeAreaProvider>
    <HeaderRNE
      leftComponent={{
        icon: 'menu',
        color: '#fff',
      }}
      rightComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={docsNavigate}>
              <Icon name="description" color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={playgroundNavigate}
            >
              <Icon type="antdesign" name="rocket1" color="white" />
            </TouchableOpacity>
          </View>
      }
      centerComponent={{ text: 'Header', style: styles.heading }}
    />
  </SafeAreaProvider>
        {/* <View style={styles.container}>
            <TouchableOpacity>
                <EstiloTexto fontWeight='bold' style={styles.text}>
                    Catálogo Celulares
                </EstiloTexto>
            </TouchableOpacity>
            <TouchableOpacity>
                <EstiloTexto fontWeight='bold' style={styles.text}>
                    Home
                </EstiloTexto>
            </TouchableOpacity>
            <TouchableOpacity>
                <EstiloTexto fontWeight='bold' style={styles.text}>
                    Login
                </EstiloTexto>
            </TouchableOpacity>
        </View> */}
        <Header />
    )
}



export default AppBar