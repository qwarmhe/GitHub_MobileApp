import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
} from "react-native";

const OrganizationScreen=()=>{
    return(
        <View style={styles.container}>
            <Text>OrganizationScreen</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    }
});

export default OrganizationScreen;