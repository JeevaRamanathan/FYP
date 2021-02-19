import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  BackHandler,
  Image,
  Keyboard,
  ScrollView,
} from 'react-native';

import HeaderBar from './Header';
import Floating from '../utils/floatingAction';
import Entypo from 'react-native-vector-icons/Entypo';

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: null,
      destination: null,
      disable: true,
    };
  }

  source = () => {
    this.props.navigation.navigate('SSource', {
      handleSource: this.handleSource,
    });
  };

  destination = () => {
    this.props.navigation.navigate('SDestination', {
      handleDestination: this.handleDestination,
    });
  };
  handleSource = (value) => {
    this.setState({source: value});
    if (this.state.destination != null) {
      this.setState({disable: false});
    }
  };
  handleDestination = (value) => {
    this.setState({destination: value});
    if (this.state.source != null) {
      this.setState({disable: false});
    }
  };
  swap() {
    var a = this.state.source;
    var b = this.state.destination;
    this.setState({destination: a});
    this.setState({source: b});
  }

  componentDidMount() {}
  render() {
    return (
      <>
        <StatusBar backgroundColor="yellow" />
        <View>
          <HeaderBar />
        </View>

        {/* <View style={{paddingBottom: 10, flex: 1}}> */}
        <ScrollView contentContainerStyle={{paddingBottom: 60}}>
          <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
              <Entypo
                name="location-pin"
                size={30}
                style={styles.location}></Entypo>
              <TouchableOpacity
                activeOpacity={2}
                style={styles.text}
                onPress={() => this.source()}>
                <TextInput
                  multiline
                  style={styles.text3}
                  placeholder="Source"
                  editable={false}>
                  {this.state.source}
                </TextInput>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => this.swap()}
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              <View>
                <Image
                  source={require('../assets/swap.png')}
                  style={{
                    width: 50,
                    height: 50,
                  }}
                />
              </View>
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <Entypo
                name="location-pin"
                size={30}
                style={{
                  color: '#00a896',
                  textAlignVertical: 'center',
                  marginLeft: 20,
                }}></Entypo>

              <TouchableOpacity
                activeOpacity={2}
                style={styles.text}
                onPress={() => this.destination()}>
                <TextInput
                  multiline
                  style={styles.text3}
                  placeholder="Destination"
                  editable={false}>
                  {this.state.destination}
                </TextInput>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            disabled={this.state.disable}
            activeOpacity={0.7}
            style={[
              styles.button,
              {backgroundColor: this.state.disable ? '#6dc0b8' : '#00a896'},
            ]}
            onPress={() =>
              this.props.navigation.navigate('BusList', {
                s: this.state.source,
                d: this.state.destination,
              })
            }>
            <Text
              style={[
                styles.text1,
                {color: this.state.disable ? '#b7ddde' : 'white'},
              ]}>
              SEARCH BUSES
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <Floating value={this.props} />
      </>
    );
  }
}
export default Routes;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    height: 250,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    elevation: 10,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  text: {
    height: 60,
    width: '92%',
    marginTop: 21,
    marginBottom: 21,
    fontSize: 17,
    color: 'black',
    paddingLeft: 40,
    marginLeft: -35,
    borderWidth: 2,
    justifyContent: 'center',
    fontFamily: 'SourceSansPro-Regular',
    borderBottomColor: 'grey',
    borderTopColor: 'grey',
    borderColor: 'grey',
    borderRadius: 5,
  },
  text3: {
    fontSize: 17,
    padding: -5,
    color: 'black',

    fontFamily: 'SourceSansPro-Regular',
  },
  text1: {
    textAlignVertical: 'center',
    textAlign: 'center',
    marginTop: 13,
    color: 'white',
    fontSize: 17,

    fontFamily: 'SourceSansPro-Regular',
    fontWeight: 'bold',
  },
  button: {
    height: 50,
    width: '90%',
    borderRadius: 5,
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    shadowColor: '#000',
    elevation: 10,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },

  icon: {
    marginTop: 29,
    height: 140,
    width: 34,
    margin: 5,
  },
  location: {
    color: '#ed5748',
    textAlignVertical: 'center',

    marginLeft: 20,
  },
});
