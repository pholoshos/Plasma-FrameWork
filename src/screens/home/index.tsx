
import { View, Text, Pressable } from "react-native";
import { Button, Card } from "../../components";

export const Home = () => {
    const clickButton = () => {
        console.log('hello world')
    }

    return <View>
        <Text>Home</Text>

        <Button onClick={clickButton} label="hello" />

        <Card title="hello" description="Hello world we ajsdn ajfas  " />

        <Card title="hello" description="Hello world we ajsdn ajfas  "
        ><Button label="click me" onClick={() => { }}></Button></Card>

    </View>

}