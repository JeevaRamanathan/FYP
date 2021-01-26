import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Floating from '../utils/floatingAction';
import HeaderBar from './Header';
import LottieView from 'lottie-react-native';
import {ListItem, Avatar, SearchBar} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';

const list = [
  {
    name: 'Thillainagar 11th cross',
    // avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: '10 buses run in this route'
  },
  {
    name: 'Anna Salai',
    subtitle: '5 buses run in this route'
  },
  {
    name: 'Srirangam',
    subtitle: '2 buses run in this route'
  },
  {
    name: 'ChartamBusStand',
    subtitle: '5 buses run in this route'
  },{
    name: 'CentralBusStand',
    subtitle: '3 buses run in this route'
  },
  {
    name: 'Samayapuram',
    subtitle: '5 buses run in this route'
  },
  {
    name: 'Woraiyur',
    subtitle: '5 buses run in this route'
  },
  {
    name: 'Thillainagar 1st cross',
    subtitle: '7 buses run in this route'
  },
  {
    name: 'KMC,Tennur',
    subtitle: '5 buses run in this route'
  },
  {
    name: 'Tennur',
    subtitle: '5 buses run in this route'
  },
]




class Bus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      values: [],
      filterSearchValues: [],
    };
    
  }

  componentDidMount() {
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
        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase();
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
                    this.props.navigation.navigate('BusNumberRouteList', {
                      data: {value: l.route_id},
                    })
                  }>
                  <ListItem bottomDivider>
                    <Image
                      source={require('../assets/bs3.png')}
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
                            {l.name}
                          </Text>
                        </View>
                      </ListItem.Title>
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
        <Floating />
      </>
    );
  }
}
export default Bus;









