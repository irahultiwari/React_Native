import React from "react";
import { Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { Login } from "./components/login";
import { Signup } from "./components/signup";



const Tab = createMaterialTopTabNavigator();
const App =()=>{
  return(
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='login' component={Login}/>
      <Tab.Screen name='Signup' component={Signup}/>
      


    </Tab.Navigator>
  </NavigationContainer>
  )
}






export default App;