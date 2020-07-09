import React from "react";
import {
    View,Button,Text,StyleSheet
} from "react-native";

const ChooseRepository=()=>{
    return(
        <View style={styles.container}>
            <Text>ChooseRepository</Text>
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





export default ChooseRepository;