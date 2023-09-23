import React from 'react';
import { Appbar, Avatar, IconButton } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';

const MyNavigationBar = () => {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Action
        icon="menu"
        onPress={() => {
          // Add your menu toggle logic here
        }}
      />
      <Appbar.Content
        title="My App"
        subtitle="Welcome to my app"
        style={styles.title}
      />
      <Appbar.Action
        icon="bell"
        onPress={() => {
          // Add your notification icon logic here
        }}
      />
      <Appbar.Action
        icon="dots-vertical"
        onPress={() => {
          // Add your more options icon logic here
        }}
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2196F3', // Change this to your preferred background color
  },
  title: {
    alignItems: 'center',
  },
});

export default MyNavigationBar;
