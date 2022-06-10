
import { View, Text } from "react-native";
import { Link } from '@react-navigation/native';

export const Home = () => {
    return <View>
        <Text>Home</Text>
        <Link to={{screen : 'About'}}>Goto Home</Link>
    </View>

}