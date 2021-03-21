import React from 'react';
import AnimationTypingText from '../../utils/AnimationTypingText';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import LottieView from 'lottie-react-native';

class TamilSplash extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props);
    return (
      <View style={styles.screen}>
        {/* <ImageBackground
          style={{height: '100%', width: '100%'}}
          resizeMode="stretch"
          source={require('../assets/bg.jpg')}> */}
        <View style={styles.image}>
          <LottieView
            source={require('../../assets/splash.json')}
            loop={true}
            autoPlay={true}
            progress={0}
            speed={2}
          />
          <View style={styles.bottom}>
            <Text style={styles.text1}>நகரப் பேருந்து</Text>
            <AnimationTypingText
              nav={this.props}
              val= {"Tamil"}
              text="பிரத்தியேகமாக உள்ளூர் பேருந்துகளுக்கு மட்டும்"
            />
          </View>
        </View>
        {/* </ImageBackground> */}
      </View>
    );
  }
}
export default TamilSplash;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    backgroundColor: '#ebc550',
  },
  bottom: {
    width: '100%',
    marginTop: '100%',
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
