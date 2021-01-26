import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import HeaderBar from './Header';
import LottieView from 'lottie-react-native';
import database from '@react-native-firebase/database';
class BusList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      source:this.props.navigation.state.params.s,
      destination:this.props.navigation.state.params.d,
      routes:[],
      bus:[],
    }
  }
  componentDidMount() {
    database()
      .ref('Routes')
      .on('value', (snapshot) => {
        snapshot.forEach(element => {
          if (element.val().toandfro==1 && element.val().intermediate.includes(this.state.source) && element.val().intermediate.includes(this.state.destination))
            {
              this.state.routes.push(element.val().route_id)
              // console.log("-",element.val().route_id);
                  // database()
                  // .ref('bus')
                  // .on('value', (snapshot1) => {
                  //   snapshot1.forEach((element1) =>
                  //   {
                  //     // console.log(element1.val().route_id," ----- ",element.val().route_id );
                  //     // console.log(typeof(element.val().route_id));
                  //     if (element1.val().route_id.includes(element.val().route_id))
                  //     {
                  //       console.log(element1.val());
                  //       // this.state.bus.push(element1.val())
                  //     let  a= this.state.bus
                  //       a.push(element1.val())
                  //       this.setState({bus:a})
                  //     }
                  //   });

                  // });
            }
            else if(element.val().toandfro==0 && element.val().intermediate.includes(this.state.source) && element.val().intermediate.includes(this.state.destination) && (element.val().intermediate.indexOf(this.state.source) < element.val().intermediate.indexOf(this.state.destination)) )
            {
              this.state.routes.push(element.val().route_id)
              // console.log("^^^^^^",element.val().intermediate.indexOf(this.state.source));
            }
        });
        console.log(this.state.routes);
        // console.log(this.state.bus);
        // this.setState({values: snapshot.val()});
        // this.setState({filterSearchValues: snapshot.val()});
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
    textAlign:'center'
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
