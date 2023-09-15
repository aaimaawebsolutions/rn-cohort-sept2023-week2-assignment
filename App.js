import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomNavigationBar from "./components/BottomNavigation";
import HomeScreen from "./components/HomeScreen";
import Settings from "./components/Settings";
import { NavigationContainer } from "@react-navigation/native"; // Import NavigationContainer
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Import TabNavigator
import ProfilePage from "./components/ProfilePage"; // Import your ProfilePage component
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function App() {
  const [selectedTab, setSelectedTab] = useState("");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />

        {selectedTab === "Home" && <HomeScreen />}

        {selectedTab === "Settings" && <Settings />}

        <BottomNavigationBar
          style={styles.navigator}
          selectedTab={selectedTab}
          onTabChange={handleTabChange}
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    zIndex: 0,
  },
  navigator: {
    zIndex: 1000,
  },
});
