import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import MainTabNavigation from "./navigation/MainTabNavigation";
import TopNavigation from "./navigation/TopNavigation";


export default function App() {
  return (
    <NavigationContainer >
      <MainTabNavigation  />
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
