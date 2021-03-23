import React from 'react';
import {View, Text, Image} from 'react-native';
import LottieView from 'lottie-react-native';
export default class RouteDisTimeDetailsUI extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 15,
          paddingBottom: 20,
        }}>
        <View
          style={{
            height: this.props.value.via == '' ? 140 : 185,
            width: '100%',
            backgroundColor: 'white',
            elevation: 7,
            borderRadius: 3,
            shadowOpacity: 0.5,
            shadowRadius: 5,
          }}>
          <View style={{flexDirection: 'row'}}>
            <LottieView
              source={require('../../assets/Bus.json')}
              loop={true}
              autoPlay={true}
              style={{height: 50, width: 50}}
            />
            <Text
              style={{
                fontFamily: 'SourceSansPro-Regular',
                textAlignVertical: 'bottom',
                fontStyle: 'italic',
                color: '#aaa',
                fontSize: 16,
                marginLeft: 20,
                marginTop: 20,
              }}>
              வழி விவரங்கள்{' '}
            </Text>
          </View>
          {this.props.value.via != '' ? (
            <Text
              style={{
                marginLeft: 65,
                fontStyle: 'italic',
                color: '#aaa',
                fontFamily: 'SourceSansPro-Regular',
              }}>
              {' '}
              {this.props.value.via}{' '}
            </Text>
          ) : (
            <></>
          )}

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
              source={require('../../assets/chronometer.png')}
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
              பயண நேரம்
            </Text>
            <Text
              style={{
                fontFamily: 'SourceSansPro-Regular',
                textAlignVertical: 'bottom',
                fontWeight: 'bold',
                color: '#aaa',
                fontSize: 10,
              }}>
              (தோராயமாக)
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
              {this.props.value.time} நிமிடங்கள்
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
              source={require('../../assets/distance.png')}
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
              தூரம்
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
              {this.props.value.distance} கி.மீ.{' '}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
