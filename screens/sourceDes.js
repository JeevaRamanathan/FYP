import database from '@react-native-firebase/database';
import React from 'react';
import {Text} from 'react-native';
import Connectivity from './Connectivity'
export default class SourceDes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
    };
  }
  componentDidMount() {
    new Connectivity().CheckConnectivity(this.props);
    database()
      .ref(`/Routes/r${this.props.value}`)
      .on('value', (snap) => {
        console.log(
          snap.val().intermediate[0] +
            '-' +
            snap.val().intermediate[snap.val().intermediate.length - 1],
        );
        
        let toandfro = this.props.toandfro == 0 ? ' → ' : ' ⇋ ';
        this.setState({
          val:
            snap.val().intermediate[0] +
            toandfro +
            snap.val().intermediate[snap.val().intermediate.length - 1],
        });
      });
  }
  render() {
    return (
      <>
        <Text>{this.state.val}</Text>
      </>
    );
  }
}
