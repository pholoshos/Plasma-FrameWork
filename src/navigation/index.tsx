import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { StatusBar, View } from "react-native"
import { Navbar } from "../components"
import { Home, Settings, About, Dashboard, Feed, Login, Register, Profile, ForgotPassword } from "../screens"
import { theme } from "../values"


const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerBackTitle: '', headerStyle: { backgroundColor: theme.primaryColor }, headerTitle: (props) => <Navbar  {...props} /> }} initialRouteName='Home' >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Feed" component={Feed} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
    </NavigationContainer>
}