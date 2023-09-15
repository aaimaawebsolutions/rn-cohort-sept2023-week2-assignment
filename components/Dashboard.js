import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import {
  DarkTheme,
  NavigationContainer,
  useTheme,
} from "@react-navigation/native";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

// const { colors } = useTheme();

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.cardBox}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
          // style={{ color: color.text }}
        />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover
          source={{ uri: "https://picsum.photos/700" }}
          style={styles.img}
        />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>

      <Card style={styles.cardBox}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover
          source={{ uri: "https://picsum.photos/700" }}
          style={styles.img}
        />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>

      <Card style={styles.cardBox}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover
          source={{ uri: "https://picsum.photos/700" }}
          style={styles.img}
        />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>

      <Card style={styles.cardBox}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover
          source={{ uri: "https://picsum.photos/700" }}
          style={styles.img}
        />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardBox: {
    margin: 10,
  },
  img: {
    padding: 10,
  },
});
