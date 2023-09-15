import * as React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";
import { Text } from "react-native-paper";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import { Card } from "react-native-paper";
const CardComponent = ({ title_head, title, imageUrl, description }) => {
  const Customtheme = {
    ...DefaultTheme,
    roundness: 0,
  };
  return (
    <View
      style={{
        backgroundColor: (theme = { Customtheme }),
      }}
    >
      <Card style={{ margin: 10 }}>
        <Appbar.Header
          style={{
            display: "flex",
            height: 40,
            borderRadius: 10,
            backgroundColor: "#818cf8",
          }}
        >
          <Appbar.Content style={{ alignItems: "center" }} title={title_head} />
        </Appbar.Header>

        <Card.Cover
          style={{ marginLeft: 10, marginRight: 10, paddingTop: 10 }}
          source={{
            uri: imageUrl,
          }}
        />
        <Card.Content style={{ marginTop: 10 }}>
          <Text variant="titleLarge">{title}</Text>
          <Text style={{ marginTop: 10 }} variant="bodyMedium">
            {description}
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default CardComponent;
