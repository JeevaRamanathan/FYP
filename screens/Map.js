import React from 'react';
import {Text, View,ScrollView,Image,StyleSheet} from 'react-native';
import Header from './Header';
import MapView,{PROVIDER_GOOGLE,Marker,Polyline} from 'react-native-maps';
import database from '@react-native-firebase/database';


//   const mapStandard =[
//     {
//         "elementType": "labels.icon",
//         "stylers": [
//           {
//             "visibility": "off"
//           }
//         ]
//       },
//   ]

const mapNight=[
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#263c3f"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6b9a76"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#38414e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#212a37"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9ca5b3"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#1f2835"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#f3d19c"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2f3948"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#515c6d"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    }
  ]

class Map extends React.Component {
    state={
        coordinates:[
            {id:0,name:'Chatram Bus Stand',latitude:10.83186117670343,longitude:78.69337928581724},
            {id:1,name:'Teppakulam',latitude:10.827138213751232,longitude:78.69298701467521},
            {id:2,name:'Thillai Nagar,1st cross',latitude:10.825743440833644,longitude:78.68340399981496},
            {id:3,name:'Thillai Nagar,5th cross',latitude:10.823334959043205,longitude:78.6834094191161},
            {id:4,name:'Thillai Nagar,10th cross',latitude:10.821077220680621,longitude:78.68345250672813},
            {id:5,name:'Thillai Nagar,11th cross',latitude:10.818232412131437,longitude:78.68357314653281},
        ]
    }
    constructor(props) {
      super(props);
      
      };

  

      render() {
          return(
              <View>
                  <MapView
                    
                  provider={PROVIDER_GOOGLE}
                  region={{
                    // latitude:10.7905,
                    // longitude:78.7047,
                    latitude:this.state.coordinates[0].latitude,
                    longitude:this.state.coordinates[0].longitude,
                   
                    latitudeDelta:0.09,
                    longitudeDelta:0.035,
                   
                  }}
                 style={styles.map}
                 customMapStyle={mapNight}
                
                  >
                     <Polyline coordinates={this.state.coordinates} strokeWidth={4} strokeColor="#ebc550" />

                      {
                          this.state.coordinates.map(marker =>(
                            
                              <Marker
                              key={marker.name}
                              coordinate={{latitude:marker.latitude,longitude:marker.longitude}}
                              title={marker.name}
                              >
                                  
                                  
                                  <Image
                                        source={require('../assets/appicon.png')}
                                        style={{height: 40, width: 30}}
                                  />
                              </Marker>
                             
                          ))
                      }

                   
                  
                    
                  </MapView>
                  
              </View>
          );
      }
    }

export default Map;

const styles = StyleSheet.create({
    map:{
        height:'100%'
    }
})