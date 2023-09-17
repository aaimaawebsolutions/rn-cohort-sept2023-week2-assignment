import React from "react";
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
    roundness: 4,
    colors: {
      primary: "#ede9fe",
    },
  };

  return (
    <View style={{ backgroundColor: Customtheme.colors.background }}>
      <Card
        style={{
          margin: 10,
          alignContent: "center",
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
      >
        <Appbar.Header
          style={{
            display: "flex",
            height: 30,
            backgroundColor: Customtheme.colors.primary,
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <Appbar.Content
            style={{
              alignItems: "center",
            }}
            title={title_head}
          />
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
