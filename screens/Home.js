import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Card, Text } from "react-native-paper";

const Home = () => {
  return (
    <>
      <View style={styles.mainContainer}>
        <Button mode="contained-tonal">Custom Button</Button>
        <Button mode="elevated">Custom Button</Button>

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
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
