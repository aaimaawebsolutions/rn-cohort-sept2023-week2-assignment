import { View,ScrollView } from "react-native";
import { Stack} from "expo-router";
import * as React from 'react';
import { Avatar,Text,Modal,Portal,PaperProvider, List,Button } from 'react-native-paper';
import AvatarLink from "../../../components/AvatarLink";

export default function Characters() {
    const [visible, setVisible] = React.useState(false);

  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded)
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
    return(
        <PaperProvider>
            <Stack.Screen options={{headerShown: true, title:"Characters"}}/>
            <View>          
                <Portal>
                    <Modal visible={visible} testID="K" onDismiss={hideModal} style={{alignItems:'center'}} contentContainerStyle={containerStyle}>
                        <Avatar.Icon style={{marginTop:8}} size={74} icon="pac-man" />
                        <Text style={{fontWeight:'bold',}} variant="headlineMedium">MANOJ KUMAR SAI</Text>
                        <Text variant="titleMedium"> Manojsai@7075</Text>
                        <Text variant="titleMedium">manojkumarsai04@gmail.com</Text>
                        <Text variant="titleMedium">+91 7075852057</Text>
                    </Modal>
                </Portal>
                <ScrollView horizontal>
                    <AvatarLink initials="K" href="/Characters/Krishna" text="Krishna" />
                    <AvatarLink initials="A" href="/Characters/Arjuna" text="Arjuna" />
                    <AvatarLink initials="k" href="/Characters/Karna" text="Karna" />
                    <AvatarLink initials="Y" href="/Characters/Yudhisthira" text="Yudhisthira" />
                </ScrollView>
                <Text></Text>
                <List.Section title="Characters Based on Family">
                    <List.Accordion
                        title="Kauravas"
                        left={props => <List.Icon {...props} icon="folder" />}>
                        <List.Item title="Drutharastra" />
                        <List.Item title="Duryodana" />
                        <List.Item title="Dusyasana" />
                        <List.Item title="Sakuni" />
                        <List.Item title="Ashvadama" />
                    </List.Accordion>

                    <List.Accordion
                        title="Pandavas"
                        left={props => <List.Icon {...props} icon="folder" />}>
                        <List.Item title="Draupadi" />
                        <List.Item title="Kunti" />
                        <List.Item title="Maadri" />
                        <List.Item title="Nakula" />
                        <List.Item title="Sahadeva" />
                    </List.Accordion>
                </List.Section>
                <Button icon="human" onPress={showModal}>
                    Profile
                </Button>
            </View>
        </PaperProvider>
    );
}