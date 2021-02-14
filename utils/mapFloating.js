import {FloatingAction} from 'react-native-floating-action';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

export default class MapFloating extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FloatingAction
        floatingIcon={
          <MaterialCommunityIcons
            name="map-marker-path"
            size={30}
            color="white"
          />
        }
        color="#de4950"
        showBackground={false}
        distanceToEdge={{vertical: 20, horizontal: 20}}
        onPressBackdrop={() => console.log('55')}
        // distanceToEdge={{ vertical: '50', horizontal: '30'}}
        onPressMain={() => {
          this.props.name == 'Map'
            ? this.props.value.navigation.navigate(this.props.name, {
                value: this.props.value,
                value1: this.props.value1,
              })
            : this.props.value.navigation.navigate(this.props.name, {
                value: this.props.value,
                value1: this.props.value1,
              });
        }}
      />
    );
  }
}
