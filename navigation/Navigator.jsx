import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DarkTheme,
  NavigationContainer,
  useTheme,
} from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, useColorScheme } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import Dashboard from "../components/Dashboard";

import Help from "../components/Help";
import Profit from "../components/Profit";
import DarkMode from "../components/DarkMode";
import Settings from "../components/Settings";
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DashboardIcon = ({ focused, color, size }) => (
  <Ionicons name="md-speedometer" size={size} color={color} />
);

const HelpdIcon = ({ focused, color, size }) => (
  <Ionicons name="md-refresh-circle" size={size} color={color} />
);
const ProfitIcon = ({ focused, color, size }) => (
  <Ionicons name="md-cart" size={size} color={color} />
);

const theme = {
  ...DefaultTheme,

  colors: {
    myOwnColor: "silver",
    background: "lightblue",
  },
};

const Navigator = () => {
  return (
    <NavigationContainer theme={useColorScheme === "dark" ? DarkTheme : theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainDashboard">
          {() => (
            <Drawer.Navigator
              screenOptions={{
                drawerStyle: {
                  backgroundColor: "rgb(220, 184, 255)",
                  width: 230,
                },
              }}
            >
              <Drawer.Screen
                name="Dashboard"
                component={Dashboard}
                options={{ drawerIcon: DashboardIcon }}
              />

              <Drawer.Screen
                name="Help"
                component={Help}
                options={{ drawerIcon: HelpdIcon }}
              />
              <Drawer.Screen
                name="Profit"
                component={Profit}
                options={{ drawerIcon: ProfitIcon }}
              />
              <Drawer.Screen
                name="Settings"
                component={Settings}
                headerShown="false"
              />
            </Drawer.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
