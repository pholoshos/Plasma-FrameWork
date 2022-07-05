
import { View, Text, Pressable } from "react-native";
import { Button, Card, ImageView, ScrollLayout } from "../../components";

export const Home = () => {
    const clickButton = () => {
        console.log('hello world')
    }

    return <View>
        <ScrollLayout>
            <Text>Home</Text>
            <ImageView mode="large" title="hello world"  url="https://reactnative.dev/img/tiny_logo.png"></ImageView>

        </ScrollLayout>


    </View>

}