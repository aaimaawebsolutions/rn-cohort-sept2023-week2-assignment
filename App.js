import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CommonActions } from '@react-navigation/native';
import { BottomNavigation } from 'react-native-paper';
import Home from './screens/home';
import DrawerScreen from './screens/drawer';
import Other from './screens/other';
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Login from './screens/login';
import SignUp from './screens/signUp';
import Drawerscreen2 from './screens/drawer2';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

function MyTopTabs() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="login" component={Login} />
      <TopTab.Screen name="signUp" component={SignUp} />
    </TopTab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Drawer1" component={DrawerScreen} options={{title: 'Products Catalog', headerShown: false}}/>
      <Drawer.Screen name="Drawer2" component={Drawerscreen2} options={{title: 'User Profile', headerShown: false}}/>
    </Drawer.Navigator>
  );
}

function Mytabs() {
  return (
      <Tab.Navigator initialRouteName='Home'
        screenOptions={{
          headerShown: false,
        }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({ route, focused, color }) => {
              const { options } = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 });
              }

              return null;
            }}
            getLabelText={({ route }) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                    ? options.title
                    : route.title;

              return label;
            }}
          />
        )}
      >
        <Tab.Screen name="Home" component={MyTopTabs}
          options={{
            headerShown: true,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => {
              return <Entypo name="home" size={24} color="black" />;
            },
          }}
        />
        <Tab.Screen name="Drawer" component={MyDrawer}
          options={{
            tabBarLabel: 'Drawer',
            tabBarIcon: ({ color, size }) => {
              return <SimpleLineIcons name="drawer" size={24} color="black" />;
            },
          }}
        />
        <Tab.Screen name="Other" component={Other}
          options={{
            tabBarLabel: 'Other',
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome5 name="box-open" size={24} color="black" />;
            },
          }}
        />
      </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="home" component={Mytabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}