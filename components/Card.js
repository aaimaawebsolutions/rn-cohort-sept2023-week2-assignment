import * as React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";
import { Text } from "react-native-paper";

import { Card } from "react-native-paper";

const CardComponent = () => (
  <View>
    <Appbar.Header>
      <Appbar.Content title="Mt.Everest" />
    </Appbar.Header>
    <Card>
      <Card.Cover
        style={{ marginLeft: 10, marginRight: 10 }}
        source={{
          uri: "http://shadedrelief.com/Everest-3D-Map/Everest-3D-Map-No-Type.jpg",
        }}
      />
      <Card.Content style={{ marginTop: 10 }}>
        <Text variant="titleLarge">Mount Everest: The Roof of the World</Text>
        <Text style={{ marginTop: 10 }} variant="bodyMedium">
          Mount Everest is the tallest mountain on Earth, standing at 8,848
          meters (29,032 feet) above sea level. It is located in the Mahalangur
          Himal sub-range of the Himalayas, on the border between Nepal and
          China. Everest is a sacred mountain to the Sherpas, who have lived in
          the region for centuries. They call it Chomolungma, which means
          "Mother Goddess of the World."
        </Text>
      </Card.Content>
    </Card>
  </View>
);

export default CardComponent;
