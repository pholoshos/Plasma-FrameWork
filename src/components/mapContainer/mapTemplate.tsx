import { tomTomMapKey } from "../../values/info";
import {theme} from '../../values'

export interface ICordinates {
    lat: number;
    long : number;
}

export interface IPlace {
    placeName? : string;
    description? : string;
    cordinates : centerType;
}
type centerType = [number,number];

export interface IMap {
    center :centerType;
    cordinates? : ICordinates;
    target?:ICordinates;
    zoom?: number;
    places? : IPlace[];


}

const map = ({center,cordinates,target,zoom,places}:IMap)=>{
    const latLong = `[${center[1]},${center[0]}]`;
    const jsonPlaces = JSON.stringify(places);
  
    return `
    
    <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
                html, body {
                    margin: 0;
                }
    
                #map {
                    height: 100%;
                    width: 100%;
                }
                .marker-icon {
                    background-position: center;
                    background-size: 22px 22px;
                    border-radius: 50%;
                    height: 22px;
                    left: 4px;
                    position: absolute;
                    text-align: center;
                    top: 3px;
                    transform: rotate(45deg);
                    width: 22px;
                }
                .marker {
                    height: 30px;
                    width: 30px;
                }
                .marker-content {
                    background: #c30b82;
                    border-radius: 50% 50% 50% 0;
                    height: 30px;
                    left: 50%;
                    margin: -15px 0 0 -15px;
                    position: absolute;
                    top: 50%;
                    transform: rotate(-45deg);
                    width: 30px;
                }
                .marker-content::before {
                    background: #ffffff;
                    border-radius: 50%;
                    content: "";
                    height: 24px;
                    margin: 3px 0 0 3px;
                    position: absolute;
                    width: 24px;
                }
            </style>
        </style>
        <div id='map' class='map'></div>
    
        <!-- load TomTom Maps Web SDK from CDN -->
        <link rel='stylesheet' type='text/css' href='https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.13.0/maps/maps.css'/>
        <script src='https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.13.0/maps/maps-web.min.js'></script>
        <link rel='stylesheet' type='text/css' href='../assets/ui-library/index.css'/>
        <link rel='stylesheet' type='text/css' href='../assets/ui-library/icons-css/routing.css'/>
    
        <script>

        function createMarker(icon, position, color, popupText) {
            var markerElement = document.createElement('div');
            markerElement.className = 'marker';

            var markerContentElement = document.createElement('div');
            markerContentElement.className = 'marker-content';
            markerContentElement.style.backgroundColor = color;
            markerElement.appendChild(markerContentElement);

            var iconElement = document.createElement('div');
            iconElement.className = 'marker-icon';
            iconElement.style.backgroundImage =
                'url(https://api.tomtom.com/maps-sdk-for-web/cdn/static/' + icon + ')';
            markerContentElement.appendChild(iconElement);

            var popup = new tt.Popup({offset: 30}).setText(popupText);
            // add marker to map
            new tt.Marker({element: markerElement, anchor: 'bottom'})
                .setLngLat(position)
                .setPopup(popup)
                .addTo(map);
        }
            // create the map
            tt.setProductInfo('TomTom Maps React Native Demo', '1.0');
            let map = tt.map({
                key: '${tomTomMapKey}',
                container: 'map',
                center: [${center[1]},${center[0]}],
                zoom: ${zoom},
                dragPan : true,

                
            });
           
            const ts  =  ${jsonPlaces}

            //let userMarker = new tt.Marker().setLngLat([${center[1]},${center[0]}]).addTo(map);
            createMarker('', [${center[1]},${center[0]}], '${theme.primaryColor}', 'This Is You');
 
            ts.map((i)=>{     
                createMarker('', i.cordinates, 'grey', i.placeName);                
            })

            
            
            var popupOffsets = {
                top: [0, 0],
                bottom: [0, -70],
                'bottom-right': [0, -70],
                'bottom-left': [0, -70],
                left: [25, -35],
                right: [-25, -35]
            }
            
            
            var popup = new tt.Popup({offset: popupOffsets}).setHTML("your company name, your company address");
            marker.setPopup(popup).togglePopup();
            map.on('dragend', function() {
                let center = map.getCenter();
                window.ReactNativeWebView.postMessage(center.lng.toFixed(3) + ", " + center.lat.toFixed(3));
            })
            
  
        </script>
    </div>
    `;
}


export default map;