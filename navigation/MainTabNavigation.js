import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons,SimpleLineIcons,Entypo} from "@expo/vector-icons";
import {StyleSheet} from "react-native";
import ExploreScreen from "../screens/MainScreens/ExploreScreen";
import HomeScreen from "../screens/MainScreens/HomeScreen";
import NotificationScreen from "../screens/MainScreens/NotificationScreen";
import FavoritesScreen from "../screens/MyWorkScreens/FavoritesScreen";
import Issues from "../screens/MyWorkScreens/Issues";
import OrganizationScreen from "../screens/MyWorkScreens/OrganizationScreen";
import RepositoriesScreen from "../screens/MyWorkScreens/RepositoriesScreen";
import PullRequestScreen from "../screens/MyWorkScreens/PullRequestScreen";
import AssignedScreen from "../screens/SubScreens/AssignedScreen";
import TopNavigation from "./TopNavigation";
import NextTopNavigation from "./NextTopNavigation";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();


const HomeStack=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:true}} >
            <Stack.Screen name="Home" component={HomeScreen} options={{}}  />
            <Stack.Screen name="Issues" component={Issues} options={{}}  />
            <Stack.Screen name="PullRequest" component={PullRequestScreen} options={{}}  />
            <Stack.Screen name="Repositories" component={RepositoriesScreen} options={{}}  />
            <Stack.Screen name="Organizations" component={OrganizationScreen} options={{}}  />
            <Stack.Screen name="Favorites" component={FavoritesScreen} options={{}} />           
            <Stack.Screen name="Assigned" component={TopNavigation} options={{
                headerTitle:"Issues"
            }} />    
            <Stack.Screen name="Requested" component={NextTopNavigation} options={{
                headerTitle:"Pull Requests" 
            }}       />
            
        </Stack.Navigator>
    )
}

const NotificationStack=()=>{
    return(
    <Stack.Navigator screenOptions={{headerShown:true}}  >
        <Stack.Screen name="Notifications" component={NotificationScreen} options={{}}  />
    </Stack.Navigator>
    )
}

const ExploreStack =() =>{
    return(
        <Stack.Navigator screenOptions={{headerShown:true}}  >
            <Stack.Screen name="Explore" component={ExploreScreen} options={{}} />
        </Stack.Navigator>
    )
}

const MainTabNavigation = ({navigation}) =>{
    return(
        <BottomTab.Navigator
        tabBarOptions={{
            activeTintColor:'#3396FF',
            inactiveTintColor:'black',
            tabStyle:{backgroundColor:'white'}            
        }}
        style={styles.container}
        >
            <BottomTab.Screen
            name="Home"
            component={HomeStack}
            options={{
                tabBarIcon:({focused})=>(
                    <Ionicons
                    focused={focused}
                    name="md-home"
                    size={26}
                    color="black"
                    />
                )
            }}
            />
            <BottomTab.Screen
            name="Notification"
            component={NotificationStack}
            options={{
                tabBarIcon:({focused})=>(
                    <SimpleLineIcons
                    focused={focused}
                    name="bell"
                    size={26}
                    />
                )
            }}
            />
            <BottomTab.Screen
            name="Explore"
            component={ExploreStack}
            options={{
                tabBarIcon:({focused})=>(
                    <Entypo
                    focused={focused}
                    name="magnifying-glass"
                    size={26}
                    color="black"
                    />
                  
                )
            }}
            />



        </BottomTab.Navigator>
    )
          
}

const styles=StyleSheet.create({
    container:{
        paddingBottom:50
    }
})

export default MainTabNavigation;