import { Tabs } from "expo-router";
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function TabsLayout() {
    return(
        <Tabs  screenOptions={{headerShown : false}}>
            <Tabs.Screen
                name="Stories"
                options={{tabBarLabel:"Stories", title:"Stories", tabBarIcon: () => <Entypo name="home" size={24} color="black" /> }}
            />
            <Tabs.Screen
                name="Characters"
                options={{tabBarLabel:"Characters",title:"Characters", tabBarIcon: () => <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />}}
            />
             <Tabs.Screen
                name="Settings"
                options={{tabBarLabel:"Settings",title:"Settings", tabBarIcon: () => <MaterialCommunityIcons name="ship-wheel" size={24} color="black" />}}
            />
        </Tabs>
    )
}