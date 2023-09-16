import React from 'react';
import { Pressable } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import { Link } from 'expo-router';

export default function AvatarLink({ initials, href, text }){
    return(
        <Pressable style={{ marginTop: 30 }}>
            <Avatar.Text size={94} label={initials} style={{ marginLeft: 10, marginTop: 8 }} />
            <Link style={{ marginLeft: 30, marginTop: 4 }} href={href}>
                <Text variant="titleMedium">{text}</Text>
            </Link>
        </Pressable>
    );
};