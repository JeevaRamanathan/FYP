import React from 'react';
import {View, Text} from 'react-native';
import HeaderBar from './Header';
class BusList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <HeaderBar />
        <Text>BusList</Text>
      </View>
    );
  }
}
export default BusList;
