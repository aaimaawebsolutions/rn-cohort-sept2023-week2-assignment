//import liraries
import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Appbar, Avatar, Surface, Text } from 'react-native-paper';
import { useSharedValue } from 'react-native-reanimated';

// create a component
const Drawerscreen2 = ({ navigation }) => {

    const [DarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(temp => !temp);
    }

    return (
        <View style={DarkMode ? dark.container : light.container}>
            {/* <Button onPress={() => console.log(DarkMode)} title='Press'/> */}
            <Appbar.Header style={DarkMode ? dark.appbar : light.appbar}>
                <Appbar.BackAction color={DarkMode ? 'white' : 'black'} onPress={() => navigation.goBack()} />
                <Appbar.Content titleStyle={DarkMode ? dark.appbartitle : light.appbartitle} title="User Profile" />
                <Appbar.Action icon="brightness-4" color={DarkMode ? '#F1EFEF' : 'black'} onPress={toggleDarkMode} />
            </Appbar.Header>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={DarkMode ? dark.body : light.body}>
                    <Avatar.Image size={120} style={light.avatar} source={{ uri: 'https://i.pinimg.com/564x/2b/ee/66/2bee660fcfdcc407bd3e29b01cc5e1a3.jpg' }} />
                    
                    <Surface style={DarkMode ? dark.surface : light.surface} elevation={4}>
                        <Text style={DarkMode ? dark.surfaceText : light.surfaceText}>Name</Text>
                        <Text style={DarkMode ? dark.surfaceMText : light.surfaceMText}>Prajesh Gawhale</Text>
                    </Surface>
                    
                    <Surface style={DarkMode ? dark.surface : light.surface} elevation={4}>
                        <Text style={DarkMode ? dark.surfaceText : light.surfaceText}>Phone</Text>
                        <Text style={DarkMode ? dark.surfaceMText : light.surfaceMText}>+91 8669585458</Text>
                    </Surface>

                    <Surface style={DarkMode ? dark.surface : light.surface} elevation={4}>
                        <Text style={DarkMode ? dark.surfaceText : light.surfaceText}>Email</Text>
                        <Text style={DarkMode ? dark.surfaceMText : light.surfaceMText}>prajesh4566@gmail.com</Text>
                    </Surface>

                    <Surface style={DarkMode ? dark.surface : light.surface} elevation={4}>
                        <Text style={DarkMode ? dark.surfaceText : light.surfaceText}>City</Text>
                        <Text style={DarkMode ? dark.surfaceMText : light.surfaceMText}>Akola</Text>
                    </Surface>

                    <Surface style={DarkMode ? dark.surface : light.surface} elevation={4}>
                        <Text style={DarkMode ? dark.surfaceText : light.surfaceText}>State, Country</Text>
                        <Text style={DarkMode ? dark.surfaceMText : light.surfaceMText}>Maharashtra, India</Text>
                    </Surface>
                </View>
            </View>
        </View>
    );
};

// define your styles
const light = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1EFEF',
    },
    appbar: {
        backgroundColor: '#F1EFEF',
    },
    appbartitle: {
        color: 'black',
    },
    body: {
        backgroundColor: "#279EFF",
        width: '85%',
        height: "90%",
        borderRadius: 20,
        elevation: 3,
        shadowColor: '#000',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        justifyContent: 'space-evenly'
    },
    avatar: {
        elevation: 5,
        shadowColor: '#000'
    },
    surface: {
        width: "72%",
        paddingVertical: 10,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 10
    },
    surfaceText: {
        fontSize: 12
    },
    surfaceMText: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});

const dark = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191717',
    },
    appbar: {
        backgroundColor: '#191717',
        color: 'yellow'
    },
    appbartitle: {
        color: 'white',
    },
    body: {
        backgroundColor: "#252B48",
        width: '85%',
        height: "90%",
        borderRadius: 20,
        elevation: 3,
        shadowColor: '#000',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        justifyContent: 'space-evenly'
    },
    avatar: {
        elevation: 5,
        shadowColor: '#fff'
    },
    surface: {
        width: "72%",
        paddingVertical: 10,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#445069'
    },
    surfaceText: {
        fontSize: 12,
        color: 'white',
    },
    surfaceMText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    }
});

//make this component available to the app
export default Drawerscreen2;
