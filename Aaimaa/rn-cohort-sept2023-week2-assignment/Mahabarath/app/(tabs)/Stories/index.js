import { Stack } from "expo-router";
import * as React from 'react';
import { Text,Appbar,useTheme } from "react-native-paper";
import { ScrollView,View} from "react-native";
import CustomCard from "../../../components/CustomCard";



export default function Stories() {
    const theme = useTheme();
    return(
        <>
            <View >
                <ScrollView>
                    <Stack.Screen  options={{headerShown: true, title:"HOME"}}/>
                    <Appbar elevated style={{ backgroundColor: theme.colors.primaryContainer }}>
                        <Appbar.Content title="Stories" />
                        <Appbar.Action icon="calendar" onPress={() => {}} />
                        <Appbar.Action icon="ship-wheel" onPress={() => {
                            return <Text>Im a function</Text>
                        }} />
                    </Appbar>
                    <Text></Text>
                    <CustomCard
                        title="The Yaksha Prashna"
                        imageUri="https://www.imnepal.com/wp-content/uploads/2022/08/1080p-Mahabharat-Krishna-HD-Images.jpeg"
                        description="On the last day of their exile, the Pandavas, one by one, leave for a drink of water from a nearby lake and don’t return.Yudhishthir is the last to follow his brothers, and upon arriving at the bank of the lake, he sees a talking crane perched in the soft mud, and all around it are the corpses of the other Pandavas KNOW MORE..."
                    />
                    <Text></Text>
                    <CustomCard
                        title="The Birth of Satyavati"
                        imageUri="https://i0.wp.com/sanatanlok.com/wp-content/uploads/2020/11/images283729.jpeg?fit=443%2C332&ssl=1"
                        description="Most people know Satyavati, the second wife of King Shantanu, as the daughter of a fisherman. But her real father is a king by name Uparichara.One day, when he is away on an expedition to hunt deer, he finds himself consumed by desire for his wife, Girika, whom he has left behind at the palace.He produces his seed and gives it to a passing hawk to carry to his wife so that she could impregnate herself. KNOW MORE...."
                    />
                    <Text></Text>
                    <CustomCard
                        title="Demolition of Arjuna’s Vanity"
                        imageUri="https://wallpaperaccess.com/full/3468403.jpg"
                        description="In the Mahabharata, leading up to the war, Arjuna is the most Faustian of all Pandavas. He is accepted to be the best among his brothers at everything – skill at arms, diplomacy, beauty, charm; you name it, he has it.For the Mahabharata war, he is given everything he needs to succeed. Krishna becomes his charioteer. He fights with the flag of Hanuman hoisted on his mast. KNOW MORE..."
                    />
                    <Text></Text>
                    <CustomCard
                        title="Kali, the Arch Enemy of Vishnu"
                        imageUri="https://wallpapercave.com/wp/wp6875310.jpg"
                        description="The ten avatars of Vishnu are said to occur because the god is intent on banishing evil (or Adharma) from the world of men. In each of his avatars, he grapples with one or the other form of evil.In the final avatar, that of Kalki, he comes face to face at last with Kali, the reigning lord of Kali Yuga, who had been the string-puller of adharma in all the other epochs as well. KNOW MORE..."
                    />
                </ScrollView>
            </View>
        </>
    );
}

