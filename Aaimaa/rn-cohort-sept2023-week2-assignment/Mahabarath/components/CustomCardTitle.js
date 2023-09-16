import React from 'react';
import { Card, Avatar } from 'react-native-paper';

export default function CustomCardTitle({ title, subtitle, icon }){
    return(
        <Card.Title
            title={title}
            subtitle={subtitle}
            left={(props) => <Avatar.Icon {...props} icon={icon} />}
        />
    );
}