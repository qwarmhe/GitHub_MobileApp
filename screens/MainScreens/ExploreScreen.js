import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
} from "react-native";

const ExploreScreen=()=>{
    return(
        <View style={styles.container}>
            <Text>ExploreScreen</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    }
});

export default ExploreScreen;