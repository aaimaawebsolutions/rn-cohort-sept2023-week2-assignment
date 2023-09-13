import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ButtonComponent from "./components/ButtonComponent";
import SignUpForm from "./components/SignUpForm";
import CardComponent from "./components/Card";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* <SignUpForm /> */}

        <StatusBar style="auto" />
        <CardComponent />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
