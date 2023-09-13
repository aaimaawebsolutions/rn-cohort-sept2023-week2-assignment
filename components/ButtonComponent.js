import * as React from "react";
import { Button } from "react-native-paper";
import { Text, StyleSheet } from "react-native";

const ButtonComponent = () => (
  <Button
    mode="outlined"
    onPress={() => console.log("Pressed")}
    uppercase={true}
    buttonColor="#a78bfa"
    style={styles.button}
  >
    <Text style={styles.buttonText}>Sign In</Text>
  </Button>
);

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    paddingVertical: 5,
    paddingHorizontal: 50,
    borderRadius: 7,
  },
  buttonText: {
    color: "#1e293b",
    fontSize: 18,
  },
});
export default ButtonComponent;
