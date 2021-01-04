import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Image,
  Keyboard,
  Animated,
} from 'react-native';
import HeaderBar from './Header';
import Floating from '../utils/floatingAction';

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeValue: new Animated.Value(0),
    };
  }
  _start = () => {
    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  componentDidMount() {
    // this._start();
  }
  render() {
    return (
      <>
        <HeaderBar />
        {/* <Animated.View
          style={{
            opacity: this.state.fadeValue,
          }}> */}
        <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/source.png')}
              style={styles.icon}></Image>
            <TextInput
              underlineColorAndroid="grey"
              placeholder="Source"
              style={styles.text}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/d.png')}
              style={styles.icon}></Image>
            <TextInput
              underlineColorAndroid="grey"
              placeholder="Destination"
              style={styles.text}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.2}
            onPress={Keyboard.dismiss}
            style={styles.button}>
            <Text style={styles.text1}>SEARCH BUSES</Text>
          </TouchableOpacity>
        </View>
        <Floating />
        {/* </Animated.View> */}
      </>
    );
  }
}
export default Routes;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    marginTop: 20,
    height: 210,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    elevation: 10,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  text: {
    height: 40,
    margin: 3,
    marginTop: 30,
    width: '85%',
  },
  button: {
    backgroundColor: '#3cb054',
    height: 40,
    marginLeft: 27,
    width: '85%',
    borderRadius: 10,
  },
  text1: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    marginTop: 9,
    fontFamily: 'sans-serif-medium',
  },
  icon: {
    marginTop: 30,
    height: 30,
    width: 30,
    margin: 5,
  },
});
