import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import database from '@react-native-firebase/database';

import {Toolbar} from 'react-native-material-ui';

import Entypo from 'react-native-vector-icons/Entypo';
import {NavigationActions} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';
class SelectDestination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      destinationValues: [],
      filteredDestinationValue: [],
    };
  }

  componentDidMount() {
    database()
      .ref('busstop')
      .on('value', (snapshot) => {
        this.setState({filteredDestinationValue: snapshot.val()});
        this.setState({destinationValues: snapshot.val()});
      });
  }

  destination(text) {
    this.props.navigation.state.params.handleDestination(text);
    this.props.navigation.goBack();
  }
  search(value) {
    if (value) {
      const newData = this.state.destinationValues.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = value.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({filteredDestinationValue: newData});
    } else {
      this.setState({filteredDestinationValue: this.state.destinationValues});
    }
  }
  render() {
    const {search} = this.state;

    return (
      <>
        <View style={{marginTop: 29}}>
          <Toolbar
            color="red"
            centerElement="Destination"
            isSearchActive={true}
            searchable={{
              autoFocus: true,
              placeholder: 'Destination',
              onChangeText: (value) => this.search(value),
            }}
            style={{
              container: {
                backgroundColor: '#ebc550',
              },
            }}
            searchValue={this.state.searchValue}
          />
        </View>
        <ScrollView>
          {this.state.filteredDestinationValue.map((values, i) => {
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
                onPress={() => this.destination(values.name)}>
                <View
                  style={{
                    margin: 12,
                    flexDirection: 'row',
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
                      fontSize: 17,
                      fontWeight: '800',
                      fontFamily: 'SourceSansPro-Regular',
                    }}>
                    {values.name}
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
export default SelectDestination;
