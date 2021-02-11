import React from 'react';
import SwitchNavigation from './screens/navigation/SwitchNavigation';
import Map from './screens/Map'
import Polymap from './screens/Polymap'
export default class App extends React.Component {
  render() {
    return (
      <>
        {/* <SwitchNavigation /> */}
        <Map />
        {/* <Polymap /> */}
      </>
    );
  }
}
