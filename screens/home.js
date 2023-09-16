//import liraries
import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from './login';
import SignUp from './signUp';


const TopTab = createMaterialTopTabNavigator();

// create a component
const Home = () => {
    return (
        <>
            <TopTab.Navigator initialRouteName='login'>
                <TopTab.Screen name="login" component={Login} />
                <TopTab.Screen name="signUp" component={SignUp} />
            </TopTab.Navigator>
        </>
    );
};

//make this component available to the app
export default Home;
