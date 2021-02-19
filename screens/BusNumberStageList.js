import React from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import database from '@react-native-firebase/database';

export default class BusNumberRouteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busStage: this.props.navigation.state.params.data.value.name,
      initialRoute: [],
      busId: [],
      busDetails: [],
    };
  }
  componentDidMount() {
    database()
      .ref('Routes/')
      .on('value', (snap) => {
        this.setState({initialRoute: snap.val()}, () =>
          Object.values(this.state.initialRoute).forEach((element) => {
            if (element.intermediate.includes(this.state.busStage)) {
              this.state.busId.push(element.bus_id);
            }
          }),
        );
        var mer = [].concat.apply([], this.state.busId);
        this.setState({busId: mer}, () => {
          var b = [...new Set(this.state.busId)];
          for (var i = 0; i < b.length; i++) {
            database()
              .ref(`bus/b${b[i]}`)
              .on('value', (snap) => {
                var a = this.state.busDetails;
                a.push(snap.val());
                this.setState({busDetails: a});
              });
          }
        });
      });
  }
  render() {
    //map the this.state.busDetails
    //in onPress pass the route id to the next page

    // this.props.navigation.navigate('page to naviate', {
    //   data: {value: ....state......route_id},
    // })

    //follow the design in busNumber.js
    return <></>;
  }
}
