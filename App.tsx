import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { StyleSheet, Text, TouchableHighlightComponent, View } from 'react-native';
import { user } from './src/context/user';
import { IUser } from './src/modal/user';
import { Home } from './src/screens/home';
import {theme} from './src/styles/theme'

export default function App() {
  const userContext = useContext(user)
  
  const [userData,setUser] = useState<IUser>({
    username: 'Pholosho',
    phone : '0720648709'
  })

  return (
    <user.Provider value={userData}>
    <View style={styles.container}>
      <Home></Home>
      <StatusBar style={theme.mode} />
    </View>
    </user.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
