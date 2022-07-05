
import { View, Text, Pressable } from "react-native";
import { Button, Card, ImageView, ScrollLayout ,Banner,Tabs} from "../../components";
import { MapContainer } from "../../components/mapContainer";

export const Home = () => {
    const clickButton = () => {
        console.log('hello world')
    }

    return <View>
        <ScrollLayout>
            <MapContainer></MapContainer>
            <Tabs></Tabs>
            <Banner textColor='white' imageUrl="https://reactnative.dev/img/tiny_logo.png" background="https://reactnative.dev/img/tiny_logo.png" title="hello banner"  description="hello world description"></Banner>
            <ImageView mode="small" url="https://reactnative.dev/img/tiny_logo.png"/>
            <ImageView mode="large" url="https://reactnative.dev/img/tiny_logo.png"/>
            <ImageView mode="medium" url="https://reactnative.dev/img/tiny_logo.png"/>


        </ScrollLayout>


    </View>

}