import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native"
import WebView from "react-native-webview";
import mapTemplate, { IMap } from "./mapTemplate";
import * as Location from 'expo-location';
export const MapContainer = ({ zoom, center, places }: IMap) => {
    
    const [location, setLocation] = useState<any>();
    const [mapProperties, setMapProperties] = useState<IMap>({
        zoom: zoom,
        center: center,
        places: places
    });

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') 
                return;

            let { latitude, longitude } = await (await Location.getCurrentPositionAsync({})).coords;
            setLocation({ lat: latitude, long: longitude });
        })();
    }, []);

    useEffect(() => {
        if (location) 
            setMapProperties({ ...mapProperties, center: [location.lat, location.long] })
        
    }, [location])


    return <View style={{height:'100%',width:'100%'}}>
        <WebView
            style={style.mapContainer}
            originWhitelist={['*']}
            source={{ html: mapTemplate(mapProperties) }}

        />
    </View>
}
const style = StyleSheet.create({
    container: {
        backgroundColor:'red'
    },
    mapContainer: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    }
})