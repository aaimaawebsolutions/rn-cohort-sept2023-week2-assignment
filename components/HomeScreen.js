import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
import ImageModal from "./ImageModal";

const HomeScreen = ({ navigation }) => {
  const Customtheme = {
    ...DefaultTheme,
    roundness: 0,
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const [isImageModalVisible, setImageModalVisible] = useState(false);
  const [mountainData, setMountainData] = useState({
    title_head: "",
    title: "",
    imageUrl: "",
    description: "",
  });

  const [mountains, setMountains] = useState([]); // Initialize mountains as an empty array

  const [selectedMountainIndex, setSelectedMountainIndex] = useState(null);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const openProfile = () => {
    navigation.navigate("ProfilePage");
  };
  useEffect(() => {
    loadMountainData();
  }, []);

  const loadMountainData = async () => {
    try {
      const storedMountains = await AsyncStorage.getItem("mountains");

      if (storedMountains) {
        setMountains(JSON.parse(storedMountains));
      }
    } catch (error) {
      console.error("Error loading mountain data: ", error);
    }
  };

  const saveMountainData = async (data) => {
    try {
      await AsyncStorage.setItem("mountains", JSON.stringify(data));
    } catch (error) {
      console.error("Error saving mountain data: ", error);
    }
  };

  const updateMountainData = (field, value) => {
    setMountainData({ ...mountainData, [field]: value });
  };

  const handleAddMountain = () => {
    if (
      mountainData.title_head &&
      mountainData.title &&
      mountainData.imageUrl &&
      mountainData.description
    ) {
      if (selectedMountainIndex === null) {
        const updatedMountains = [...mountains, mountainData];
        setMountains(updatedMountains);
        saveMountainData(updatedMountains);
      } else {
        const updatedMountains = [...mountains];
        updatedMountains[selectedMountainIndex] = mountainData;
        setMountains(updatedMountains);
        setSelectedMountainIndex(null);
        saveMountainData(updatedMountains);
      }

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

  const handleEditMountain = (index) => {
    const selected = mountains[index];
    setMountainData(selected);
    setSelectedMountainIndex(index);
    showModal();
  };

  const handleImageClick = (index) => {
    setSelectedMountainIndex(index);
    setImageModalVisible(true);
  };

  return (
    <PaperProvider>
      <ScrollView
        style={{
          backgroundColor: Customtheme.colors.background,
        }}
      >
        <View>
          <Appbar.Header style={{ backgroundColor: "#ede9fe" }}>
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
              onEdit={() => handleEditMountain(index)}
              onImageClick={() => handleImageClick(index)}
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
              <Text variant="headlineSmall">
                {selectedMountainIndex === null
                  ? "Add a Mountain"
                  : "Edit Mountain"}
              </Text>
              <TextInput
                style={{ marginTop: 10 }}
                label="Title Head"
                value={mountainData.title_head}
                onChangeText={(text) => updateMountainData("title_head", text)}
              />
              <TextInput
                style={{ marginTop: 10 }}
                label="Title"
                value={mountainData.title}
                onChangeText={(text) => updateMountainData("title", text)}
              />
              <TextInput
                style={{ marginTop: 10 }}
                label="Image URL"
                value={mountainData.imageUrl}
                onChangeText={(text) => updateMountainData("imageUrl", text)}
              />
              <TextInput
                style={{ marginTop: 10 }}
                label="Description"
                value={mountainData.description}
                onChangeText={(text) => updateMountainData("description", text)}
              />
              <Button
                style={{ marginTop: 10 }}
                mode="contained"
                onPress={handleAddMountain}
              >
                {selectedMountainIndex === null
                  ? "Add Mountain"
                  : "Save Changes"}
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

        <ImageModal
          title={
            selectedMountainIndex !== null
              ? mountains[selectedMountainIndex].title
              : ""
          }
          description={
            selectedMountainIndex !== null
              ? mountains[selectedMountainIndex].description
              : ""
          }
          imageUrl={
            selectedMountainIndex !== null
              ? mountains[selectedMountainIndex].imageUrl
              : ""
          }
          visible={isImageModalVisible}
          onClose={() => setImageModalVisible(false)}
          onEdit={() => handleEditMountain(selectedMountainIndex)}
        />
      </ScrollView>
    </PaperProvider>
  );
};

export default HomeScreen;
