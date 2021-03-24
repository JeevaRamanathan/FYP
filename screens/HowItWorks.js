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
  FlatList,
} from 'react-native';

import Carousel from 'react-native-anchor-carousel';
import {ImageBackground} from 'react-native';
const data = [
  {title: 'Routes', image: require('../assets/HIW1.jpg')},
  {title: 'Bus Number', image: require('../assets/HIW2.jpg')},
  {title: 'Bus Stop', image: require('../assets/HIW3.jpg')},
  {title: 'OLA Service', image: require('../assets/HIW4.jpg')},
  {title: 'Find Bus Stop?', image: require('../assets/HIW6.jpg')},
  {title: 'Where Am I?', image: require('../assets/HIW5.jpg')},
  //   {titfe: 'Where Am I?'},
];

export default class HowItWorks extends React.Component {
  _renderItem = ({item, index}) => {
    return (
      <ScrollView
        style={{
          backgroundColor: '#00000b',
          //   height: '100%',
          //   width: '100%',
          elevation: 7,
          borderRadius: 3,
          shadowOpacity: 0.5,
          shadowRadius: 5,
        }}>
        <Text
          style={{
            textAlignVertical: 'center',
            textAlign: 'center',
            marginTop: 13,
            color: 'white',
            fontSize: 17,
            fontFamily: 'SourceSansPro-Regular',
            fontWeight: 'bold',
          }}>
          {item.title}
        </Text>
        <View
          style={{
            width: '80%',
            height: 1,
            backgroundColor: 'white',
            alignSelf: 'center',
          }}></View>
        <View
          style={{
            width: '100%',
            height: 500,
            alignSelf: 'center',
            alignSelf: 'center',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            resizeMode="stretch"
            style={{
              height: '70%',
              width: '100%',
            }}
            source={item.image}></Image>
        </View>

        {/* <Text>{item.description}</Text> */}
      </ScrollView>
    );
  };

  render() {
    return (
      <>
        <View
          style={{
            alignItems: 'flex-start',
            marginLeft: 33,
            //   marginRight: 33,
            marginTop: 30,
            height: '90%',
          }}>
          <Carousel
            style={styles.carousel}
            data={data}
            renderItem={this._renderItem}
            itemWidth={300}
            containerWidth={400}
            separatorWidth={-10}
            ref={(c) => {
              this._carouselRef = c;
            }}
            // initialIndex={}
            pagingEnable={true}
            minScrollDistance={40}
          />
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  carousel: {
    flex: 1,
  },
});
