import * as React from "react";

import { useColorScheme } from "react-native";
import "react-native-gesture-handler";

import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

import Navigator from "./navigation/Navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    ...DefaultTheme.colors,
    // Specify custom property in nested object
    colors: {
      myOwnColor: "#663399",
    },
  };
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <Navigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
