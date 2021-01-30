import React from 'react';
import {Text, View,ScrollView,Image} from 'react-native';

class Bot extends React.Component {
    constructor(props) {
      super(props);
      
      };
      render() {
          return(
              <View>
                  <Text>Bot</Text>
                  {/* <Image source={require('../assets/bot.gif')} style={{width:'100',height:'100'}} /> */}
              </View>
          );
      }
    }

export default Bot;