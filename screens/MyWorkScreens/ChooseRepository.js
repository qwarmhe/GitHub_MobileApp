import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
} from "react-native";

const ChooseRepository=()=>{
    return(
        <View style={styles.container}>
            <Text>ChooseRepository</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    }
});

export default ChooseRepository;