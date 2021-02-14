import React from 'react';
import {Text, View,ScrollView,Image,StyleSheet} from 'react-native';
import Header from './Header';
import MapView,{PROVIDER_GOOGLE,Marker,Polyline} from 'react-native-maps';

navigator.geolocation = require('@react-native-community/geolocation');

class CurrentLocation extends React.Component {  

    constructor(props) {
        super(props);
            this.state = {
                latitude:0,
                longitude:0,
            }

        };

        componentDidMount(){
            navigator.geolocation.getCurrentPosition(
              position=>{
                 this.setState({
                   latitude:position.coords.latitude,
                   longitude:position.coords.longitude,
                   error:null,
                 });
              },
              error =>this.setState({error:error.message}),
              {enableHighAccuracy:true,timeout:20000,maximumAge:2000} 
              );
          }

    render() {  
      return (  
        <View>  
            <Header/>
          <Text >Welcome to React Native!</Text>  
          <MapView
            provider={PROVIDER_GOOGLE}
            region={{
              // latitude:10.7905,
              // longitude:78.7047,
              latitude:0,
              longitude:0,
             
              latitudeDelta:0.09,
              longitudeDelta:0.035,
             
            }}
           style={styles.map}
          >

          </MapView>
          
        </View>  
      );  
    }  
  }  

export default CurrentLocation;

const styles = StyleSheet.create({
    map:{
        height:'100%'
    }
})