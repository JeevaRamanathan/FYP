import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  Button,
} from 'react-native';
import Header from './Header';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import {PermissionsAndroid} from 'react-native';
import database from '@react-native-firebase/database';
import * as geolib from 'geolib';
import MapViewDirections from 'react-native-maps-directions';
navigator.geolocation = require('@react-native-community/geolocation');
import HTML from 'react-native-render-html';
import Tts from 'react-native-tts';
import axios from 'axios';
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Connectivity from './Connectivity';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCYUfRcy0BLJRO7fuhHsI0dYxJqi0_X_E8';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

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

const direction = {
  geocoded_waypoints: [
    {
      geocoder_status: 'OK',
      place_id: 'ChIJ3YQtQqD1qjsRQTNhQwPY8M4',
      types: ['street_address'],
    },
    {
      geocoder_status: 'OK',
      place_id: 'ChIJczGngKD1qjsRekZKqXy9EFs',
      types: ['street_address'],
    },
  ],
  routes: [
    {
      bounds: {
        northeast: {
          lat: 10.8181917,
          lng: 78.6824929,
        },
        southwest: {
          lat: 10.8170042,
          lng: 78.6814768,
        },
      },
      copyrights: 'Map data ©2021',
      legs: [
        {
          distance: {
            text: '0.2 km',
            value: 238,
          },
          duration: {
            text: '2 mins',
            value: 92,
          },
          end_address:
            '39D, Road, Anna Nagar, Tennur, Tiruchirappalli, Tamil Nadu 620026, India',
          end_location: {
            lat: 10.8170119,
            lng: 78.6824929,
          },
          start_address:
            'D65A, 11th B Cross Rd, West Thillai Nagar, Tennur, Tiruchirappalli, Tamil Nadu 620018, India',
          start_location: {
            lat: 10.8181917,
            lng: 78.6814768,
          },
          steps: [
            {
              distance: {
                text: '0.1 km',
                value: 107,
              },
              duration: {
                text: '1 min',
                value: 41,
              },
              end_location: {
                lat: 10.8172316,
                lng: 78.68150109999999,
              },
              html_instructions:
                'Head <b>south</b> toward <b>E Sathiram Rd</b><div style="font-size:0.9em">Pass by AL-SHIFA ACUPUNCTURE CLINIC (on the left)</div>',
              polyline: {
                points: 'u|_aAgnf_NN?dAAhBA',
              },
              start_location: {
                lat: 10.8181917,
                lng: 78.6814768,
              },
              travel_mode: 'DRIVING',
            },
            {
              distance: {
                text: '0.1 km',
                value: 128,
              },
              duration: {
                text: '1 min',
                value: 48,
              },
              end_location: {
                lat: 10.8170042,
                lng: 78.6824635,
              },
              html_instructions:
                'Turn <b>left</b> at SRK FROST FREEZE TECHNOLOGIES PRIVATE LIMITED onto <b>E Sathiram Rd</b><div style="font-size:0.9em">Pass by Mangalam Residency (on the left)</div>',
              maneuver: 'turn-left',
              polyline: {
                points: 'uv_aAknf_N@e@?O@IAK?IC]A{@?E@ABCB?f@C',
              },
              start_location: {
                lat: 10.8172316,
                lng: 78.68150109999999,
              },
              travel_mode: 'DRIVING',
            },
            {
              distance: {
                text: '3 m',
                value: 3,
              },
              duration: {
                text: '1 min',
                value: 3,
              },
              end_location: {
                lat: 10.8170119,
                lng: 78.6824929,
              },
              html_instructions:
                'Turn <b>left</b> at Mohanasree readymades onto <b>Bishop Rd</b>/<wbr/><b>Keela Chathiram Rd</b>/<wbr/><b>Thennur High Rd</b>',
              maneuver: 'turn-left',
              polyline: {
                points: 'gu_aAktf_NAE',
              },
              start_location: {
                lat: 10.8170042,
                lng: 78.6824635,
              },
              travel_mode: 'DRIVING',
            },
          ],
          traffic_speed_entry: [],
          via_waypoint: [],
        },
      ],
      overview_polyline: {
        points: 'u|_aAgnf_NtAAhBA@e@@YAUEyA@GFCf@CAE',
      },
      summary: 'E Sathiram Rd',
      warnings: [],
      waypoint_order: [],
    },
  ],
  status: 'OK',
};

class CurrentLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      error: null,
      stages: [],
      distance: [],
      msg: '',
      html: '',
      speak: false,
    };
  }

  async requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'This App needs access to your location ' +
            'so we can know where you are.',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // console.log('You can use locations ');
        this.test1();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {}
  }

  speak() {
    this.state.speak
      ? Tts.stop()
      : Tts.speak(this.state.msg, {
          androidParams: {
            KEY_PARAM_PAN: -1,
            KEY_PARAM_VOLUME: 0.5,
            KEY_PARAM_STREAM: 'STREAM_MUSIC',
          },
        });
    this.setState({speak: !this.state.speak});
  }
  async componentDidMount() {
    new Connectivity().CheckConnectivity(this.props);
    // this.setState({speak:false})
    this.requestLocationPermission();
    database()
      .ref(`busstop/`)
      .on('value', async (snap) => {
        await this.setState({stages: snap.val()});

        await this.disCalculation();
      });
  }
  disCalculation() {
    var arr = [];
    var dis = 0,
      time = 0;
    arr = geolib.orderByDistance(
      {latitude: this.state.latitude, longitude: this.state.longitude},
      this.state.stages,
    );
    this.setState({distance: arr});
    axios
      .post(
        `https://maps.googleapis.com/maps/api/directions/json?destination=${this.state.distance[0].latitude},${this.state.distance[0].longitude}&origin=${this.state.latitude},${this.state.longitude}&optimize:true&key=AIzaSyCYUfRcy0BLJRO7fuhHsI0dYxJqi0_X_E8`,
      )
      .then((res) => {
        for (var i = 0; i < res.data.routes[0].legs[0].steps.length; i++) {
          dis += res.data.routes[0].legs[0].steps[i].distance.value;
          time += res.data.routes[0].legs[0].steps[i].duration.value;
        }
        dis = dis / 1000;
        time = Math.round(time / 60);
        console.log(dis, time);

        var msg =
          'Your nearest bus stop is ' +
          this.state.distance[0].name +
          '. Instructions to reach the bus stop \n';
        var html = ` <b style=\"color:#22333b"\>Your nearest bus stop is ${this.state.distance[0].name}.</b>
     <p> <u><b style=\"color:#22333b"\>Distance:</b></u> ${dis} km  -  <u><b style=\"color:#22333b"\>Time:</b></u> ${time} minutes</p>
      <hr/><br>`;
        html += `<u><b style=\"color:#2735a8"\>Instructions to reach the bus stop:</b></u>`;

        for (var i = 0; i < res.data.routes[0].legs[0].steps.length; i++) {
          msg +=
            res.data.routes[0].legs[0].steps[i].html_instructions.replace(
              /<[^>]+>/g,
              '',
            ) + '\n';
          html += `<ul><li>${res.data.routes[0].legs[0].steps[i].html_instructions}</li></ul>`;
        }
        this.setState({msg: msg});
        this.setState({html: html});
      });
  }

  test1() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // console.log(
        //   position.coords.latitude,
        //   position.coords.longitude + '-----',
        // );

        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => {
        console.log(error);
      },
      {enableHighAccuracy: true, timeout: 30000},
    );
  }

  render() {
    return (
      <>
        {this.state.distance.length == 0 || this.state.msg === '' ? (
          <LottieView
            source={require('../assets/Bus.json')}
            loop={true}
            autoPlay={true}
            progress={0}
            speed={3}
          />
        ) : (
          <>
            {/* {console.log(this.state.latitude,this.state.longitude)}
          {console.log(this.state.distance[0])} */}
            <View style={{height: '70%'}}>
              <MapView
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                  latitude: this.state.latitude,
                  longitude: this.state.longitude,

                  latitudeDelta: 0.006866,
                  longitudeDelta: 0.004757,
                }}
                style={styles.map}
                customMapStyle={mapNight}>
                <Marker coordinate={this.state} title={'Your current location'}>
                  <Image
                    source={require('../assets/clocation.png')}
                    style={{height: 50, width: 40}}
                  />
                </Marker>

                <Marker
                  coordinate={this.state.distance[0]}
                  title={this.state.distance[0].name}>
                  <Image
                    source={require('../assets/appicon.png')}
                    style={{height: 30, width: 40}}
                  />
                </Marker>
                <Marker
                  coordinate={this.state.distance[1]}
                  title={this.state.distance[1].name}>
                  <Image
                    source={require('../assets/appicon.png')}
                    style={{height: 30, width: 40}}
                  />
                </Marker>
                
                <MapViewDirections
                  origin={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                  }}
                  destination={this.state.distance[0]}
                  apikey={GOOGLE_MAPS_APIKEY}
                  strokeWidth={5}
                  strokeColor="orange"
                  optimizeWaypoints={true}
                  onStart={(params) => {
                    console.log(
                      `Started routing between "${params.origin}" and "${params.destination}"`,
                    );
                  }}
                  onReady={(result) => {
                    console.log(`Distance: ${result.distance} km`);
                    console.log(`Duration: ${result.duration} min.`);
                  }}
                  onError={(errorMessage) => {
                    // console.log('GOT AN ERROR');
                  }}
                />

                <MapViewDirections
                  origin={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                  }}
                  destination={this.state.distance[1]}
                  apikey={GOOGLE_MAPS_APIKEY}
                  strokeWidth={5}
                  strokeColor="green"
                  optimizeWaypoints={true}
                  onStart={(params) => {
                    console.log(
                      `Started routing between "${params.origin}" and "${params.destination}"`,
                    );
                  }}
                  onReady={(result) => {
                    console.log(`Distance: ${result.distance} km`);
                    console.log(`Duration: ${result.duration} min.`);
                  }}
                  onError={(errorMessage) => {
                    // console.log('GOT AN ERROR');
                  }}
                />
              </MapView>
            </View>

            <View
              style={{
                height: '30%',
                marginLeft: 10,
                marginRight: 10,
                backgroundColor: '#fffafa',
              }}>
              <ScrollView>
                <HTML source={{html: this.state.html}} />
              </ScrollView>
              <View style={{position: 'absolute', right: 2, bottom: 2}}>
                <TouchableOpacity onPress={() => this.speak()}>
                  <Ionicons
                    name={
                      this.state.speak
                        ? 'ios-mic-circle-sharp'
                        : 'ios-mic-off-circle'
                    }
                    size={40}
                    style={{color: '#b5acba'}}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{position: 'absolute', right: 0, bottom: '30%'}}>
              <TouchableOpacity
                onPress={() => {
                  this.componentDidMount();
                }}>
                <Ionicons
                  name="refresh-circle"
                  size={40}
                  style={{color: '#b5acba'}}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      </>
    );
  }
}

export default CurrentLocation;

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
});
