import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
} from "react-native";

const NotificationScreen=()=>{
    return(
        <View style={styles.container}>
            <Text>NotificationScreen</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    }
});

export default NotificationScreen;