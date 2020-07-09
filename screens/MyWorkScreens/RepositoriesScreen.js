import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
} from "react-native";

const RepositoriesScreen=()=>{
    return(
        <View style={styles.container}>
            <Text>RepositoriesScreen</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    }
});

export default RepositoriesScreen;