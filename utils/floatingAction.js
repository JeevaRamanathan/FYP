import {FloatingAction} from 'react-native-floating-action';
import React from 'react';
const actions = [
  {
    text: 'Where Am I?',
    // name: 'bt_accessibility',
    position: 3,
  },
  {
    text: 'About the App',
    // name: 'bt_language',
    position: 2,
  },
  {
    text: 'How the app works?',
    // name: 'bt_room',
    position: 1,
  },
];

export default class Floating extends React.Component {
  render() {
    return (
      <FloatingAction
        actions={actions}
        // style={{marginBottom: 30}}
        color="black"
        distanceToEdge={{vertical: 57, horizontal: 30}}
        // distanceToEdge={{ vertical: '50', horizontal: '30'}}
        onPressItem={(name) => {
          console.log(`selected button: ${name}`);
        }}
      />
    );
  }
}
