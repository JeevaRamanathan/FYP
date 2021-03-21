import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import axios from 'axios'
import SourceDes from './sourceDes';
import LottieView from 'lottie-react-native';
import {ListItem} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import database from '@react-native-firebase/database';
import {Card} from 'react-native-paper';
import Connectivity from './Connectivity'
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';
export default class JunctionPoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.value,
      r1: [],
      r2: [],
      r1RouteId: [],
      r2RouteId: [],
      r1BusId: [],
      r2BusId: [],
      r1BusDetails: [],
      r2BusDetails: [],
      r1Index: [],
      r2Index: [],
      s2jtoandfro: [],
      j2dtoandfro: [],
      srcCoordinates:{},
      desCoordinates:{}
    };
  }

 
  componentDidMount() {
    new Connectivity().CheckConnectivity(this.props);
    database().ref('busstop').on('value',(snap)=>{
      snap.val().filter((elem)=>{
        if(elem.name===this.state.details.source){
          this.setState({srcCoordinates:elem})
        }
        else if(elem.name === this.state.details.destination)
        {
          this.setState({desCoordinates:elem})
        }
    });
    
    })
    //s2j
    database()
      .ref('Routes')
      .on('value', (snapshot) => {
        snapshot.forEach((element) => {
          if (
            element.val().toandfro == 1 &&
            element.val().intermediate.includes(this.state.details.source) &&
            element.val().intermediate.includes(this.state.details.JPValue)
          ) {
            this.state.r1.push(element.val());
          } else if (
            element.val().toandfro == 0 &&
            element.val().intermediate.includes(this.state.details.source) &&
            element.val().intermediate.includes(this.state.details.JPValue) &&
            element.val().intermediate.indexOf(this.state.details.source) <
              element.val().intermediate.indexOf(this.state.details.JPValue)
          ) {
            this.state.r1.push(element.val());
          }
        });
        for (var i = 0; i < this.state.r1.length; i++) {
          let a = this.state.r1RouteId;
          a.push(this.state.r1[i].route_id);
          this.setState({r1RouteId: a});

          let b = this.state.r1BusId;
          b.push(this.state.r1[i].bus_id);
          this.setState({r1BusId: b});

          let c = this.state.s2jtoandfro;
          let tempArr = new Array(this.state.r1[i].bus_id.length).fill(
            this.state.r1[i].toandfro,
          );
          this.setState({s2jtoandfro: [...this.state.s2jtoandfro, ...tempArr]});
        }

        let mergedBusId = [].concat.apply([], this.state.r1BusId);
        for (var x = 0; x < this.state.r1BusId.length; x++) {
          for (var y = 0; y < this.state.r1BusId[x].length; y++) {
            this.state.r1Index.push(this.state.r1RouteId[x]);
          }
        }

        for (var j = 0; j < mergedBusId.length; j++) {
          database()
            .ref(`bus/b${mergedBusId[j]}`)
            .on('value', (snap) => {
              let c = this.state.r1BusDetails;
              c.push(snap.val());
              this.setState({r1BusDetails: c});
            });
        }
      });

    //j2d
    database()
      .ref('Routes')
      .on('value', (snapshot) => {
        snapshot.forEach((element) => {
          if (
            element.val().toandfro == 1 &&
            element.val().intermediate.includes(this.state.details.JPValue) &&
            element.val().intermediate.includes(this.state.details.destination)
          ) {
            this.state.r2.push(element.val());
          } else if (
            element.val().toandfro == 0 &&
            element.val().intermediate.includes(this.state.details.JPValue) &&
            element
              .val()
              .intermediate.includes(this.state.details.destination) &&
            element.val().intermediate.indexOf(this.state.details.JPValue) <
              element.val().intermediate.indexOf(this.state.details.destination)
          ) {
            this.state.r2.push(element.val());
          }
        });

        for (var i = 0; i < this.state.r2.length; i++) {
          let a = this.state.r2RouteId;
          a.push(this.state.r2[i].route_id);
          this.setState({r2RouteId: a});

          let b = this.state.r2BusId;
          b.push(this.state.r2[i].bus_id);
          this.setState({r2BusId: b});

          let c = this.state.j2dtoandfro;
          let tempArr = new Array(this.state.r2[i].bus_id.length).fill(
            this.state.r2[i].toandfro,
          );
          this.setState({j2dtoandfro: [...this.state.j2dtoandfro, ...tempArr]});
        }
        let mergedBusId = [].concat.apply([], this.state.r2BusId);

        for (var x = 0; x < this.state.r2BusId.length; x++) {
          for (var y = 0; y < this.state.r2BusId[x].length; y++) {
            this.state.r2Index.push(this.state.r2RouteId[x]);
          }
        }
        for (var j = 0; j < mergedBusId.length; j++) {
          database()
            .ref(`bus/b${mergedBusId[j]}`)
            .on('value', (snap) => {
              let c = this.state.r2BusDetails;
              c.push(snap.val());
              this.setState({r2BusDetails: c});
            });
        }
      });
  }
  render() {
    return (
      <>
        {this.state.r1BusDetails.length == 0 &&
        this.state.r2BusDetails.length == 0 ? (
          <LottieView
            source={require('../assets/Bus.json')}
            loop={true}
            autoPlay={true}
            progress={0}
            speed={3}
          />
        ) : (
          <>
            <View
              style={{
                color: 'red',

                width: '100%',
                backgroundColor: '#303338',
              }}>
              <Text
                style={{
                  fontFamily: 'SourceSansPro-Regular',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: 'white',
                  textAlignVertical: 'center',
                }}>
                There is no direct bus available for this route.
              </Text>

              <View
                style={{
                  borderBottomColor: '#737373',
                  borderBottomWidth: 1,
                }}></View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  color: 'red',

                  width: '100%',
                  backgroundColor: '#303338',
                }}>
                <View>
                  <Text
                    style={{
                      fontFamily: 'SourceSansPro-Regular',
                      //   fontWeight: 'bold',
                      textAlign: 'center',
                      color: 'white',
                    }}>
                    {this.state.details.source} {' - '}
                  </Text>

                  <Text
                    style={{
                      fontFamily: 'SourceSansPro-Regular',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: 'red',
                    }}>
                    {this.state.details.JPValue}
                  </Text>

                  <Text
                    style={{
                      fontFamily: 'SourceSansPro-Regular',
                      //   fontWeight: 'bold',
                      textAlign: 'center',
                      color: 'white',
                    }}>
                    {' - '} {this.state.details.destination}
                  </Text>
                </View>
              </View>
            </View>
            <ScrollView>
              {/* s2j */}
              <Card
                style={{
                  alignSelf: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  backgroundColor: '#fff',
                  width: '100%',
                  padding: 20,
                  paddingBottom: 22,

                  borderRadius: 8,
                  shadowOpacity: 80,
                  elevation: 15,
                  marginTop: 10,
                }}>
                <Collapse>
                  <CollapseHeader>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={require('../assets/multiple.png')}
                        style={{height: 30, width: 30, borderRadius: 10}}
                      />

                      <View
                        style={{
                          width: '95%',
                          flexDirection: 'row',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            fontFamily: 'SourceSansPro-Regular',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            justifyContent: 'center',
                            textAlignVertical: 'center',
                            marginLeft: 2,
                          }}>
                          {this.state.details.source} -{' '}
                          {this.state.details.JPValue}{' '}
                        </Text>
                        <MaterialIcons
                          style={{position: 'absolute', right: 1}}
                          name="arrow-drop-down"
                          size={30}
                        />
                      </View>
                    </View>
                  </CollapseHeader>
                  <CollapseBody>
                    <View
                      style={{
                        borderBottomColor: '#737373',
                        borderBottomWidth: 1,
                      }}></View>
                    {this.state.r1BusDetails.map((value, i) => {
                      return (
                        <TouchableOpacity
                          onPress={() =>
                            this.props.prop.navigation.navigate(
                              'RouteSearchRouteList',
                              {
                                value: this.state.r1Index[i],
                                source: this.state.details.source,
                                destination: this.state.details.destination,
                                JPValue: this.state.details.JPValue,
                                name: value.busname,
                                from: 'JPs2j',
                                toandfro: this.state.s2jtoandfro[i],
                              },
                            )
                          }>
                          <ListItem bottomDivider key={i}>
                            <Image
                              source={require('../assets/busno.png')}
                              style={{
                                height: 30,
                                width: 30,
                                borderRadius: 10,
                              }}
                            />

                            <ListItem.Content>
                              <ListItem.Title>
                                <View syle={{flexDirection: 'row'}}>
                                  <Text
                                    style={{
                                      fontFamily: 'SourceSansPro-Regular',
                                      fontSize: 17,
                                      fontWeight: 'bold',
                                    }}>
                                    {value.busname}
                                  </Text>
                                </View>
                              </ListItem.Title>
                              <ListItem.Subtitle>
                                <Text
                                  style={{
                                    fontFamily: 'SourceSansPro-Regular',
                                  }}>
                                  <SourceDes
                                    value={this.state.r1Index[i]}
                                    toandfro={this.state.s2jtoandfro[i]}
                                  />
                                </Text>
                              </ListItem.Subtitle>
                            </ListItem.Content>
                          </ListItem>
                        </TouchableOpacity>
                      );
                    })}
                  </CollapseBody>
                </Collapse>
              </Card>
              {/* j2d */}

              <Card
                style={{
                  alignSelf: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  backgroundColor: '#fff',
                  width: '100%',
                  padding: 20,
                  paddingBottom: 22,
                  borderRadius: 8,
                  shadowOpacity: 80,
                  elevation: 15,
                  marginTop: 10,
                }}>
                <Collapse>
                  <CollapseHeader>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={require('../assets/multiple.png')}
                        style={{height: 30, width: 30, borderRadius: 10}}
                      />
                      <View
                        style={{
                          width: '95%',
                          flexDirection: 'row',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            fontFamily: 'SourceSansPro-Regular',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            justifyContent: 'center',
                            textAlignVertical: 'center',
                            marginLeft: 2,
                          }}>
                          {this.state.details.JPValue} -{' '}
                          {this.state.details.destination}
                        </Text>
                        <MaterialIcons
                          style={{position: 'absolute', right: 2}}
                          name="arrow-drop-down"
                          size={30}
                        />
                      </View>
                    </View>
                  </CollapseHeader>
                  <CollapseBody>
                    <View
                      style={{
                        borderBottomColor: '#737373',
                        borderBottomWidth: 1,
                      }}></View>
                    {this.state.r2BusDetails.map((value, i) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            this.props.prop.navigation.navigate(
                              'RouteSearchRouteList',
                              {
                                value: this.state.r2Index[i],
                                source: this.state.details.source,
                                destination: this.state.details.destination,
                                name: value.busname,
                                JPValue: this.state.details.JPValue,
                                from: 'JPj2d',
                                toandfro: this.state.j2dtoandfro[i],
                              },
                            );
                          }}>
                          <ListItem bottomDivider key={i}>
                            <Image
                              source={require('../assets/busno.png')}
                              style={{
                                height: 30,
                                width: 30,
                                borderRadius: 10,
                              }}
                            />

                            <ListItem.Content>
                              <ListItem.Title>
                                <View syle={{flexDirection: 'row'}}>
                                  <Text
                                    style={{
                                      fontFamily: 'SourceSansPro-Regular',
                                      fontSize: 17,
                                      fontWeight: 'bold',
                                    }}>
                                    {value.busname}
                                  </Text>
                                </View>
                              </ListItem.Title>
                              <ListItem.Subtitle>
                                <Text
                                  style={{
                                    fontFamily: 'SourceSansPro-Regular',
                                  }}>
                                  <SourceDes
                                    value={this.state.r2Index[i]}
                                    toandfro={this.state.j2dtoandfro[i]}
                                  />
                                </Text>
                              </ListItem.Subtitle>
                            </ListItem.Content>
                          </ListItem>
                        </TouchableOpacity>
                      );
                    })}
                  </CollapseBody>
                </Collapse>
              </Card>
              <View style={{ marginTop: 30}}>
              <Text style={{textAlign:'center', fontFamily: 'SourceSansPro-Regular',
                                      fontSize: 17,}}>You can also use OLA services to reach the destination</Text>
              <TouchableOpacity
                activeOpacity={0.7 }
                onPress={()=>this.props.prop.navigation.navigate('OlaService',{value:{srcCoordinates:this.state.srcCoordinates,desCoordinates:this.state.desCoordinates}})}
                style={{
                 alignSelf: 'center',
                 flexDirection: 'row',
                 justifyContent: 'center',
                 backgroundColor: '#fff',
                 width: '90%',
                 height:"90%", 
                 borderRadius: 8,
                
              }}>
              
                <Image style={{height:100,width:"60%",resizeMode:'stretch'}} source={require('../assets/ola-logo.png')}/>
              </TouchableOpacity>
                {/* </View> */}
                </View>
            </ScrollView>
          </>
        )}
      </>
    );
  }
}
