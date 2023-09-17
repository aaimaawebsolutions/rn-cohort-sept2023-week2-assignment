//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableWithoutFeedback } from "react-native";
import { Data } from "../data";
import { Appbar, Avatar  } from 'react-native-paper';

const DrawerScreen = ({navigation}) => {
    return (
        <FlatList
            ListHeaderComponent={() => {
                return (
                    <Appbar.Header>
                        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
                        <Appbar.Content title="Product Catalog" />
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Drawer2')}>
                            <Avatar.Text size={35} label="XD" style={{marginRight: 10}} />
                        </TouchableWithoutFeedback>
                    </Appbar.Header>
                )
            }}
            data={Data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return (
                    <View style={styles.container}>
                        <Image
                            source={{ uri: item.images[2] }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 8,
        elevation: 4,
        margin: 16,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 8,
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "green",
        marginTop: 8,
    },
    description: {
        fontSize: 14,
        marginTop: 8,
    },
});

//make this component available to the app
export default DrawerScreen;
