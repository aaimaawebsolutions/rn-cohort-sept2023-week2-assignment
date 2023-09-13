import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-ico-material-design";

var iconHeight = 26;
var iconWidth = 26;

export default class App extends React.Component {
  state = {
    screenText: "Press a Button!",
  };

  changeText = (text) => {
    console.log(text + "has been pressed");
    this.setState({
      screenText: text,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 30, color: "black" }}>
            {this.state.screenText}
          </Text>
          {/* <Icon name="add-plus-button" height="40" width="40" /> */}
          <StatusBar style="auto" />
        </View>
        <View style={styles.Navcontainer}>
          <View style={styles.NavBar}>
            <Pressable
              onPress={() => this.changeText("ALARM ")}
              style={styles.IconDesign}
              //   android_ripple={{ borderless: true, radius: 50 }}
            >
              <Icon name="add-alarm-button" group="material-design" />
            </Pressable>
            <Pressable
              onPress={() => this.changeText("EMAIL")}
              style={styles.IconDesign}
              //   android_ripple={{ borderless: true, radius: 50 }}
            >
              <Icon name="email-inbox" group="material-design" />
            </Pressable>
            <Pressable
              onPress={() => this.changeText("USER")}
              style={styles.IconDesign}
              //   android_ripple={{ borderless: true, radius: 50 }}
            >
              <Icon name="add-user-button" group="material-design" />
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffebcd",
    alignItems: "center",
    justifyContent: "center",
  },
  Navcontainer: {
    position: "absolute",
    alignItems: "center",
    bottom: 20,
  },
  NavBar: {
    flexDirection: "row",
    backgroundColor: "#ffa500",
    width: "90%",
    justifyContent: "space-evenly",
    borderRadius: 40,
  },
  IconDesign: {
    padding: 25,
  },
});
