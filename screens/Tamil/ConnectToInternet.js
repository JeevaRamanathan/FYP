import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import LottieView from 'lottie-react-native';
import NetInfo from '@react-native-community/netinfo';

export default class ConnectToInternet extends React.Component {
  Check = () => {
    NetInfo.fetch().then((res) => {
      if (res.isConnected) {
        this.props.navigation.navigate('Home');
      }
    });
  };
  render() {
    return (
      <>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            flex: 1,
            height: '100%',
            width: '100%',
            backgroundColor: '#fffcfc',
          }}>
          <Text
            style={{
              textAlignVertical: 'center',
              textAlign: 'center',
              color: 'red',
              marginTop: '40%',
              fontSize: 25,
              // fontFamily: 'Acme-Regular',
              fontWeight: 'bold',
            }}>
            அச்சச்சோ!
          </Text>
          <Text
            style={{
              textAlignVertical: 'center',
              textAlign: 'center',
              color: '#22333b',
              fontSize: 20,
            }}>
            இணையத்துடன் இணைக்கவும்......
          </Text>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              flex: 1,
              width: '100%',
              backgroundColor: '#fffcfc',
            }}>
            <LottieView
              source={require('../../assets/InternetConnection')}
              loop={true}
              autoPlay={true}
              progress={0}
              speed={3}
            />
          </View>

          <TouchableOpacity
            onPress={() => this.Check()}
            activeOpacity={0.7}
            style={{
              height: 50,
              width: '90%',
              borderRadius: 5,
              marginTop: 25,
              marginLeft: 20,
              marginRight: 20,
              shadowColor: '#000',
              elevation: 10,
              backgroundColor: '#6dc0b8',
              marginBottom: 20,
              shadowOffset: {width: 0, height: 3},
              shadowOpacity: 0.5,
              shadowRadius: 5,
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
              மீண்டும் முயற்சிக்கவும்
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
