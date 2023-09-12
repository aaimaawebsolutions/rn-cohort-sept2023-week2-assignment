import { Stack} from 'expo-router';

export default function Layout() {
 return (
    <Stack>
        <Stack.Screen name='index'
        options={{
            headerStyle: {
            backgroundColor: 'yellow',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }}
        />
        <Stack.Screen name='details'
        options={{
            headerStyle: {
            backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }}
        />
        <Stack.Screen name='Home' options={{headerShown: false}} />
    </Stack>
  );
}
