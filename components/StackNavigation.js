import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen"; // Import your HomeScreen component
import ProfilePage from "./ProfilePage";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
