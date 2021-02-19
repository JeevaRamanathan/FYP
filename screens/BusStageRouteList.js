import React from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import MapFloating from '../utils/mapFloating';
import database from '@react-native-firebase/database';

export default class BusNumberRouteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route_id: this.props.navigation.state.params.data.value,
      route_details: [],
    };
  }
  componentDidMount() {
    //won't work until you pass the data in previous page
    for (var i = 0; i < this.state.route_id.length; i++) {
      database()
        .ref(`/Routes/r${this.state.route_id[i]}`)
        .on('value', (snapshot) => {
          let arr = this.state.route_details;
          arr.push(snapshot.val());
          this.setState({route_details: arr});
        });
    }
  }
  render() {
    //follow the design and flow as in BusNumberRouteList.js
    return <></>;
  }
}
