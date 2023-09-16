import { View,StyleSheet,ScrollView } from "react-native";
import CustomCard from "../../../components/CustomCard";
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import React, { useState } from 'react';

export default function Krishna ()  {
    const [scale, setScale] = useState(1);
    const onPinchGestureEvent = event => {
        setScale(event.nativeEvent.scale);
    };
    const onPinchHandlerStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
          // Handle the pinch gesture completion if needed
          console.log('Pinch completed');
        }
    };
    return(
        <PinchGestureHandler
            onGestureEvent={onPinchGestureEvent}
            onHandlerStateChange={onPinchHandlerStateChange}
        >
            <ScrollView
                style={styles.container}
                contentContainerStyle={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                transform: [{ scale: scale }],
                }}
                maximumZoomScale={3} // You can adjust the maximum zoom level
                minimumZoomScale={1} // You can adjust the minimum zoom level
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                bouncesZoom
                centerContent
            >
               <View>
                    <CustomCard
                        imageUri="https://godhindus.com/wp-content/uploads/2023/07/hd-wallpaper-of-radha-krishna.jpg"
                        description="Friend, philosopher, guide – these three words explain the role that Lord Krishna plays in the Mahabharata. Krishna, who is an avatar of Vishnu, is the God of compassion and love. Krishna’s early life has been well documented in another literary masterpiece called the Srimad Bhagavatam also written by Vyaasa. It gives us a complete insight into Krishna’s personal life, but doesn’t say anything about his public life."
                    />
                </View>
            </ScrollView>
        </PinchGestureHandler>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});