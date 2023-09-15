import * as React from "react";

import { useColorScheme } from "react-native";
import "react-native-gesture-handler";

import {
  MD3LightTheme as DefaultTheme,
  MD2DarkTheme,
  PaperProvider,
} from "react-native-paper";

import Navigator from "./navigation/Navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

const theme = {
  ...DefaultTheme,

  colors: {
    myOwnColor: "dodgerblue",
    background: "lightblue",
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <Navigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
