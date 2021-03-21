import React from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import Header from './Header';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import database from '@react-native-firebase/database';

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

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intermediate: this.props.navigation.state.params.value1.route_details[
        this.props.navigation.state.params.value1.selectedValue
      ].intermediate,
      source: this.props.navigation.state.params.value1.route_details[
        this.props.navigation.state.params.value1.selectedValue
      ].intermediate[0],
      destnation: this.props.navigation.state.params.value1.route_details[
        this.props.navigation.state.params.value1.selectedValue
      ].intermediate[
        this.props.navigation.state.params.value1.route_details[
          this.props.navigation.state.params.value1.selectedValue
        ].intermediate.length - 1
      ],
      coordinates: [],
      finalCoordinates: [
      
      ],
    };
  }
  componentDidMount() {
    var obj = {};
    var res = [];
    database()
      .ref(`Tamil/busstop/`)
      .on('value', (snap) => {
        this.setState({coordinates: snap.val()}, () => {
          this.state.coordinates.forEach((item) => {
            obj[item.name] = item;
          });
          for (let i = 0; i < this.state.intermediate.length; i++) {
            res.push(obj[this.state.intermediate[i]]);
          }
        });
        
        this.setState({finalCoordinates: res});
      });
     
  }
  render() {
    return (
      <>
        {this.state.finalCoordinates.length == 0 ? (
          <></>
        ) : (
          <View>
            <MapView
              provider={PROVIDER_GOOGLE}
              region={{
                latitude: this.state.finalCoordinates[0].latitude,
                longitude: this.state.finalCoordinates[0].longitude,

                latitudeDelta: 0.09,
                longitudeDelta: 0.035,
              }}
              style={styles.map}
              customMapStyle={mapNight}>
              <Polyline
                coordinates={this.state.finalCoordinates}
                strokeWidth={4}
                strokeColor="#ebc550"
              />
              
              {this.state.finalCoordinates.map((marker) => (
                <Marker
                  key={marker.name}
                  coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                  }}
                  title={marker.name}>
                  <Image
                    source={require('../../assets/appicon.png')}
                    style={{height: 40, width: 30}}
                  />
                </Marker>
              ))}
            </MapView>
          </View>
        )}
      </>
    );
  }
}

export default Map;

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
});
