import React from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import Header from './Header';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import database from '@react-native-firebase/database';
import {WebView} from 'react-native-webview';
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

class RouteListMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intermediate: this.props.navigation.state.params.value1.intermediate,
      source: this.props.navigation.state.params.value1.source,
      destination: this.props.navigation.state.params.value1.destination,
      coordinates: [],
      finalCoordinates: [
        {
          id: 0,
          name: 'Chatram Bus Stand',
          latitude: 10.83186117670343,
          longitude: 78.69337928581724,
        },
        {
          id: 1,
          name: 'Teppakulam',
          latitude: 10.827138213751232,
          longitude: 78.69298701467521,
        },
        {
          id: 2,
          name: 'Thillai Nagar,1st cross',
          latitude: 10.825743440833644,
          longitude: 78.68340399981496,
        },
        {
          id: 3,
          name: 'Thillai Nagar,5th cross',
          latitude: 10.823334959043205,
          longitude: 78.6834094191161,
        },
        {
          id: 4,
          name: 'Thillai Nagar,10th cross',
          latitude: 10.821077220680621,
          longitude: 78.68345250672813,
        },
        {
          id: 5,
          name: 'Thillai Nagar,11th cross',
          latitude: 10.818232412131437,
          longitude: 78.68357314653281,
        },
      ],
    };
  }
  componentDidMount() {
    var obj = {};
    var res = [];
    var arr = this.props.navigation.state.params.value1.intermediate;
    database()
      .ref(`busstop/`)
      .on('value', (snap) => {
        this.setState({coordinates: snap.val()}, () => {
          this.state.coordinates.forEach((item) => {
            obj[item.name] = item;
          });
          for (let i = 0; i < arr.length; i++) {
            res.push(obj[arr[i]]);
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
                latitude: Number(this.state.finalCoordinates[0].latitude),
                longitude: Number(this.state.finalCoordinates[0].longitude),

                latitudeDelta: 0.09,
                longitudeDelta: 0.035,
              }}
              style={styles.map}
              customMapStyle={mapNight}>
              {console.log(
                this.state.finalCoordinates[13],
                this.state.finalCoordinates.length,
              )}
              <Polyline
                coordinates={this.state.finalCoordinates}
                strokeWidth={4}
                strokeColor="#ebc550"
              />

              {this.state.finalCoordinates.map((marker) => (
                <>
                  {marker.name == this.state.source ? (
                    <Marker
                      key={marker.name}
                      coordinate={{
                        latitude: marker.latitude,
                        longitude: marker.longitude,
                      }}
                      title={marker.name}>
                      <Image
                        source={require('../assets/source.png')}
                        style={{height: 40, width: 30}}
                      />
                    </Marker>
                  ) : (
                    <Marker
                      key={marker.name}
                      coordinate={{
                        latitude: marker.latitude,
                        longitude: marker.longitude,
                      }}
                      title={marker.name}>
                      <Image
                        source={require('../assets/appicon.png')}
                        style={{height: 40, width: 30}}
                      />
                    </Marker>
                  )}
                </>
              ))}
            </MapView>
          </View>
        )}
      </>
    );
  }
}

export default RouteListMap;

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
});
