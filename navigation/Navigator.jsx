import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import Dashboard from "../components/Dashboard";

import Help from "../components/Help";
import Profit from "../components/Profit";
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

const Navigator = () => {
  return (
    <NavigationContainer>
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
            </Drawer.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
