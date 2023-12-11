import React from "react";
import theme from "./theme";
import { View, StyleSheet } from "react-native";
import EstiloTexto from "./EstiloTexto";

const AppBar = () => {
    return(
        <View style={styles.container}>
            <EstiloTexto fontWeight='bold' style={styles.text}>
                Catálogo Celulares
            </EstiloTexto>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    text: {
        color: theme.appBar.textPrimary
    }
})

export default AppBar