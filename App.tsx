import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {} from 'react-native';
import { Dashboard, Feed,Settings,About, Login, Register, Profile, ForgotPassword } from './src/screens';
import { Home } from './src/screens/home';
import { theme, style } from './src/values';

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <StatusBar style={theme.mode} />
      <Stack.Navigator initialRouteName='Home'>
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
  );
}
