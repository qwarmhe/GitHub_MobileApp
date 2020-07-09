import React from "react";
import {
    View,Button,Text,StyleSheet
} from "react-native";

const RequestedScreen=()=>{
    return(
        <View style={styles.container}>
            <Text>RequestedScreen</Text>
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





export default RequestedScreen;