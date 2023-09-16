import { View,TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from 'react';
import { Text,Card,Button } from "react-native-paper";

export default function Yudhishthira ()  {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        // Simulate a delay (e.g., loading data) before showing the component
        const delay = setTimeout(() => {
          setIsVisible(true);
          clearTimeout(delay);
        }, 2000); // Adjust the delay as needed
    }, []);
    return(
        <View style={styles.container}>
            <Card mode="outlined">
            <Card.Cover source={{ uri: 'https://e1.pxfuel.com/desktop-wallpaper/10/964/desktop-wallpaper-rudrasena-foundation-pandavas.jpg' }} />
                {isVisible && (
                    <Card.Content>
                        <Text variant="bodyLarge">He was the emperor of Indraprastha and later the Kuru Kingdom.Yudhishthira was the son of Kunti, the first wife of King Pandu, fathered by the god Yama due to Pandu's inability to have children. Yudhishthira held a belief in dharma (morals and virtues) and was chosen to be the crown prince of Kuru.But after the Lakshagriha incident, he was presumed to be dead, and his cousin Duryodhana was appointed as the new heir. The kingdom was split in half due to a succession dispute between Yudhishthira and Duryodhana.</Text>
                    </Card.Content>
                )}
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});