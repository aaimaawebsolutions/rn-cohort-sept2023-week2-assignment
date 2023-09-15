import React from "react";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native"; // Import the navigation hook

const HeaderAction = ({ icon }) => {
  const navigation = useNavigation(); // Get the navigation object

  const onPress = () => {
    navigation.navigate("ProfilePage");
  };

  return <IconButton icon={icon} onPress={onPress} />;
};

export default HeaderAction;
