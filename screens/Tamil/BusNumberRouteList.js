import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import database from '@react-native-firebase/database';
import StepIndicator from 'react-native-step-indicator';
import {CustomPicker} from 'react-native-custom-picker';
import {ListItem} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import TamilMapFloating from '../../utils/mapFloating';
import Connectivity from './Connectivity';

const customStyles = {
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

export default class BusNumberRouteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route_id: this.props.navigation.state.params.data.value,
      route_details: [],
      selectedValue: 0,
    };
  }
  async componentDidMount() {
    new Connectivity().CheckConnectivity(this.props);
    for (var i = 0; i < this.state.route_id.length; i++) {
      await database()
        .ref(`Tamil/Routes/r${this.state.route_id[i]}`)
        .on('value', (snapshot) => {
          let arr = this.state.route_details;
          arr.push(snapshot.val());
          this.setState({route_details: arr});
        });
    }
  }
  renderOption(settings) {
    const {item, getLabel} = settings;
    let toandfro = item.toandfro == 0 ? ' → ' : ' ⇋ ';
    return (
      <>
        <ListItem bottomDivider>
          <Image
            source={require('../../assets/multiple.png')}
            style={{height: 30, width: 30, borderRadius: 10}}
          />
          <ListItem.Content>
            <ListItem.Title>
              <Text
                style={{
                  fontFamily: 'SourceSansPro-Regular',
                  fontSize: 17,
                  fontWeight: 'bold',
                  marginRight: 10,
                }}>
                {getLabel(item.source + toandfro + item.destination)}
              </Text>
            </ListItem.Title>
            <ListItem.Subtitle>
              <Text
                style={{
                  fontFamily: 'SourceSansPro-Regular',
                }}>
                {item.via != '' ? '(' + item.via + ')' : ''}
              </Text>
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </>
    );
  }

  renderHeader() {
    return (
      <>
        <View style={{alignContent: 'center'}}>
          <View style={{backgroundColor: 'white'}}>
            <View style={{backgroundColor: '#ebc550', height: 35}}>
              <Text
                style={{
                  fontFamily: 'SourceSansPro-Regular',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  textAlignVertical: 'center',
                }}>
                Routes
              </Text>
            </View>
          </View>
        </View>
      </>
    );
  }
  renderField(settings) {
    const {selectedItem, defaultText, getLabel, clear} = settings;
    return (
      <>
        <View
          style={{
            paddingLeft: 15,
            paddingRight: 15,
          }}>
          <Text
            style={{
              color: '#89909a',
              textAlign: 'center',
            }}>
            {getLabel(defaultText)}
          </Text>
        </View>
        <AntDesign
          name="caretdown"
          size={13}
          style={{
            right: 15,
            position: 'absolute',
            marginTop: 3,
            color: '#89909a',
          }}
        />
      </>
    );
  }
  render() {
    let arr = [];
    arr.push('1');

    return (
      <>
        {this.state.route_details.length == 0 ? (
          <View></View>
        ) : (
          <>
            <View
              style={{
                width: '100%',
                height: 68,
                backgroundColor: '#393e42',
              }}>
              <View
                style={{
                  height: 50,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginRight: 10,
                  marginTop: 10,
                  width: '95%',
                  borderRadius: 18,
                  backgroundColor: '#303338',

                  justifyContent: 'center',
                }}>
                <CustomPicker
                  modalAnimationType="slide"
                  style={{color: '#89909a'}}
                  clearImage={this.clearImage}
                  placeholder={
                    this.state.route_details[Number(this.state.selectedValue)]
                      .source +
                    ' - ' +
                    this.state.route_details[Number(this.state.selectedValue)]
                      .destination
                  }
                  // getLabel={(mapitem) =>
                  //   this.state.route_details[Number(this.state.selectedValue)]
                  //     .source +
                  //   ' - ' +
                  //   this.state.route_details[Number(this.state.selectedValue)]
                  //     .destination
                  // }
                  options={this.state.route_details}
                  optionTemplate={this.renderOption}
                  headerTemplate={this.renderHeader}
                  fieldTemplate={this.renderField}
                  onValueChange={(itemValue, itemIndex) => {
                    this.setState({
                      selectedValue: this.state.route_details.indexOf(
                        itemValue,
                      ),
                    });
                  }}
                />
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#ebc550',
                height: 50,
                marginTop: -2,
                width: '100%',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'SourceSansPro-Regular',
                  textAlign: 'center',
                  fontSize: 13,
                }}>
                {
                  this.state.route_details[Number(this.state.selectedValue)][
                    'source'
                  ]
                }

                {this.state.route_details[Number(this.state.selectedValue)]
                  .toandfro == 0
                  ? ' → '
                  : ' ⇋ '}

                {
                  this.state.route_details[Number(this.state.selectedValue)][
                    'destination'
                  ]
                }
                {this.state.route_details[Number(this.state.selectedValue)][
                  'via'
                ] == ''
                  ? ''
                  : '(' +
                    this.state.route_details[Number(this.state.selectedValue)]
                      .via +
                    ')'}
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
                  stepCount={Number(
                    this.state.route_details[Number(this.state.selectedValue)]
                      .intermediate.length,
                  )}
                  customStyles={customStyles}
                  labels={
                    this.state.route_details[Number(this.state.selectedValue)]
                      .intermediate
                  }
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

            <TamilMapFloating
              value={this.props}
              value1={this.state}
              name={'Map'}
            />
          </>
        )}
      </>
    );
  }
}
