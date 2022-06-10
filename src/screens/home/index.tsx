
import { Children } from "react"
import { View, Text } from "react-native"
import { Button } from "../../components"
import { user } from "../../context"


export const Home = () => {
    return <View>
        <user.Consumer>
            {(value) => {
                return <View>
                    <Text>User name: {value.username}</Text>
                    <Button label="Home"></Button>
                </View>
            }}
        </user.Consumer>
    </View>

}