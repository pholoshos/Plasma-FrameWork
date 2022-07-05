import React from "react";
import { View, StyleSheet, Dimensions } from "react-native"
import MapView from 'react-native-maps';
import WebView from "react-native-webview";
import template from "./template";

export const MapContainer = () => {
    return <View>
        <WebView
            style={style.mapContainer}
            originWhitelist={['*']}
            source={{ html: template }}

        />
    </View>
}
const style = StyleSheet.create({
    container: {

    },
    mapContainer: {
        height: Dimensions.get('window').width,
        width: Dimensions.get('window').width
    }
})