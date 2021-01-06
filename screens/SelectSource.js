import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  BackHandler,
  Alert,
  FlatList,
  ScrollView,
} from 'react-native';
import HeaderBar from './Header';
import {Checkbox, Toolbar} from 'react-native-material-ui';
import {SearchBar} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import {NavigationActions} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';
class SelectSource extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      a: [],
      sourceValues: [
        {key: 0, value: 'Thillainagar 11th cross'},
        {key: 1, value: 'Anna Salai'},
        {key: 2, value: 'Srirangam'},
        {key: 3, value: 'ChartamBusStand'},
        {key: 4, value: 'CentralBusStand'},
        {key: 5, value: 'Samayapuram'},
        {key: 6, value: 'Woraiyur'},
        {key: 7, value: 'Ant'},
        {key: 8, value: 'Place'},
        {key: 9, value: 'Thillainagar 11th cross'},
        {key: 10, value: 'Anna Salai'},
        {key: 21, value: 'Srirangam'},
        {key: 31, value: 'ChartamBusStand'},
        {key: 41, value: 'CentralBusStand'},
        {key: 51, value: 'Samayapuram'},
        {key: 61, value: 'Woraiyur'},
        {key: 71, value: 'Ant'},
        {key: 81, value: 'Place'},
      ],
      filteredSourceValue: [],
    };
  }
  componentDidMount() {
    this.setState({filteredSourceValue: this.state.sourceValues});
  }
  search(value) {
    if (value) {
      const newData = this.state.sourceValues.filter(function (item) {
        const itemData = item.value
          ? item.value.toUpperCase()
          : ''.toUpperCase();
        const textData = value.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({filtereSourcedValue: newData});
    } else {
      this.setState({filtereSourcedValue: this.state.sourceValues});
    }
  }
  source(text) {
    this.props.navigation.state.params.handleSource(text);
    this.props.navigation.goBack();
   
  }

  render() {
    const {search} = this.state;
    return (
      <>
        <View style={{marginTop: 29}}>
          <Toolbar
            color="red"
            centerElement="Source"
            isSearchActive={true}
            searchable={{
              autoFocus: true,
              onChangeText: (value) => this.search(value),
              placeholder: 'Source',
            }}
            style={{
              container: {
                backgroundColor: '#ED4950',
              },
            }}
          />
        </View>
        <ScrollView>
          {this.state.filteredSourceValue.map((values, i) => {
            return (
              <TouchableOpacity
                style={{
                  height: 55,
                  width: '100%',
                  backgroundColor: 'white',
                  borderBottomColor: '#e5e5e5',
                  borderBottomWidth: 1,
                }}
                key={i}
                onPress={() => this.source(values.value)}>
                <View
                  style={{
                    margin: 12,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                  }}>
                  <Entypo
                    name="location-pin"
                    size={30}
                    style={{color: '#aaa'}}
                  />

                  <Text
                    style={{
                      textAlignVertical: 'center',
                      marginLeft: 7,
                      fontSize: 19,
                      fontWeight: '800',
                      fontFamily: 'SourceSansPro-Regular',
                    }}>
                    {values.value}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </>
    );
  }
}
export default SelectSource;
