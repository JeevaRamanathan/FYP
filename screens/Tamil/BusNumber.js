import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Floating from '../../utils/floatingAction';
import HeaderBar from './Header';
import LottieView from 'lottie-react-native';
import {ListItem, Avatar, SearchBar} from 'react-native-elements';
import TamilFloating from '../../utils/tamilFloatingAction';
import {TouchableOpacity} from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import Connectivity from './Connectivity';

class BusNumber extends React.Component {
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
      .ref('Tamil/bus')
      .on('value', (snapshot) => {
        this.setState({values: snapshot.val()});
        this.setState({filterSearchValues: snapshot.val()});
      });
  }

  updateSearch = (search) => {
    this.setState({search});

    if (search) {
      const newData = Object.values(this.state.filterSearchValues).filter(
        function (item) {
          const itemData = item.busname
            ? item.busname.toUpperCase()
            : ''.toUpperCase();
          const textData = search.toUpperCase();
          return itemData.indexOf(textData) > -1;
        },
      );
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
            placeholder="பஸ் எண்ணை உள்ளிடவும்..."
            onChangeText={this.updateSearch}
            value={this.state.search}
          />
        </View>
        {this.state.values.length == 0 ? (
          <View style={{height: '80%', width: '100%'}}>
            {/* Activity Indicator until it fetches the data*/}
            <LottieView
              source={require('../../assets/Bus.json')}
              loop={true}
              autoPlay={true}
              progress={0}
              speed={3}
            />
          </View>
        ) : (
          <ScrollView>
            <View style={{paddingBottom: 50}}>
              {Object.keys(this.state.filterSearchValues).map((l, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() =>
                    this.props.navigation.navigate('BusNumberRouteList', {
                      data: {value: this.state.filterSearchValues[l].route_id},
                    })
                  }>
                  <ListItem bottomDivider>
                    <Image
                      source={require('../../assets/busno.png')}
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
                            {this.state.filterSearchValues[l].busname}
                          </Text>
                        </View>
                      </ListItem.Title>
                      <ListItem.Subtitle>
                        <Text
                          style={{
                            fontFamily: 'SourceSansPro-Regular',
                          }}>
                          {this.state.filterSearchValues[l].route_id.length}{' '}
                          வழிகளில் பயணிக்கிறது.
                        </Text>
                      </ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        )}
        <TamilFloating value={this.props} />
      </>
    );
  }
}
export default BusNumber;
