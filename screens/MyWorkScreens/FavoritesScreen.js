import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
} from "react-native";

const FavoritesScreen=()=>{
    return(
        <View style={styles.container}>
            <Text>FavoritesScreen</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    }
});

export default FavoritesScreen;