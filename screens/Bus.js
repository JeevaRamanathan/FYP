import React from 'react';
import Floating from '../utils/floatingAction';
import {View, Text} from 'react-native';
import HeaderBar from './Header';
class Bus extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <View>
          <HeaderBar />
          <Text>Bus</Text>
        </View>
        <Floating />
      </>
    );
  }
}
export default Bus;
