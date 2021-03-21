import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Floating from '../utils/floatingAction';
import HeaderBar from './Header';
import LottieView from 'lottie-react-native';
import {ListItem, Avatar, SearchBar} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import Connectivity from './Connectivity'
class BusStage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      values: [],
      filterSearchValues: [],
    };
  }

  componentDidMount() {
    new Connectivity().CheckConnectivity(this.props);
    database()
      .ref('busstop')
      .on('value', (snapshot) => {
        this.setState({values: snapshot.val()});
        this.setState({filterSearchValues: snapshot.val()});
      });
  }

  updateSearch = (search) => {
    this.setState({search});
    if (search) {
      const newData = this.state.filterSearchValues.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({filterSearchValues: newData});
    } else {
      this.setState({filterSearchValues: this.state.values});
    }
  };

  render() {
    return (
      <>
        <View>
          <HeaderBar />
        </View>
        <View>
          <SearchBar
            round
            style={{fontFamily: 'SourceSansPro-Regular', fontSize: 17}}
            searchIcon={{size: 26}}
            placeholder="Enter a bus stop..."
            onChangeText={this.updateSearch}
            value={this.state.search}
          />
        </View>
        {this.state.values.length == 0 ? (
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
              {this.state.filterSearchValues.map((l, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() =>
                    this.props.navigation.navigate('BusNumberStageList', {
                      data: {value: l},
                    })
                  }>
                  <ListItem bottomDivider>
                    <Image
                      source={require('../assets/bs3.png')}
                      style={{height: 30, width: 30, borderRadius: 10}}
                    />
                    <ListItem.Content>
                      <View style={{marginTop: 16}}>
                        <ListItem.Title>
                          <Text
                            multiline
                            style={{
                              fontFamily: 'SourceSansPro-Regular',
                              fontSize: 17,
                              fontWeight: 'bold',
                            }}>
                            {l.name}
                          </Text>
                        </ListItem.Title>
                      </View>
                      <ListItem.Subtitle>
                        <Text
                          style={{
                            fontFamily: 'SourceSansPro-Regular',
                          }}>
                          {/* Travels in {l.route_id.length} routes. */}
                        </Text>
                      </ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        )}
        <Floating value={this.props} />
      </>
    );
  }
}
export default BusStage;
