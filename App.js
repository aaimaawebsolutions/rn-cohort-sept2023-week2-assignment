import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomNavigationBar from "./components/BottomNavigation";
import HomeScreen from "./components/HomeScreen";
import Settings from "./components/Settings";

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
