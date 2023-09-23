import React, { useState } from 'react';
import { View, Text, ScrollView, Animated, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const App = () => {
  const [scrollY] = useState(new Animated.Value(0));

  // Define the header height and collapsible threshold
  const HEADER_HEIGHT = 200;
  const COLLAPSIBLE_THRESHOLD = HEADER_HEIGHT - Appbar.height;

  // Calculate the header's translateY based on scrollY
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, COLLAPSIBLE_THRESHOLD],
    outputRange: [0, -COLLAPSIBLE_THRESHOLD],
    extrapolate: 'clamp',
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
        {/* Your header content */}
        <Appbar.Header>
          <Appbar.BackAction />
          <Appbar.Content title="Profile" />
          <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
        <Text style={styles.profileTitle}>User's Profile</Text>
        {/* Other header content */}
      </Animated.View>

      <ScrollView
        style={{ flex: 1 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* Your scrollable content */}
        {/* Add your user profile details, posts, etc. */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    elevation: 4,
    backgroundColor: '#2196F3', // Change this to your preferred header background color
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
    color: 'white', // Change this to your preferred text color
  },
});

export default App;
