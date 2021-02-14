import React from 'react';
import {Text, View,ScrollView,Image,StyleSheet} from 'react-native';
import Header from './Header';
import MapView,{PROVIDER_GOOGLE,Marker,Polyline} from 'react-native-maps';
import { PermissionsAndroid } from 'react-native';
import database from '@react-native-firebase/database';
import * as geolib from 'geolib';
navigator.geolocation = require('@react-native-community/geolocation');

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
            // console.log(this.state.distance);
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

    render() { 
      // console.log(this.state.stages);
  
      return (  
        <> 
        {this.state.distance.length==0?<></>:
        <View>  
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
          >
            
          <Marker coordinate={this.state} />
          <Marker coordinate={this.state.distance[0]} title={this.state.distance[0].name} />
          <Marker coordinate={this.state.distance[1]} title={this.state.distance[1].name} />
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
        height:'100%'
    }
})