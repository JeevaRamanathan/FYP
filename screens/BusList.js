import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {withTheme} from 'react-native-elements';
import HeaderBar from './Header';
import LottieView from 'lottie-react-native';
class BusList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <View style={styles.top}>
          <Text style={styles.text}>
            ChartamBusStand - Central Bus Stand
            {/* {this.props.navigation.state.params.s} -{' '}
            {this.props.navigation.state.params.d} */}
          </Text>
        </View>
        {/* <View style={{height: '100%', width: '100%'}}> */}
        {/* Activity Indicator until it fetches the data*/}
        {/* <LottieView
            source={require('../assets/Bus.json')}
            loop={true}
            autoPlay={true}
            progress={0}
            speed={3}
          /> */}
        {/* </View> */}
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              padding: 15,
              paddingBottom: 20,
            }}>
            <View style={styles.container}>
              <View style={{flexDirection: 'row'}}>
                <LottieView
                  source={require('../assets/Bus.json')}
                  loop={true}
                  autoPlay={false}
                  style={{height: 50, width: 50}}
                />
                <Text style={styles.text1}>Route Details</Text>
              </View>
              <View
                style={{
                  borderBottomColor: '#aaa',
                  marginLeft: 5,
                  marginRight: 5,
                  borderBottomWidth: 1,
                }}
              />
              <View style={{flexDirection: 'row', padding: 20}}>
                <Image
                  source={require('../assets/chronometer.png')}
                  style={{height: 20, width: 20}}
                />
                <Text
                  style={{
                    fontFamily: 'SourceSansPro-Regular',
                    textAlignVertical: 'bottom',
                    fontWeight: 'bold',
                    color: '#000',
                    fontSize: 15,
                  }}>
                  Travel Time
                </Text>
                <Text
                  style={{
                    fontFamily: 'SourceSansPro-Regular',
                    textAlignVertical: 'bottom',
                    fontWeight: 'bold',
                    color: '#aaa',
                    fontSize: 10,
                  }}>
                  (Approx)
                </Text>

                <Text
                  style={{
                    fontFamily: 'SourceSansPro-Regular',
                    textAlignVertical: 'bottom',
                    textAlign: 'right',
                    fontWeight: 'bold',
                    color: 'black',
                    position: 'absolute',
                    right: 20,
                    top: 20,
                    fontSize: 15,
                  }}>
                  {'-            '}
                  20 minutes
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  padding: 20,
                  paddingTop: 0,
                  elevation: 17,
                  shadowOpacity: 0.5,
                  shadowRadius: 5,
                }}>
                <Image
                  source={require('../assets/distance.png')}
                  style={{height: 20, width: 20}}
                />
                <Text
                  style={{
                    fontFamily: 'SourceSansPro-Regular',
                    textAlignVertical: 'bottom',
                    fontWeight: 'bold',
                    color: '#000',
                    fontSize: 15,
                  }}>
                  Distance
                </Text>

                <Text
                  style={{
                    fontFamily: 'SourceSansPro-Regular',
                    textAlignVertical: 'bottom',
                    textAlign: 'right',
                    fontWeight: 'bold',
                    color: 'black',
                    position: 'absolute',
                    right: 20,
                    top: 0,
                    fontSize: 15,
                  }}>
                  {'-                       '}2 km{' '}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={()=>this.props.navigation.navigate('RouteList')}>
          <View
            style={{
              height: 70,
              // width: '100%',
              marginLeft: 15,
              borderRadius: 3,
              marginRight: 15,
              backgroundColor: 'white',
              elevation: 5,
              shadowOpacity: 0.5,
              shadowRadius: 5,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  marginLeft: 10,
                  paddingRight: 10,
                  marginTop: '5%',
                  width: 80,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontFamily: 'SourceSansPro-Regular',
                  }}>
                  P116
                </Text>
              </View>
              <View
                style={{
                  borderLeftColor: '#ed4950',
                  // width: 20,
                  height: 60,
                  marginTop: 5,
                  // marginBottom: 5,
                  borderLeftWidth: 2,
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  width: '70%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: 'SourceSansPro-Regular',
                  }}>
                  Thillai Nagar 11th cross - Central Bus Stand
                </Text>
                <Text
                  style={{
                    marginLeft: 10,
                    // marginTop: 3,
                    color: 'green',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    fontFamily: 'SourceSansPro-Regular',
                  }}>
                  Arriving in next 2 minutes
                </Text>
              </View>
            </View>
          </View>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: '#aaaa',
              marginLeft: 15,
              marginTop: 3,
              marginBottom: 3,
              marginRight: 15,
              borderBottomWidth: 1,
            }}
          />
        </ScrollView>
      </>
    );
  }
}
export default BusList;
const styles = StyleSheet.create({
  top: {
    backgroundColor: '#ed4950',
    height: 40,
    width: '100%',
    justifyContent: 'center', //Centered vertically
  },
  text: {
    color: 'white',
    fontSize: 16,
    padding: 10,
    fontFamily: 'SourceSansPro-Regular',
  },
  container: {
    height: 140,
    width: '100%',
    backgroundColor: 'white',
    elevation: 7,
    borderRadius: 3,
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  text1: {
    fontFamily: 'SourceSansPro-Regular',
    textAlignVertical: 'bottom',
    fontStyle: 'italic',
    color: '#aaa',
    fontSize: 16,
    marginLeft: 20,
    marginTop: 20,
  },
});
