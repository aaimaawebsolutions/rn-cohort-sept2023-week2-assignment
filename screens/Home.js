import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Card, Switch, Text, useTheme } from "react-native-paper";

const Home = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(!isDarkMode)}
        />
      ),
    });
  });
  return (
    <View
      style={{
        backgroundColor: isDarkMode
          ? theme.colors.onSecondaryContainer
          : theme.colors.secondaryContainer,
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
      }}
    >
      <View>
        <Button mode={isDarkMode ? "contained-tonal" : 'contained'}>Custom Button</Button>
        <Button mode={isDarkMode? "elevated" : 'outlined'}>Custom Button</Button>

        <Text
          variant="displayMedium"
          style={{ color: "blue" }}
          theme={{ colors: { primary: "green" } }}
        >
          Adesh Nayak
        </Text>
      </View>
      <Card mode="elevated">
        <Card.Title title="Card" subtitle="Elevated Card" />
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button mode="outlined">Cancel</Button>
          <Button mode="contained">Ok</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
