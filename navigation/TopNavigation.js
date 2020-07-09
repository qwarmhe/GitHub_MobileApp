import React from "react";
import {
    StyleSheet,View,Button
} from "react-native";
import AssignedScreen from "../screens/SubScreens/AssignedScreen";
import {createStackNavigator} from "@react-navigation/stack";
import ChooseRepository from "../screens/SubScreens/ChooseRepository";
import CreatedScreen from "../screens/SubScreens/CreatedScreen"
import MentionedScreen from "../screens/SubScreens/MentionedScreen";
import RequestedScreen from "../screens/SubScreens/RequestedScreen";

import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

const TopTab=createMaterialTopTabNavigator();
const Stack=createStackNavigator();

const AssignedStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Assigned" component={AssignedScreen}  />
        </Stack.Navigator>
    )
}

const CreatedStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Created" component={CreatedScreen}  />
        </Stack.Navigator>
    )
}

const MentionedStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Mentioned" component={MentionedScreen}  />
        </Stack.Navigator>
    )
}



const TopNavigation=({navigation})=>{
    return(
        <TopTab.Navigator>

        <TopTab.Screen
        name="Assigned"
        component={AssignedStack}
        />

       

        <TopTab.Screen
        name="Created"
        component={CreatedStack}
        />

        <TopTab.Screen
        name="Mentioned"
        component={MentionedStack}
        />

       

        </TopTab.Navigator>
    )
}

const styles=StyleSheet.create({
    container:{

    }
});


export default TopNavigation;