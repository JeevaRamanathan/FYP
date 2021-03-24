import {FloatingAction} from 'react-native-floating-action';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

const actions = [
  {
    text: 'Where Am I?',
    name: 'CurrentLocation',
    color: '#fc777d',
    icon: <Entypo name="location-pin" size={20} color="white" />,
    position: 4,
  },
  {
    text: 'Find Bus Stop Name',
    name: 'FindBusStop',
    color: '#fc777d',
    icon: <MaterialIcons name="find-in-page" size={20} color="white" />,
    position: 1,
  },
  {
    text: 'About the App',
    name: 'AboutTheApp',
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
    text: 'How the app works?',
    color: '#fc777d',
    name: 'HowItWorks',
    icon: <Feather name="settings" size={20} color="white" />,
    position: 1,
  },
];

export default class Floating extends React.Component {
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
