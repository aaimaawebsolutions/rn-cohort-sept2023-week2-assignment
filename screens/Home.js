import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <Button mode="outlined">Custom Button</Button>
      <Button mode="contained">Custom Button</Button>
      <Button mode="contained-tonal">Custom Button</Button>
      <Button mode="elevated">Custom Button</Button>

      <Text
        variant="displayMedium"
        style={{ color: "blue" }}
        theme={{ colors: { primary: "green" } }}
      >
        Adesh Nayak
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
