import database from '@react-native-firebase/database';
import StepIndicator from 'react-native-step-indicator';

import Entypo from 'react-native-vector-icons/Entypo';
import MapFloating from '../utils/mapFloating';
import React from 'react';
import {Text, View, ScrollView} from 'react-native';
const customStyles1 = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#ebc550',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: 'black ',
  stepStrokeUnFinishedColor: '#ebc550',
  separatorFinishedColor: 'black',
  separatorUnFinishedColor: 'black',
  stepIndicatorFinishedColor: 'black',
  stepIndicatorUnFinishedColor: '#22333b',
  stepIndicatorCurrentColor: '#22333b',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: 'black',
  labelSize: 15,
  currentStepLabelColor: 'black',
  lableFontFamily: 'SourceSansPro-Regular',
  labelAlign: 'flex-start',
};

export default class RouteSearchRouteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: this.props.navigation.state.params.source,
      destination: this.props.navigation.state.params.destination,
      intermediate: [],
    };
  }
  componentDidMount() {
    console.log(this.props.navigation.state.params.source);
    database()
      .ref(`Routes/r${this.props.navigation.state.params.value}`)
      .on('value', (snap) => {
        this.setState({intermediate: snap.val().intermediate});
      });
  }

  render() {
    return (
      <>
        {this.state.intermediate.length == 0 ? (
          <></>
        ) : (
          <>
            <View
              style={{
                height: 50,
                width: '100%',
                backgroundColor: '#393e42',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'SourceSansPro-Regular',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                {this.props.navigation.state.params.name}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#ebc550',
                height: 40,
                width: '100%',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#22333b',
                  fontFamily: 'SourceSansPro-Regular',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                {this.state.source} - {this.state.destination}
              </Text>
            </View>

            <View style={{marginLeft: 10, marginTop: 25, marginBottom: 100}}>
              <ScrollView>
                <StepIndicator
                  renderStepIndicator={() => (
                    <Entypo
                      name="location-pin"
                      size={15}
                      style={{color: '#aaa'}}
                    />
                  )}
                  direction="vertical"
                  stepCount={this.state.intermediate.length}
                  customStyles={customStyles1}
                  labels={this.state.intermediate}
                  renderLabel={function (
                    position,
                    stepStatus,
                    label,
                    currentPosition,
                  ) {
                    return (
                      <View
                        style={{
                          paddingLeft: 10,
                          paddingBottom: 22,
                          paddingTop: 22,
                        }}>
                        <Text>{position.label}</Text>
                      </View>
                    );
                  }}
                />
              </ScrollView>
            </View>
          </>
        )}

        <MapFloating
          value={this.props}
          value1={this.state}
          name={'RouteListMap'}
        />
      </>
    );
  }
}
