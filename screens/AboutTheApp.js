import React, {useState, useEffect, useRef, useCallback} from 'react';
import {View, Text, Button, Linking} from 'react-native';
import qs from 'qs';
import LottieView from 'lottie-react-native';
import {Card} from 'react-native-shadow-cards';

export default class AboutTheApp extends React.Component {
  async sendEmail(to, subject, body, options = {}) {
    const {cc, bcc} = options;

    let url = `mailto:${to}`;
    const query = qs.stringify({
      subject: subject,
      body: body,
      cc: cc,
      bcc: bcc,
    });

    if (query.length) {
      url += `?${query}`;
    }

    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
      throw new Error('Provided URL can not be handled');
    }

    return Linking.openURL(url);
  }
  render() {
    return (
      <>
        <View style={{height: '25%'}}>
          <LottieView
            source={require('../assets/Bus.json')}
            loop={true}
            autoPlay={true}
            progress={0}
            speed={3}
          />
          <Text
            style={{
              position: 'absolute',
              bottom: 0,

              alignSelf: 'center',
              fontSize: 20,
              justifyContent: 'center',
              fontFamily: 'Acme-Regular',
            }}>
            Town Bus
          </Text>
        </View>

        <Card
          style={{
            marginTop: '10%',
            padding: 10,
            margin: 0,
            alignSelf: 'center',
            fontSize: 20,
          }}>
          <Text
            style={{
              justifyContent: 'center',
              fontFamily: 'SourceSansPro-Regular',
            }}>
            {'       '}
            It is a big problem for any new resident who may not know the local
            language in any city to follow the bus systems and know which bus to
            take or the current location of the user or bus stops surrounding
            the user.
          </Text>
        </Card>

        <Card
          style={{
            padding: 10,
            margin: 10,
            alignSelf: 'center',
            fontSize: 20,
          }}>
          <Text
            style={{
              justifyContent: 'center',
              fontFamily: 'SourceSansPro-Regular',
            }}>
            So our app overcomes these struggles and helps the troubled
            citizens, thus making the journey easier and saving a tremendous
            amount of time.
          </Text>
        </Card>
        <Card
          style={{
            padding: 10,
            margin: 10,
            alignSelf: 'center',
            fontSize: 20,
          }}>
          <Button
            onPress={() => {
              this.sendEmail(
                'abinashraja99@gmail.com;jeevaram2000@gmail.com;keshore.gunaa@gmail.com;',
                'Town Bus Application - Suggestions or Feedback Reg.',
                '',
              ).then(() => {});
            }}
            title="Give suggestions or feeback"
            color="#00a896"
          />
        </Card>
      </>
    );
  }
}
