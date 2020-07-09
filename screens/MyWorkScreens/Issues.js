import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
} from "react-native";

const Issues=()=>{
    return(
        <View style={styles.container}>
            <Text>IssuesScreen</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    }
});

export default Issues;