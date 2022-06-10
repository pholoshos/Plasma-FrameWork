import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Home } from './src/screens/home';
import {theme} from './src/styles/theme'

export default function App() {

  return (
    <View style={styles.container}>
      <Home></Home>
      <StatusBar style={theme.mode} />
    </View>
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
