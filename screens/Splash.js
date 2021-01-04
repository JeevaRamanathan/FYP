import React, {useRef} from 'react';
import AnimationTypingText from '../utils/AnimationTypingText';
import {StyleSheet, View, Text, ImageBackground, Button} from 'react-native';
import LottieView from 'lottie-react-native';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.screen}>
        <ImageBackground
          style={{height: '100%', width: '100%'}}
          resizeMode="stretch"
          source={require('../assets/bg1.jpg')}>
          <View style={styles.image}>
            <LottieView
              source={require('../assets/splash2.json')}
              loop={true}
              autoPlay={true}
              progress={0}
              speed={2}
            />
            <View style={styles.bottom}>
              <Text style={styles.text1}>Town Bus</Text>
              <AnimationTypingText
                nav={this.props}
                text="Exclusively for TN 45"
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default Splash;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  bottom: {
    width: '100%',
    marginTop: '120%',
  },
  text1: {
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'Acme-Regular',
    color: 'black',
  },
  text2: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Lobster-Regular',
    color: 'red',
  },
});
