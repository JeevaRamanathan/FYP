import React from 'react';

import { WebView } from 'react-native-webview'; 
export default class OlaService extends React.Component{
    
    render(){
        var params = this.props.navigation.state.params.value
        console.log(`https://book.olacabs.com/?lat=${params.srcCoordinates.latitude}&lng=${params.srcCoordinates.longitude}&category=compact&utm_source=12343&drop_lat=${params.desCoordinates.latitude}&drop_lng=${params.desCoordinates.longitude}&dsw=yes`)
        return(
            // <></>
            <WebView source={{ uri: `https://book.olacabs.com/?lat=${params.srcCoordinates.latitude}&lng=${params.srcCoordinates.longitude}&category=compact&utm_source=12343&drop_lat=${params.desCoordinates.latitude}&drop_lng=${params.desCoordinates.longitude}&dsw=yes` }}/>
        );
    }
}
