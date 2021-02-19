import React from 'react';
import {Text, View,ScrollView,Image,StyleSheet} from 'react-native';
import Header from './Header';
import MapView,{PROVIDER_GOOGLE,Marker,Polyline} from 'react-native-maps';
import { PermissionsAndroid } from 'react-native';
import database from '@react-native-firebase/database';
import * as geolib from 'geolib';
// import MapViewDirections from 'react-native-maps-directions';

navigator.geolocation = require('@react-native-community/geolocation');

const mapNight = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#263c3f',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#6b9a76',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#38414e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#212a37',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9ca5b3',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#1f2835',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#f3d19c',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2f3948',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#515c6d',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
];

class CurrentLocation extends React.Component {  

    constructor(props) {
        super(props);
            this.state = {
                latitude:0,
                longitude:0,
                error:null,
                stages:[],
                distance:[],
            }

        };
       
        async requestLocationPermission() {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                'title': 'Location Permission',
                'message': 'This App needs access to your location ' +
                           'so we can know where you are.'
              }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log("You can use locations ")
              this.test1();
            } else {
              console.log("Location permission denied")
            }
          } catch (err) {
            console.warn('][[')
          }
        }

        componentDidMount(){
          var obj = {}
          this.requestLocationPermission();    
          database()
      .ref(`busstop/`)
      .on('value', (snap) => {
        this.setState({stages: snap.val()}
        );
        this.disCalculation()
      
      });       
          }
          disCalculation() 
          {
            var arr=[]
            arr=geolib.orderByDistance({ latitude: this.state.latitude, longitude: this.state.longitude },this.state.stages);
            this.setState({distance:arr})
             console.log(this.state.distance);
            console.log(this.state.distance[0]);
            // console.log(this.state.distance);
          }

        test1 ()
        {
          navigator.geolocation.getCurrentPosition(
            position=>{
                console.log(position.coords.latitude,position.coords.longitude+"-----")
               
               this.setState({
                 latitude:position.coords.latitude,
                 longitude:position.coords.longitude,
                 error:null,
               });
            },
            error =>{
              console.log("56k766667575756es");
              console.log(error)},
            {enableHighAccuracy:true,timeout:20000} 
            );
        }

         getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
          var R = 6371; // Radius of the earth in km
          var dLat = deg2rad(lat2-lat1);  // deg2rad below
          var dLon = deg2rad(lon2-lon1); 
          var a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
            Math.sin(dLon/2) * Math.sin(dLon/2)
            ; 
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
          var d = R * c; // Distance in km
          return d;
        }
        
       deg2rad(deg) {
          return deg * (Math.PI/180)
        }
        

    render() { 
      // console.log(this.state.stages);
     
      return (  
        <> 
      
      
        {this.state.distance.length==0?<></>:
        <View>  
          <View
              style={{
                height: 110,
                width: '100%',
                backgroundColor: '#393e42',
                
              }}>
                <Text style={{color:"#ffff",fontFamily: 'SourceSansPro-Regular',lineHeight:30,fontSize:16}}>Nearest bus stop from your location is :{"\n"} {this.state.distance[0].name} and {this.state.distance[1].name}  </Text>
                <Text style={{color:"#ffff",fontFamily: 'SourceSansPro-Regular',lineHeight:30,fontSize:16}}>Distance is approxly </Text>
              </View>
          <MapView
            provider={PROVIDER_GOOGLE}
            region={{
              // latitude:10.7905,
              // longitude:78.7047,
              latitude:this.state.latitude,
              longitude:this.state.longitude,
             
              latitudeDelta:0.09,
              longitudeDelta:0.035,
             
            }}
           style={styles.map}
           customMapStyle={mapNight}
          >
             

            {/* <MapViewDirections
              origin={this.state}
              destination={this.state.distance[0]}
              apikey={"AIzaSyDBkA60rByMisdar3ZufsQV2ei0LJkoZW0"}
            /> */}
            
          <Marker coordinate={this.state} title={"Your current location"}>
          <Image
                    source={require('../assets/cloc1.png')}
                    style={{height: 50, width: 40}}
                  />
          </Marker>
            
         
          <Marker coordinate={this.state.distance[0]} title={this.state.distance[0].name} >
          <Image
                    source={require('../assets/appicon.png')}
                    style={{height: 30, width: 40}}
                  />
          </Marker>
          <Marker coordinate={this.state.distance[1]} title={this.state.distance[1].name} >
          <Image
                    source={require('../assets/appicon.png')}
                    style={{height: 30, width: 40}}
                  />
          </Marker>
          </MapView>
          
        </View>  
    }
        </>
      );  
    }  
  }  

export default CurrentLocation;

const styles = StyleSheet.create({
    map:{
        height:'90%',
        marginTop:1
    }
})