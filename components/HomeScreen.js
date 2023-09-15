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
import HeaderAction from "./Header_Navigation/HeaderAction";
import ProfilePage from "./ProfilePage";
import { ScrollView } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

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

  const everest = {
    title_head: "Mt. Everest",
    title: "Mount Everest: The Roof of the World",
    imageUrl:
      "http://shadedrelief.com/Everest-3D-Map/Everest-3D-Map-No-Type.jpg",
    description:
      'Mount Everest is the tallest mountain on Earth, standing at 8,848 meters (29,032 feet) above sea level. It is located in the Mahalangur Himal sub-range of the Himalayas, on the border between Nepal and China. Everest is a sacred mountain to the Sherpas, who have lived in the region for centuries. They call it Chomolungma, which means "Mother Goddess of the World."',
  };
  const kilimanjaro = {
    title_head: "Mount Kilimanjaro",
    title: "Mount Kilimanjaro: The Roof of Africa",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Mt._Kilimanjaro_12.2006.JPG",
    description:
      "Mount Kilimanjaro is the tallest mountain in Africa, standing at 5,895 meters (19,341 feet) above sea level. It is located in the Kilimanjaro National Park, in the northeastern part of Tanzania.Kilimanjaro is a dormant volcano, and its three volcanic cones are Kibo, Mawenzi, and Shira. Kibo is the highest peak, and it is also the most popular for climbing.",
  };
  const openProfile = () => {
    navigation.navigate("ProfilePage");
  };
  const handleAddMountain = () => {
    if (
      mountainData.title_head &&
      mountainData.title &&
      mountainData.imageUrl &&
      mountainData.description
    ) {
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
          backgroundColor: Customtheme.colors.background,
        }}
      >
        <View>
          <Appbar.Header style={{ backgroundColor: "#c4b5fd" }}>
            <Appbar.Action icon="menu" onPress={() => {}} />
            <Appbar.Content title={<HeaderTitle title="Mountains" />} />
            <HeaderAction icon="account" onPress={openProfile} />
            <Appbar.Action icon="plus" onPress={showModal} />
          </Appbar.Header>
          {mountains.map((mountain, index) => (
            <CardComponent
              style={{ margin: 10 }}
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
