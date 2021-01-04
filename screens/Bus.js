import React from 'react';
import {View, Text} from 'react-native';
import HeaderBar from './Header';
class Bus extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
         <HeaderBar />
        <Text>Bus</Text>
      </View>
    );
  }
}
export default Bus;