
import { View, Text, Pressable } from "react-native";
import { Link } from '@react-navigation/native';
import { Button } from "../../components";

export const Home = () => {
    const clickButton = ()=>{
        console.log('hello world')
    }  

    return <View>
        <Text>Home</Text>
        <Button onClick={clickButton} label="hello"/>
    </View>

}