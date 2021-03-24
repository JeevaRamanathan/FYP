import {FloatingAction} from 'react-native-floating-action';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {Alert} from 'react-native';

const actions = [
  {
    text: 'நான் எங்கே இருக்கிறேன்?',
    name: 'CurrentLocation',
    textStyle: {fontSize: 9},
    color: '#fc777d',
    icon: <Entypo name="location-pin" size={20} color="white" />,
    position: 4,
  },
  {
    text: 'பேருந்து நிறுத்ததின் பெயரைக் கண்டறியவும்',
    textStyle: {fontSize: 9},
    name: 'TFindBusStop',
    color: '#fc777d',
    icon: <MaterialIcons name="find-in-page" size={20} color="white" />,
    position: 1,
  },
  {
    text: 'செயலியை பற்றி',
    textStyle: {fontSize: 9},
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
    text: 'செயலி எவ்வாறு இயங்குகிறது?',
    color: '#fc777d',
    textStyle: {fontSize: 9},
    name: 'HowItWorks',
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
          console.log(name);
          if (name == 'AboutTheApp' || name == 'HowItWorks') {
            console.log('on');
            Alert.alert('இந்த அம்சம் விரைவில் சேர்க்கப்படும்');
          } else {
            this.props.value.navigation.navigate(name);
          }
        }}
      />
    );
  }
}
