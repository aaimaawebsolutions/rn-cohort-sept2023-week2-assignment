import React, { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native"; // Import Text component
import { TextInput, Button, Snackbar } from "react-native-paper";
import ButtonComponent from "./ButtonComponent";
import { Text } from "react-native-paper";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleSignUp = () => {
    setSnackbarVisible(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.content}>
        <Text variant="headlineLarge" style={styles.text}>
          Sign Up
        </Text>
        <TextInput
          mode="outlined"
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
        <ButtonComponent />
      </View>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        <Text>Sign-up successful! Redirecting...</Text>
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f5f3ff",
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  input: {
    marginBottom: 16,
    width: "100%",
    backgroundColor: "#ddd6fe",
  },
  button: {
    marginTop: 16,
  },
  text: {
    textAlign: "center",
    marginBottom: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#6d28d9",
  },
});

export default SignUpForm;
