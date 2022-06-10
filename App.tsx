import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Home } from './src/screens/home';
import { theme, style } from './src/styles';

export default function App() {

  return (
    <View style={style.container}>
      <Home></Home>
      <StatusBar style={theme.mode} />
    </View>
  );
}
