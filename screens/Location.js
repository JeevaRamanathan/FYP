import React from 'react';
import {View, Text} from 'react-native';
import Floating from '../utils/floatingAction';
import HeaderBar from './Header';
class Location extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
      <View>
        <HeaderBar />
        <Text>Location</Text>
      </View>
      <Floating />
      </>
    );
  }
}
export default Location;
