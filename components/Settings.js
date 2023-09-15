import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Appbar, Switch, List, Divider } from "react-native-paper";

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
    <>
      <Appbar.Header style={{ backgroundColor: "#c4b5fd" }}>
        <Appbar.Content title="Settings" />
      </Appbar.Header>
      <ScrollView>
        <List.Section>
          <List.Subheader style={{ backgroundColor: "#c7d2fe" }}>
            General
          </List.Subheader>
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
          />
          <Divider />
          <List.Subheader style={{ backgroundColor: "#c7d2fe" }}>
            Appearance
          </List.Subheader>
          <List.Item
            title="Dark Mode"
            right={() => (
              <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
            )}
          />
        </List.Section>
      </ScrollView>
    </>
  );
}

export default SettingsScreen;
