import React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";
import HeaderTitle from "./Header_Navigation/HeaderTitle";
import HeaderAction from "./Header_Navigation/HeaderAction";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Appbar.Header style={{ backgroundColor: "#c4b5fd" }}>
        <Appbar.Action icon="menu" onPress={() => {}} />
        <Appbar.Content title={<HeaderTitle title="Mountains" />} />
        <Appbar.Action icon="plus" onPress={() => {}} />
        {/* <Appbar.Action icon="search" onPress={() => {}} /> */}
      </Appbar.Header>
    </View>
  );
};

export default HomeScreen;
