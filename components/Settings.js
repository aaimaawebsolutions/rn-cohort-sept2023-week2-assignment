import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import FeatherIcon from "react-native-vector-icons/Feather";
import { Switch } from "react-native-paper";
import Profile from "./Profile";

const SECTIONS = [
  {
    header: "Preferences",
    items: [
      { id: "language", icon: "globe", label: "Language", type: "select" },
      { id: "darkmode", icon: "moon", label: "Dark Mode", type: "toggle" },
      { id: "wifi", icon: "wifi", label: "Use Wifi", type: "toggle" },
    ],
  },
  {
    header: "Help",
    items: [
      { id: "bug", icon: "flag", label: "Report Bug", type: "link" },
      { id: "contact", icon: "mail", label: "Contact Us", type: "link" },
    ],
  },
  {
    header: "Content",
    items: [
      { id: "save", icon: "save", label: "Saved", type: "link" },
      { id: "download", icon: "download", label: "Downloads", type: "link" },
    ],
  },
];

const Settings = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Profile />
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>
          <Text style={styles.subtitle}>Update your Preferences Here</Text>
        </View>
        {SECTIONS.map((content, index) => (
          <View style={styles.section} key={content.header}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{content.header}</Text>
            </View>
            <View style={styles.sectionBody}>
              {content.items.map(({ label, id, type, icon }) => (
                <View
                  style={[
                    styles.rowWrapper,
                    index === 0 && { borderTopWidth: 0 },
                  ]}
                  key={id}
                >
                  <TouchableOpacity
                    onPress={() => {
                      //handles OnPress
                    }}
                  >
                    <View style={styles.row}>
                      <FeatherIcon
                        name={icon}
                        size={22}
                        style={{ marginRight: 12 }}
                      />
                      <Text style={styles.rowLabel}>{label}</Text>

                      <Switch
                        style={styles.switchActions}
                        value={isSwitchOn}
                        onValueChange={onToggleSwitch}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
  },
  header: {
    paddingHorizontal: 24,
    marginBottom: 12,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
  },
  section: {
    paddingTop: 12,
  },
  sectionHeader: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  rowWrapper: {
    paddingLeft: 24,
    borderTopWidth: 1,
    borderColor: "#e3e3e3",
    backgroundColor: "#fff",
  },
  row: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: 24,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: "400",
  },
  switchActions: {
    marginLeft: 200,
  },
});
