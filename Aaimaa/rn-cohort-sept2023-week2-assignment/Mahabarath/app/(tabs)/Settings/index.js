import { View,StyleSheet,Appearance } from "react-native";
import { Button,Snackbar,Searchbar } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import CustomCardTitle from "../../../components/CustomCardTitle";

const lightTheme = {
    background: '#ffffff',
    text: '#000000',
};
  
  const darkTheme = {
    background: '#000000',
    text: '#ffffff',
  };

export default function Profie () {
    const [visible, setVisible] = React.useState(false);
    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const currentTheme = isDarkTheme ? darkTheme : lightTheme;
    useEffect(() => {
        const deviceAppearance = Appearance.getColorScheme();
        setIsDarkTheme(deviceAppearance === 'dark');
    }, []);
    const toggleTheme = () => {
        setIsDarkTheme((prev) => !prev);
    };

    return(
        <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{marginTop:10}}
            />
            <CustomCardTitle
                title="Account"
                subtitle="Security notifications, change number"
                icon="key"
            />
            <CustomCardTitle
                title="Privacy"
                subtitle="Block profiles"
                icon="lock"
            />
            <CustomCardTitle
                title="Notifications"
                subtitle="Message, group & tones"
                icon="bell"
            />
            <CustomCardTitle
                title="Storage and data"
                subtitle="Network usage, auto-download"
                icon="file"
            />
            <CustomCardTitle
                title="Help"
                subtitle="Contact us, Help center"
                icon="help"
            />
            <CustomCardTitle
                title="Invite a friend"
                icon="human"
            />
            <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                label: 'Undo',
                onPress: () => {
                    // Do something   
                },
                }}>
                Hey there! This is the settings page Hurray!!.
            </Snackbar>
            
            <Button  onPress={toggleTheme} mode="contained" style={styles.button}>
                Dark Theme
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 24,
      color: '#000000', // Set the text color for light theme
    },
    button: {
      marginTop: 20,
      backgroundColor: 'black',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 9,
    },
  });