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
      <Appbar.Header>
        <Appbar.Content title={title_head} />
      </Appbar.Header>
      <Card>
        <Card.Cover
          style={{ marginLeft: 10, marginRight: 10 }}
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
