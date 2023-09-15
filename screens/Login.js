import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";

const Login = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Text>Login</Text>
      <TextInput
        mode="outlined"
        label="Email/Phone"
        placeholder="Enter your email/phone"
        style={styles.inputText}
      />
      <TextInput
        mode="outlined"
        label="Password"
        placeholder="Enter your password"
        style={styles.inputText}
      />
      <Button
        mode="contained-tonal"
        onPress={() => navigation.navigate("Signup")}
      >
        Login
      </Button>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Don't have any account?</Text>
        <Button mode="text" onPress={() => navigation.navigate("Signup")}>
          Create One
        </Button>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // paddingHorizontal: 30,
  },
  inputText: {
    width: Dimensions.get("screen").width * 0.8,
    marginVertical: 10,
    // marginHorizontal: 30,
  },
});
