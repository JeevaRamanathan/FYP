import React from 'react';
import {Text, View,ScrollView,Image,StyleSheet} from 'react-native';
import Header from './Header';
import MapView,{PROVIDER_GOOGLE,Marker,Polyline} from 'react-native-maps';

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
                  <Header />
                  {/* <Text>Map </Text> */}
                  <MapView
                    
                  provider={PROVIDER_GOOGLE}
                  region={{
                    latitude:10.7905,
                    longitude:78.7047,
                   
                    latitudeDelta:0.09,
                    longitudeDelta:0.035
                  }}
                  style={styles.map}
                  >
                     <Polyline coordinates={this.state.coordinates} strokeWidth={4} />
                    
               
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

                      {/* {
                          this.state.coordinates.map(polyline => (
                            <Polyline
                              key={polyline.name}
                              coordinates={{latitude:polyline.lat,longitude:polyline.lng}}
                              strokeColor="#000"
                              fillColor="rgba(255,0,0,0.5)"
                              strokeWidth={1}/>
                          ))
                      } */}
                  
                    
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