
import { View, Text, Pressable, ScrollView } from "react-native";
import { Button, Card, ImageView,Input, ScrollLayout ,Banner,Tabs,MapContainer} from "../../components";
import { IPlace } from "../../components/mapContainer/mapTemplate";


export const Home = () => {
    const clickButton = () => {
        console.log('hello world')
    }
    const myPlaces : IPlace[] = [
        {
            placeName : 'hello ',
            description : ' we are okay with this',
            cordinates : [28.103189,-25.9]
        },
        {
            placeName : 'let Dance',
            description : ' open 24Hrs',
            cordinates : [28.103201,-25.893284]
        },
        {
            placeName : 'the food place',
            description : 'all you can eat tonight',
            cordinates : [28.102429,-25.891807]
        }
    ]

    return <View>

            <ScrollView>
               <View style={{height:'100%'}}>
                    <MapContainer zoom={12} places={myPlaces} center={[28.103201,-25.893284]}/>
               </View>
            </ScrollView>
            
            <Text>Hello</Text>
       
    </View>
 
        
           

}