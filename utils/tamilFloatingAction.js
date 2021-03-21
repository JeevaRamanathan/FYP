import {FloatingAction} from 'react-native-floating-action';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const actions = [
  {
    text: 'நான் எங்கே இருக்கிறேன்?',
    name: 'CurrentLocation',
    color: '#fc777d',
    icon: <Entypo name="location-pin" size={20} color="white" />,
    position: 3,
  },
  {
    text: 'செயலியை பற்றி',
    name: 'bt_about',
    color: '#fc777d',
    icon: (
      <MaterialCommunityIcons
        name="information-variant"
        size={20}
        color="white"
      />
    ),
    position: 2,
  },
  {
    text: 'செயலி எவ்வாறு இயங்குகிறது?',
    color: '#fc777d',
    name: 'bt_howtheappworks',
    icon: <Feather name="settings" size={20} color="white" />,
    position: 1,
  },
];

export default class TamilFloating extends React.Component {
  render() {
    return (
      <FloatingAction
        actions={actions}
        // style={{marginBottom: 30}}
        floatingIcon={
          <MaterialCommunityIcons
            name="map-marker-question"
            size={30}
            color="white"
          />
        }
        color="#de4950"
        showBackground={false}
        distanceToEdge={{vertical: 59, horizontal: 30}}
        // distanceToEdge={{ vertical: '50', horizontal: '30'}}
        onPressItem={(name) => {
          this.props.value.navigation.navigate(name);
        }}
      />
    );
  }
}
