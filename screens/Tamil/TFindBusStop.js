import React from 'react';
import {Text, Alert, Image} from 'react-native';
import {ListItem, Avatar, SearchBar} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import * as geolib from 'geolib';
import MapViewDirections from 'react-native-maps-directions';
import axios from 'axios';
import database from '@react-native-firebase/database';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import {View} from 'react-native';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCYUfRcy0BLJRO7fuhHsI0dYxJqi0_X_E8';
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
export default class TFindBusStop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      stages: [],
      distance: [],
      lat: null,
      lng: null,
      travelDistance: '',
      searchAddress: '',
      error: false,
    };
  }
  updateSearch = (search) => {
    if (search) {
      this.setState({search});
    }
  };
  componentDidMount() {
    database()
      .ref(`Tamil/busstop/`)
      .on('value', (snap) => {
        this.setState({stages: snap.val()});
      });
  }
  searchBusStop() {
    if (this.state.search.length == 0 || this.state.search.trim().length == 0) {
      Alert.alert('Enter a location to search');
    } else {
      this.setState({distance: []});
      axios
        .post(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.search}&key=AIzaSyCYUfRcy0BLJRO7fuhHsI0dYxJqi0_X_E8`,
        )
        .then((res) => {
          this.setState({error: false});
          this.setState(
            {
              lat: res.data.results[0].geometry.location.lat,
              lng: res.data.results[0].geometry.location.lng,
              searchAddress: res.data.results[0].formatted_address,
            },
            () => {
              arr = geolib.orderByDistance(
                {
                  latitude: this.state.lat,
                  longitude: this.state.lng,
                },
                this.state.stages,
              );
              this.setState({distance: arr}, () => {
                console.log(this.state.distance[0]);
              });
            },
          );
        })

        .catch((err) => {
          //   this.setState({error: true});
          console.log('Err');
        });
    }
  }
  render() {
    return (
      <>
        <SearchBar
          round
          style={{fontFamily: 'SourceSansPro-Regular', fontSize: 17}}
          searchIcon={{size: 0}}
          showLoading={true}
          placeholder="நீங்கள் எங்கே போக வேண்டும்?"
          onChangeText={this.updateSearch}
          value={this.state.search}
        />
        <TouchableOpacity
          onPress={() => this.searchBusStop()}
          activeOpacity={0.5}
          style={{
            backgroundColor: '#393e42',
            height: 50,
            width: '100%',
          }}>
          <Text
            style={{
              textAlignVertical: 'center',
              textAlign: 'center',
              marginTop: 13,
              color: 'white',
              fontSize: 17,

              fontFamily: 'SourceSansPro-Regular',
              fontWeight: 'bold',
            }}>
            பேருந்து நிறுத்தத்தைத் தேடுக
          </Text>
        </TouchableOpacity>
        {this.state.distance.length == 0 ? (
          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Text
              style={{
                textAlignVertical: 'center',
                textAlign: 'center',
                marginTop: 13,
                color: '#22333b',
                fontSize: 17,

                fontFamily: 'SourceSansPro-Regular',
                fontWeight: 'bold',
              }}>
              பஸ் நிறுத்தத்தின் பெயர் உங்களுக்குத் தெரியாவிட்டால், நீங்கள் செல்ல
              வேண்டிய இடத்தின் பெயரை உள்ளிடவும். நாங்கள் உங்களுக்கு, நீங்கள்
              தேடிய இடத்திற்கு அருகிலுள்ள பஸ் நிறுத்தத்தை வழங்குவோம்.
            </Text>
          </View>
        ) : (
          <></>
        )}

        {this.state.distance.length > 0 ? (
          <>
            <MapView
              provider={PROVIDER_GOOGLE}
              initialRegion={{
                latitude: this.state.lat,
                longitude: this.state.lng,
                latitudeDelta: 0.006866,
                longitudeDelta: 0.004757,
              }}
              style={{height: '60%'}}
              customMapStyle={mapNight}>
              <Marker
                coordinate={{
                  latitude: this.state.lat,
                  longitude: this.state.lng,
                }}
                title={this.state.search}>
                <Image
                  source={require('../../assets/clocation.png')}
                  style={{height: 50, width: 40}}
                />
              </Marker>
              <Marker
                coordinate={this.state.distance[0]}
                title={this.state.distance[0].name}>
                <Image
                  source={require('../../assets/appicon.png')}
                  style={{height: 30, width: 40}}
                />
              </Marker>
              <MapViewDirections
                origin={{
                  latitude: this.state.lat,
                  longitude: this.state.lng,
                }}
                mode="WALKING"
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
                  // this.setState({error: false});
                  this.setState({travelDistance: result.distance});
                  console.log(`Distance: ${result.distance} km`);
                  console.log(`Duration: ${result.duration} min.`);
                }}
                onError={(errorMessage) => {
                  // this.setState({error: true});
                  console.log('GOT AN ERROR');
                }}
              />
            </MapView>
            <ScrollView>
              <View
                style={{
                  height: '100%',
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <Text
                  style={{
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    marginTop: 3,
                    color: '#22333b',
                    fontSize: 12,
                    fontFamily: 'SourceSansPro-Regular',
                    fontWeight: 'bold',
                  }}>
                  தேடிய முகவரி: {(' ', this.state.searchAddress)}
                </Text>
                <View style={{height: 2, backgroundColor: 'black'}}></View>
                <Text
                  style={{
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    marginTop: 13,
                    color: '#22333b',
                    fontSize: 17,

                    fontFamily: 'SourceSansPro-Regular',
                    fontWeight: 'bold',
                  }}>
                  {(' ', this.state.distance[0].name)} ஈல் இருந்து{' '}
                  {this.state.search} அடையலாம்.
                  {'\n'} தூரம் (நடை மூலம்) : {this.state.travelDistance} கி.மீ.
                </Text>
              </View>
            </ScrollView>
          </>
        ) : (
          <></>
        )}
      </>
    );
  }
}
