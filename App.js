import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import ButtonComponent from "./components/ButtonComponent";
import SignUpForm from "./components/SignUpForm";
import CardComponent from "./components/Card";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./components/HomeScreen";

export default function App() {
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

  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={styles.container}>
          {/* <SignUpForm /> */}

          <StatusBar style="auto" />

          <HomeScreen />
          <CardComponent
            title_head={everest.title_head}
            title={everest.title}
            imageUrl={everest.imageUrl}
            description={everest.description}
          />
          <CardComponent
            title_head={kilimanjaro.title_head}
            title={kilimanjaro.title}
            imageUrl={kilimanjaro.imageUrl}
            description={kilimanjaro.description}
          />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
