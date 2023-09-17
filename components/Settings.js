import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import {
  Appbar,
  Switch,
  List,
  Divider,
  Text,
  RadioButton,
} from "react-native-paper";

function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [language, setLanguage] = useState("English");

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: "#ede9fe" }}>
        <Appbar.Content title="Settings" />
      </Appbar.Header>
      <List.Section style={styles.section}>
        <List.Subheader style={styles.subheader}>General</List.Subheader>
        <List.Item
          title="Notifications"
          right={() => (
            <Switch
              value={notificationsEnabled}
              onValueChange={toggleNotifications}
            />
          )}
        />
        <Divider />
        <List.Item
          title="Language"
          description={language}
          onPress={() => {}}
          right={() => (
            <RadioButton.Group
              onValueChange={(value) => changeLanguage(value)}
              value={language}
            >
              <View style={styles.radioContainer}>
                <RadioButton.Item label="English" value="English" />
                <RadioButton.Item label="Spanish" value="Spanish" />
                {/* Add more languages as needed */}
              </View>
            </RadioButton.Group>
          )}
        />
        <Divider />
      </List.Section>
      <List.Section style={styles.section}>
        <List.Subheader style={styles.subheader}>Appearance</List.Subheader>
        <List.Item
          title="Dark Mode"
          right={() => (
            <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
          )}
        />
      </List.Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 10,
  },
  subheader: {
    backgroundColor: "#f5f5f5",
    fontSize: 16,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SettingsScreen;
