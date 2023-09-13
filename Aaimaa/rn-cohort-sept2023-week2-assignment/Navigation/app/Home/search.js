import { View,Text } from "react-native-web";
import { Link } from 'expo-router';
export default function Page() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Welcome to Navigation Tutorial</Text>
          <Link href={{ pathname: 'details', params: { username: 'Manoj' } }}>Learn More</Link>
      </View>
    );
  }
  