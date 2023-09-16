import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View, Image  } from 'react-native';
import { Text,TextInput,Button,HelperText,PaperProvider } from 'react-native-paper';
import { Link } from "expo-router";
import { useState } from 'react';


export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('')
  const [isValid, setIsValid] = useState(false);
  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required');
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
    validateForm();
  };
  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }
    validateForm();
  };
  const validateForm = () => {
    if (email && /^\S+@\S+\.\S+$/.test(email) && password) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  const handleLogin = () => {
    validateEmail();
    validatePassword();

    if (isValid) {
      console.log('Form submitted:', email, password);
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Image
            source={{
              uri: 'https://i.pinimg.com/originals/78/a4/24/78a42479c03ea97778940ea1cea240df.jpg',
            }}
            style={{width: 350, height: 200}}
          />
        <Text style={{fontWeight: 'bold'}} variant="headlineLarge">The Mahabaratham</Text>
        <TextInput
          label="Email"
          value={email}
          mode="outlined"
          onChangeText={setEmail}
          onBlur={validateEmail}
          style={{width: 300 }}
        />
        <HelperText type="error" visible={!!emailError}>
          {emailError}
        </HelperText>

        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          onBlur={validatePassword}
          secureTextEntry
          mode="outlined"
          right={<TextInput.Icon icon="eye" />}
          style={{width: 300}}
        />
        <HelperText type="error" visible={!!passwordError}>
          {passwordError}
        </HelperText>
        {isValid && (
          <Link
            href={"/(tabs)/Stories"}
          >
            <Text>Click Here to Login</Text>
          </Link>
      )}
        <Text></Text>
        <Button mode="outlined" buttonColor="black" textColor="white" onPress={handleLogin}>Sign In</Button>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10
  },
});
