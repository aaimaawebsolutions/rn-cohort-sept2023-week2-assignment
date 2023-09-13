import React from "react";
import { IconButton } from "react-native-paper";

const HeaderAction = ({ icon, onPress }) => {
  return <IconButton icon={icon} onPress={onPress} />;
};

export default HeaderAction;
