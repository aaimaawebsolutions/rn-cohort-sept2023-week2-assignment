import React, { useState } from "react";
import { View } from "react-native";
import {
  Appbar,
  Modal,
  Portal,
  Text,
  Button,
  TextInput,
} from "react-native-paper";
import HeaderTitle from "./Header_Navigation/HeaderTitle";
import CardComponent from "./Card";
import { ScrollView } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

const HomeScreen = ({}) => {
  const Customtheme = {
    ...DefaultTheme,
    roundness: 0,
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const [mountainData, setMountainData] = useState({
    title_head: "",
    title: "",
    imageUrl: "",
    description: "",
  });

  const [mountains, setMountains] = useState([]);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const handleAddMountain = () => {
    if (
      mountainData.title_head &&
      mountainData.title &&
      mountainData.imageUrl &&
      mountainData.description
    ) {
      // Add the mountain data to the list of mountains
      setMountains([...mountains, mountainData]);

      setMountainData({
        title_head: "",
        title: "",
        imageUrl: "",
        description: "",
      });
      hideModal();
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <PaperProvider>
      <ScrollView
        style={{
          backgroundColor: Customtheme.colors.background, // Use the background color from your theme
        }}
      >
        <View>
          <Appbar.Header style={{ backgroundColor: "#c4b5fd" }}>
            <Appbar.Action icon="menu" onPress={() => {}} />
            <Appbar.Content title={<HeaderTitle title="Mountains" />} />

            <Appbar.Action icon="plus" onPress={showModal} />
          </Appbar.Header>
          {mountains.map((mountain, index) => (
            <CardComponent
              key={index}
              title_head={mountain.title_head}
              title={mountain.title}
              imageUrl={mountain.imageUrl}
              description={mountain.description}
            />
          ))}
        </View>

        <Portal>
          <Modal
            visible={isModalVisible}
            onDismiss={hideModal}
            contentContainerStyle={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: "80%",
                backgroundColor: "white",
                padding: 20,
                borderRadius: 5,
              }}
            >
              <Text variant="headlineSmall">Add a Mountain</Text>
              <TextInput
                style={{ marginTop: 10 }}
                label="Title Head"
                value={mountainData.title_head}
                onChangeText={(text) =>
                  setMountainData({ ...mountainData, title_head: text })
                }
              />
              <TextInput
                style={{ marginTop: 10 }}
                label="Title"
                value={mountainData.title}
                onChangeText={(text) =>
                  setMountainData({ ...mountainData, title: text })
                }
              />
              <TextInput
                style={{ marginTop: 10 }}
                label="Image URL"
                value={mountainData.imageUrl}
                onChangeText={(text) =>
                  setMountainData({ ...mountainData, imageUrl: text })
                }
              />
              <TextInput
                style={{ marginTop: 10 }}
                label="Description"
                value={mountainData.description}
                onChangeText={(text) =>
                  setMountainData({ ...mountainData, description: text })
                }
              />
              <Button
                style={{ marginTop: 10 }}
                mode="contained"
                onPress={handleAddMountain}
              >
                Add Mountain
              </Button>
              <Button
                style={{ marginTop: 10 }}
                mode="outlined"
                onPress={hideModal}
              >
                Close
              </Button>
            </View>
          </Modal>
        </Portal>
      </ScrollView>
    </PaperProvider>
  );
};

export default HomeScreen;
