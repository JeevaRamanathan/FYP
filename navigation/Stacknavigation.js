import {createStackNavigator} from 'react-navigation-stack';
import Splash from '../screens/Splash';
import AppContainer from './bottomtabnavigation/navigation';
import Location from '../screens/Location';
import BusList from '../screens/BusList';
import RouteList from '../screens/RouteList';
import SelectSource from '../screens/SelectSource';
import SelectDestination from '../screens/SelectDestination';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const StackNavigation = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        headerShown: null,
      },
    },
    Home: {
      screen: AppContainer,
      navigationOptions: {
        headerShown: null,
      },
    },
    SSource: {
      screen: SelectSource,
      navigationOptions: {
        headerShown: null,
      },
    },
    SSource: {
      screen: SelectSource,
      navigationOptions: {
        headerShown: null,
      },
    },
    SDestination: {
      screen: SelectDestination,
      navigationOptions: {
        headerShown: null,
      },
    },
    SDestination: {
      screen: SelectDestination,
      navigationOptions: {
        headerShown: null,
      },
    },
    BusList: {
      screen: BusList,
      navigationOptions: {
        title: 'Bus List',
        headerStyle: {
          backgroundColor: '#ed4950',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'Acme-Regular',
        },
      },
    },
    RouteList:{
      screen:RouteList,

    }
  },
  {
    initialRouteName: 'Splash',
  },
);
export default StackNavigation;
