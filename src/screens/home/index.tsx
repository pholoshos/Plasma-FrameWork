
import { View, Text, Pressable } from "react-native";
import { Button, Card, ImageView, ScrollLayout } from "../../components";

export const Home = () => {
    const clickButton = () => {
        console.log('hello world')
    }

    return <View>
        <ScrollLayout>
            <Text>Home</Text>
            <ImageView mode="medium" url="https://reactnative.dev/img/tiny_logo.png"/>
            <ImageView mode="large" url="https://reactnative.dev/img/tiny_logo.png"/>
            <ImageView mode="medium" url="https://reactnative.dev/img/tiny_logo.png"/>
            <ImageView mode="medium" title="hello world" url="https://reactnative.dev/img/tiny_logo.png"/>

        </ScrollLayout>


    </View>

}