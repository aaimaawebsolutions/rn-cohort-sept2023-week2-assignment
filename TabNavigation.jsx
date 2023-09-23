
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';


const Tab = createBottomTabNavigator();

const TabNavigation=() =>{
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name ='Login' component={Login}/>
        <Tab.Screen name ='SignUp' component={SignUp}/>
        
      </Tab.Navigator>

    </NavigationContainer>
  );

}

const Login = () =>{
  return(<View >
    <Text >
      Login
    </Text>
  </View>)
}
const SignUp = () =>{
  return(<View >
    <Text >
      SignUp
    </Text>
  </View>)
}



export default TabNavigation;
