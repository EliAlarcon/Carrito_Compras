import React from "react";
import Constants from 'expo-constants';
import { Text, View } from "react-native";
import RepositorioList from "./RepositorioList";
import Home from "./Home";

const Main = () =>{
    return(
        <View style={{marginTop: Constants.statusBarHeight, flexGrow:1}}>
            {/* <Text>Rate Repository Application</Text>
            <RepositorioList></RepositorioList> */}
            <Home></Home>
        </View>
    )
}

export default Main