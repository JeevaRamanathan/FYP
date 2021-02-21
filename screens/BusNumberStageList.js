import React from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import database from '@react-native-firebase/database';
import LottieView from 'lottie-react-native';
import {ListItem, Avatar, SearchBar} from 'react-native-elements';
export default class BusNumberRouteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busStage: this.props.navigation.state.params.data.value.name,
      initialRoute: [],
      busId: [],
      busDetails: [],
    };
  }
  componentDidMount() {
    database()
      .ref('Routes/')
      .on('value', (snap) => {
        this.setState({initialRoute: snap.val()}, () =>
          Object.values(this.state.initialRoute).forEach((element) => {
            if (element.intermediate.includes(this.state.busStage)) {
              this.state.busId.push(element.bus_id);
            }
          }),
        );
        var mer = [].concat.apply([], this.state.busId);
        this.setState({busId: mer}, () => {
          var b = [...new Set(this.state.busId)];
          for (var i = 0; i < b.length; i++) {
            database()
              .ref(`bus/b${b[i]}`)
              .on('value', (snap) => {
                var a = this.state.busDetails;
                a.push(snap.val());
                this.setState({busDetails: a});
              });
          }
        });
      });
  }
  render() {
    return (
      <>
        {this.state.busDetails.length == 0 ? (
          <View style={{height: '80%', width: '100%'}}>
            {/* Activity Indicator until it fetches the data*/}
            <LottieView
              source={require('../assets/Bus.json')}
              loop={true}
              autoPlay={true}
              progress={0}
              speed={3}
            />
          </View>
        ) : (
          <ScrollView>
            <View style={{paddingBottom: 50}}>
              {Object.keys(this.state.busDetails).map((l, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() =>
                    this.props.navigation.navigate('BusNumberRouteList', {
                      data: {value: this.state.busDetails[l].route_id},
                    })
                  }>
                  <ListItem bottomDivider>
                    <Image
                      source={require('../assets/busno.png')}
                      style={{height: 30, width: 30, borderRadius: 10}}
                    />
                    <ListItem.Content>
                      <View style={{marginTop: 16}}>
                        <ListItem.Title>
                          <View syle={{flexDirection: 'row'}}>
                            <Text
                              style={{
                                fontFamily: 'SourceSansPro-Regular',
                                fontSize: 17,
                                fontWeight: 'bold',
                              }}>
                              {this.state.busDetails[l].busname}
                            </Text>
                          </View>
                        </ListItem.Title>
                      </View>
                      <ListItem.Subtitle>
                        {/* <Text
                          style={{
                            fontFamily: 'SourceSansPro-Regular',
                          }}>
                          Travels in{' '}
                          {this.state.busDetails[l].route_id.length}{' '}
                          routes.
                        </Text> */}
                      </ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        )}
      </>
    );
  }
}
