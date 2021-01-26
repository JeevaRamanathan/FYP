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
import database from '@react-native-firebase/database';

class SelectSource extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      a: [],
      sourceValues: [],
      filteredSourceValue: [],
    };
  }
  componentDidMount() {
    database()
      .ref('busstop')
      .on('value', (snapshot) => {
        this.setState({filteredSourceValue: snapshot.val()});
        this.setState({sourceValues: snapshot.val()});
      });
  }
  search(value) {
    if (value) {
      const newData = this.state.sourceValues.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = value.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({filteredSourceValue: newData});
    } else {
      this.setState({filteredSourceValue: this.state.sourceValues});
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
                backgroundColor: '#ebc550', 
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
                onPress={() => this.source(values.name)}>
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
export default SelectSource;
