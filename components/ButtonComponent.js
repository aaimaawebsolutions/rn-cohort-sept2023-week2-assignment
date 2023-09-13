import * as React from "react";
import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const ButtonComponent = () => (
  <Button
    mode="outlined"
    onPress={() => console.log("Pressed")}
    uppercase={true}
    buttonColor="#a78bfa"
    style={styles.button}
  >
    <Text variant="titleMedium" style={styles.buttonText}>
      Sign In
    </Text>
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
  },
});
export default ButtonComponent;
