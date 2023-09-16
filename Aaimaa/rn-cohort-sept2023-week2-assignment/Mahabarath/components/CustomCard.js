import React from 'react';
import { Card, Text } from 'react-native-paper';

export default function CustomCard({ title, imageUri, description }){
    return(
        <Card mode="outlined">
            <Card.Cover source={{ uri: imageUri }} />
            <Card.Content>
                <Text variant="titleLarge">{title}</Text>
                <Text variant="bodyLarge">{description}</Text>
            </Card.Content>
        </Card>
    );
};