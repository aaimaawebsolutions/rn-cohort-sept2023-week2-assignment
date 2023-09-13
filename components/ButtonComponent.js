import * as React from "react";
import { Button } from "react-native-paper";
import { Text, StyleSheet } from "react-native";

const ButtonComponent = () => (
  <Button
    default
    mode="contained"
    onPress={() => console.log("Pressed")}
    buttonColor="#60a5fa"
    uppercase={true}
    style={styles.button}
  >
    <Text style={styles.buttonText}>Sign In</Text>
  </Button>
);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
export default ButtonComponent;
