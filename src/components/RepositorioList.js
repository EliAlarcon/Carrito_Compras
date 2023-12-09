import React from "react";
import { View, Text, FlatList } from "react-native";
import repositorio from "../data/repositorio.js";

const RepositorioList = () => {
    return (
        <FlatList data={repositorio}
        ItemSeparatorComponent={() => <Text></Text>}
            renderItem={({
                item: repo}) => (
                    <View key={repo.id}>
                        <Text style={{fontWeight: "bold", marginBottom: 5}}>Marca: {repo.marca}</Text>
                        <Text>Modelo: {repo.modelo}</Text>
                        <Text>Año lanzamiento: {repo.lanzamiento}</Text>
                    </View>
                )
            }>
        </FlatList>
    )
}

/* const RepositorioList = () => {
    return (
        <View>
            {repositorio.map(repo => (
                <View key={repo.id}>
                    <Text>Marca: {repo.marca}</Text>
                    <Text>Modelo: {repo.modelo}</Text>
                    <Text>Año lanzamiento: {repo.lanzamiento}</Text>
                </View>
            ))}
        </View>
    )
} */

export default RepositorioList