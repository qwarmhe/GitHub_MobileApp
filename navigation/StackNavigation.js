import React from "react";
import {
    View,Button,Text,StyleSheet
} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import RepositoriesScreen from "../screens/MyWorkScreens/RepositoriesScreen";
import OrganizationScreen from "..screens/MyWorkScreens/OrganizationScreen";
import FavoritesScreen from "../screens/MyWorkScreens/FavoritesScreen";
import ChooseRepository from "../screens/MyWorkScreens/ChooseRepository";
import Issues from "../screens/MyWorkScreens/Issues";
import TopNavigation from "./TopNavigation";

const Stack=createStackNavigator();


const StackNavigation=({navigation}) =>{
    return(
        <Stack.Navigator>

        <Stack.Screen
        name="Repositories"
        component={RepositoriesScreen}
        />

        <Stack.Screen
        name="Organizations"
        component={OrganizationScreen}
        />

        <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        />

        <Stack.Screen
        name="ChooseRepo"
        component={ChooseRepository}
        />

        <Stack.Screen
        name="Issues"
        component={Issues}
        />

        

        </Stack.Navigator>
       
    )
}

const styles=StyleSheet.create({
    container:{

    }
});


export default StackNavigation;