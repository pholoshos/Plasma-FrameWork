import React from 'react';
import { View ,Text} from 'react-native';
import { BottomNavBar } from './src/components';
import { ILinks } from './src/components/bottomNavBar';
import { Navigation } from './src/navigation';
import { Home } from './src/screens';

export default function App() {

  const links  : ILinks[] = [
    {
        name: 'Home',
        icon : '',
    },
    {
        name: 'Profile',
        icon : '',
    },
    {
        name: 'About',
        icon : '',
    }
]

  return (
    //<Navigation />
    <View  style={{height:'100%'}}>
          <BottomNavBar links={links} />
          <Home/>
    </View>

  );
}
