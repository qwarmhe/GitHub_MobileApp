import React from "react";
import {
    View,Button,Text,StyleSheet
} from "react-native";

const CreatedScreen=()=>{
    return(
        <View style={styles.container}>
            <Text>CreatedScreen</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });





export default CreatedScreen;