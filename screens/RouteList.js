import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from 'react-native';
import HeaderBar from './Header';
import {Card} from 'react-native-paper';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';

class RouteList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        {/* <HeaderBar /> */}
        <ScrollView>
          <View
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: '#f3d8c7',
              height: 90,
            }}></View>

          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../assets/bus1.gif')}
              style={{
                width: 190,
                height: 120,
                borderRadius: 100,
                marginTop: -70,
              }}
            />
            <Text style={{fontSize: 25, fontWeight: 'bold', padding: 5}}>
              P116
            </Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Chataram to Junction
            </Text>
          </View>

          <Card
            style={{
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: '#fff',
              width: '90%',
              padding: 20,
              paddingBottom: 22,
              borderRadius: 10,
              shadowOpacity: 80,
              elevation: 15,
              marginTop: 20,
            }}>
            <View>
              <Collapse>
                <CollapseHeader>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    <Image
                      source={require('../assets/clock.png')}
                      style={{width: 20, height: 20}}></Image>{' '}
                    Bus timings{' '}
                    <Image
                      source={require('../assets/d2.png')}
                      style={{width: 20, height: 20}}></Image>
                  </Text>
                </CollapseHeader>
                <CollapseBody>
                  <Text style={{marginTop: 5}}>
                    10:00 -- 11:00 -- 12:00 -- 13:00
                  </Text>
                </CollapseBody>
              </Collapse>
            </View>
          </Card>
          <Card
            style={{
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: '#fff',
              width: '90%',
              padding: 20,
              paddingBottom: 22,
              borderRadius: 10,
              shadowOpacity: 80,
              elevation: 15,
              marginTop: 20,
              marginBottom: 30,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              <Image
                source={require('../assets/destination.png')}
                style={{width: 20, height: 20}}></Image>{' '}
              Bus stops
            </Text>

            <Text style={{fontSize: 18, marginTop: 10}}>
              <Image
                source={require('../assets/source.png')}
                style={{width: 15, height: 15}}></Image>{' '}
              Chataram
            </Text>
            <Text> |</Text>
            <Text style={{fontSize: 18, marginTop: 10}}>
              <Image
                source={require('../assets/inter.png')}
                style={{width: 15, height: 15}}></Image>{' '}
              Thillainagar
            </Text>
            <Text> |</Text>
            <Text style={{fontSize: 18, marginTop: 10}}>
              <Image
                source={require('../assets/inter.png')}
                style={{width: 15, height: 15}}></Image>{' '}
              GH
            </Text>
            <Text> |</Text>

            <Text style={{fontSize: 18, marginTop: 10}}>
              <Image
                source={require('../assets/inter.png')}
                style={{width: 15, height: 15}}></Image>{' '}
              Court
            </Text>
            <Text> |</Text>
            <Text style={{fontSize: 18, marginTop: 10}}>
              <Image
                source={require('../assets/d.png')}
                style={{width: 15, height: 15}}></Image>{' '}
              Chataram
            </Text>
          </Card>
        </ScrollView>
      </View>
    );
  }
}
export default RouteList;
