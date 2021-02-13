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
import Modal from 'react-native-modal';
import {ListItem} from 'react-native-elements';
import HeaderBar from './Header';
import LottieView from 'lottie-react-native';
import database from '@react-native-firebase/database';
import {and} from 'react-native-reanimated';
class BusList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: this.props.navigation.state.params.s,
      destination: this.props.navigation.state.params.d,
      routes: [],
      bus: [],
      arr: [],
      rid: [],
      via: [],
      finalBusVia: [],
      refinalBusVia: [],
      flag: 0,
      modal: false,
      busList: [],
      selectedBusId: [],
      dummyVariable:''
    };
  }
  async fn(i)
  {
    var arr = [];
    for (var j = 0; j < this.state.bus[i].length; j++) {
       database()
       .ref(`Routes/r${this.state.rid[this.state.bus[i][j]]}`)
       .on('value', (snap) => {
         arr = this.state.selectedBusId;
         arr.push(snap.val().bus_id);
         console.log(arr + '____');
         var min1 = new Date().getMinutes()
         var sec2 = new Date().getMilliseconds();
         console.log(min1,sec2);
         this.setState({selectedBusId: arr});
         this.state.dummyVariable="Lsts"
         console.log(this.state.selectedBusId+"}}}"+this.state.selectedBusId.length);
       });
      
   }
  }
  async viaBusNo(i){
    console.log(i);
    
    // var min = new Date().getMinutes()
    // var sec = new Date().getMilliseconds();
    // console.log(min,sec);
    // console.log(this.state.rid + '---00');
    // this.state.dummyVariable="BUs"
    await this.fn(i);
    
   console.log(this.state.selectedBusId+"******************"+this.state.selectedBusId.length);
    // this.print();
    // console.log(this.state.dummyVariable);
    console.log(this.state.selectedBusId+"898989898989898");
    // database()
    //   .ref(`Routes/r${i}`)
    //   .on('value', (snapshot) => {
    //     this.setState({selectedBusId: snapshot.val().bus_id});
    //   });
    // for (var i = 0; i < this.state.selectedBusId.length; i++) {
    //   console.log(this.state.selectedBusId[i]);
    // }
  };
  print() {
    var min = new Date().getMinutes()
    var sec = new Date().getMilliseconds();
    console.log(min,sec);
   console.log(this.state.selectedBusId + '_+_+_++');
    console.log(this.state.dummyVariable);

  }

  componentDidMount() {
    let flag = 0;
    database()
      .ref('Routes')
      .on('value', (snapshot) => {
        snapshot.forEach((element) => {
          if (
            element.val().toandfro == 1 &&
            element.val().intermediate.includes(this.state.source) &&
            element.val().intermediate.includes(this.state.destination)
          ) {
            this.state.routes.push(element.val());
          } else if (
            element.val().toandfro == 0 &&
            element.val().intermediate.includes(this.state.source) &&
            element.val().intermediate.includes(this.state.destination) &&
            element.val().intermediate.indexOf(this.state.source) <
              element.val().intermediate.indexOf(this.state.destination)
          ) {
            this.state.routes.push(element.val());
          }
        });

        for (var i = 0; i < this.state.routes.length; i++) {
          var t = this.state.routes[i].intermediate;

          var arr = t.slice(
            this.state.routes[i].intermediate.indexOf(this.state.source),
            this.state.routes[i].intermediate.indexOf(this.state.destination) +
              1,
          );
          let a = this.state.arr;
          a.push(arr);
          this.setState({arr: a});
          let b = this.state.rid;
          b.push(this.state.routes[i].route_id);
          this.setState({rid: b});
          let c = this.state.via;
          c.push(this.state.routes[i].via);
          this.setState({via: c});
          this.state.finalBusVia.push([]);
        }

        if (this.state.arr.length != 1) {
          for (
            var i = 0;
            i < this.state.arr.length;
            i++ //for routes
          ) {
            for (
              var j = 0;
              j < this.state.via[i].length;
              j++ // for via
            ) {
              for (var k = 0; k < this.state.arr[i].length; k++) {
                if (
                  this.state.arr[i][k].includes(this.state.via[i][j]) &&
                  !this.state.finalBusVia[i].includes(this.state.via[i][j]) &&
                  this.state.via[i][j] != this.state.source &&
                  this.state.via[i][j] != this.state.destination &&
                  !this.state.source.includes(this.state.via[i][j]) &&
                  !this.state.destination.includes(this.state.via[i][j])
                ) {
                  this.state.finalBusVia[i].push(this.state.via[i][j]);
                }
              }
            }
          }
          console.log(this.state.finalBusVia);
          console.log(this.state.rid);
          let stringArray = this.state.finalBusVia.map(JSON.stringify);
          let dupes = {};
          stringArray.forEach((item, index) => {
            dupes[item] = dupes[item] || [];
            dupes[item].push(index);
          });
          for (let name in dupes) {
            console.log(
              name +
                '->indexes->' +
                dupes[name] +
                '->count->' +
                dupes[name].length,
            );
            this.state.bus.push(dupes[name]);
            this.state.refinalBusVia.push(JSON.parse(name));
          }

          console.log(this.state.bus);
          console.log(this.state.refinalBusVia + '__');
          let bb = this.state.finalBusVia.filter((item) => item.length != 0);

          if (bb.length == 0 || this.state.refinalBusVia.length == 1) {
          } else {
            this.setState({modal: !this.state.modal});
          }
        } else {
          console.log(this.state.routes[0].route_id);
        }
      });
  }

  render() {
    return (
      <>
        <View style={styles.top}>
          <Text style={styles.text}>
            {this.props.navigation.state.params.s} -{' '}
            {this.props.navigation.state.params.d}
          </Text>
        </View>
        {/* <View style={{height: '100%', width: '100%'}}> */}
        {/* Activity Indicator until it fetches the data*/}
        {/* <LottieView
            source={require('../assets/Bus.json')}
            loop={true}
            autoPlay={true}
            progress={0}
            speed={3}
          /> */}
        {/* </View> */}

        <Modal
          isVisible={this.state.modal}
          onBackButtonPress={() => this.props.navigation.navigate('Home')}>
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
                  Multiple Routes Available to reach your destination
                </Text>
              </View>
              <ScrollView>
                {this.state.refinalBusVia.map((index, i) => {
                  return (
                    <ListItem
                      bottomDivider
                      key={i}
                      onPress={() => this.viaBusNo(i)}>
                      <Image
                        source={require('../assets/multiple.png')}
                        style={{height: 30, width: 30, borderRadius: 10}}
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
                              Via
                            </Text>
                          </View>
                        </ListItem.Title>
                        <ListItem.Subtitle>
                          <Text
                            style={{
                              fontFamily: 'SourceSansPro-Regular',
                            }}>
                            {index.join(', ')}
                          </Text>
                        </ListItem.Subtitle>
                      </ListItem.Content>
                    </ListItem>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </Modal>

        <ScrollView>
          <ListItem bottomDivider>
            <Image
              source={require('../assets/busno.png')}
              style={{height: 30, width: 30, borderRadius: 10}}
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
                    BusNumber
                  </Text>
                </View>
              </ListItem.Title>
              <ListItem.Subtitle>
                <Text
                  style={{
                    fontFamily: 'SourceSansPro-Regular',
                  }}>
                  Route - Route
                </Text>
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </ScrollView>
      </>
    );
  }
}
export default BusList;
const styles = StyleSheet.create({
  top: {
    backgroundColor: '#ebc550',
    height: 40,
    width: '100%',
    justifyContent: 'center', //Centered vertically
  },
  text: {
    color: '#22333b',
    fontSize: 16,
    padding: 10,
    fontFamily: 'SourceSansPro-Regular',
    textAlign: 'center',
  },
  container: {
    height: 140,
    width: '100%',
    backgroundColor: 'white',
    elevation: 7,
    borderRadius: 3,
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  text1: {
    fontFamily: 'SourceSansPro-Regular',
    textAlignVertical: 'bottom',
    fontStyle: 'italic',
    color: '#aaa',
    fontSize: 16,
    marginLeft: 20,
    marginTop: 20,
  },
});
