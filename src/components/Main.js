import React from "react";
import Constants from 'expo-constants';
import { Switch, Text, View } from "react-native";
import RepositorioList from "./Producto/RepositorioList";
import Home from "./Home";
import AppBar from "./AppBar";
import CarritoCompras from "./CarritoCompras";
import RepositorioItem from "./Producto/RepositorioItem";
import DetallesProductoScreen from "./DetalleProducto";

const Main = () => {
    return (
        <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
            <RepositorioList></RepositorioList>
            {/* <CarritoCompras></CarritoCompras> */}
        </View>
    )
}

export default Main