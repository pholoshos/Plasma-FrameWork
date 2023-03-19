
import { View,Text} from "react-native";
import WebView from "react-native-webview";
import {  BottomNavBar} from "../../components";
import { ILinks } from "../../components/bottomNavBar";



export const Home = () => {
    const web = require('../../web/index.html')

    return (
            <WebView
                    style={{marginTop:100}}
                   source={{ uri: 'https://gallary.qqee.store' }}
            
            />)
        
 
}

