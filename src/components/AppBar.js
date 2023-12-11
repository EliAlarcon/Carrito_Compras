import React from "react";
import theme from "./theme";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import EstiloTexto from "./EstiloTexto";

const AppBar = () => {
    return (
        <View style={styles.container}>
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
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: theme.appBar.primary,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    text: {
        color: theme.appBar.textPrimary,
        paddingHorizontal: 10
    }
})

export default AppBar