import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { TextInput, Button } from "react-native-paper";
const Signup = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Signup</Text>
      <TextInput
        mode="outlined"
        label="First Name"
        placeholder="Enter your first name"
        style={styles.inputText}
      />
      <TextInput
        mode="outlined"
        label="Last Name"
        placeholder="Enter your last name"
        style={styles.inputText}
      />
      <TextInput
        mode="outlined"
        label="Email"
        placeholder="Enter your email"
        style={styles.inputText}
      />
      <TextInput
        mode="outlined"
        label="Mobile Number"
        placeholder="Enter your mobile number"
        style={styles.inputText}
      />
      <Button
        mode="contained-tonal"
        onPress={() => navigation.navigate("Signup")}
      >
        Signup
      </Button>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Already have an account.</Text>
        <Button mode="text" onPress={() => navigation.navigate("Signup")}>
          Login
        </Button>
      </View>
    </View>
  );
};

export default Signup;

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
