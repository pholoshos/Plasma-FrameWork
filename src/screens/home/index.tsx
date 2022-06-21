
import { View, Text, Pressable } from "react-native";
import { Button, Card, ScrollLayout } from "../../components";

export const Home = () => {
    const clickButton = () => {
        console.log('hello world')
    }

    return <View>
        <ScrollLayout>
            <Text>Home</Text>

            <Button onClick={clickButton} label="hello" />
            <Button onClick={()=>{cons}} label="hello worldsfd" ></Button>
            <Card title="this a card">
                <Text>Hello wordld</Text>
            </Card>

            <Card title="hello" description="Hello world we ajsdn ajfas  " />

            <Card title="hello" description="Hello world we ajsdn ajfas  "
            ><Button label="click me" onClick={() => { }}></Button></Card>
        </ScrollLayout>


    </View>

}