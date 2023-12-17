import React from "react";
import Constants from 'expo-constants';
import { Switch, Text, View } from "react-native";
import RepositorioList from "./RepositorioList";
import Home from "./Home";
import AppBar from "./AppBar";
import CarritoCompras from "./CarritoCompras";

const Main = () => {
    return (
        <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
            {/* <AppBar></AppBar>
            <RepositorioList></RepositorioList> */}
            <CarritoCompras></CarritoCompras>
        </View>
    )
}

export default Main