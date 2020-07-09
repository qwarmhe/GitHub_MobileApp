import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
} from "react-native";

const PullRequestScreen=()=>{
    return(
        <View style={styles.container}>
            <Text>PullRequestScreen</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    }
});

export default PullRequestScreen;