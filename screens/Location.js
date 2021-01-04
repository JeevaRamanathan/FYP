import React from 'react';
import {View, Text} from 'react-native';
import HeaderBar from './Header';
class Location extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <HeaderBar />
        <Text>Location</Text>
      </View>
    );
  }
}
export default Location;
