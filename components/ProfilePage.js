import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image
          size={100}
          //   source={} // Replace with the actual path to the user's avatar image
        />
        <View style={styles.userInfo}>
          <Text>User Name</Text>
          <Text>user.username@example.com</Text>
        </View>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <Text>Posts</Text>
          <Text>100</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text>Followers</Text>
          <Text>1M</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text>Following</Text>
          <Text>100</Text>
        </Card.Content>
      </Card>

      <Button mode="contained" style={styles.editProfileButton}>
        <Text>Edit Profile</Text>
      </Button>

      {/* Additional user content, such as photos or posts, can be displayed here */}
    </View>
  );
};

export default ProfilePage;
