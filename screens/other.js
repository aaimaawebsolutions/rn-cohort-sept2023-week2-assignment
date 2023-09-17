//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Text, Button, Snackbar } from 'react-native-paper';
// create a component
const Other = () => {

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20 };

    const [svisible, setsVisible] = React.useState(false);

    const onToggleSnackBar = () => setsVisible(!svisible);

    const onDismissSnackBar = () => setsVisible(false);
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Button mode="contained" onPress={showModal}>
                    Show Modal
                </Button>
                <Button mode="contained" onPress={onToggleSnackBar}>
                    Show Snackbar
                </Button>
            </View>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <Text>Example Modal.  Click outside this area to dismiss.</Text>
            </Modal>
            <Snackbar
                visible={svisible}
                onDismiss={onDismissSnackBar}
                action={{
                    label: 'Clear',
                    onPress: () => {
                        // Do something
                    },
                }}>
                Hey there! I'm a Snackbar.
            </Snackbar>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
});

//make this component available to the app
export default Other;
