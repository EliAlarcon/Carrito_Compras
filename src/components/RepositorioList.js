import React from "react";
import { Text, FlatList } from "react-native";
import repositorio from "../data/repositorio.js";
import RepositorioItem from "./RepositorioItem.js";

const RepositorioList = () => {
    return (
        <FlatList data={repositorio}
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem={({
                item: repo }) => (
                <RepositorioItem {...repo} />
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