import React from 'react';
import {Header} from 'react-native-elements';
import LottieView from 'lottie-react-native';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header
          containerStyle={{
            backgroundColor: '#ed4950',
            justifyContent: 'space-around',
          }}
          headerTintColor="red"
          leftComponent={
            <LottieView
              source={require('../assets/Bus.json')}
              loop={true}
              autoPlay={true}
              progress={0}
              speed={1}
              style={{
                width: 90,
                height: 90,
                marginTop: -20,
                marginLeft: -7,
                marginBottom: -34,
              }}
            />
          }
          centerComponent={{
            text: 'Town Bus',
            center: 'center',
            placement: 'center',
            style: {
              color: 'white',
              fontSize: 21,
              marginTop: 4,
              fontFamily: 'Acme-Regular',
            },
          }}
        />
      </>
    );
  }
}
export default HeaderBar;
const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: 'red',
  },
});
