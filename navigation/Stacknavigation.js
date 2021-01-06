import {createStackNavigator} from 'react-navigation-stack';
import Splash from '../screens/Splash';
import AppContainer from './bottomtabnavigation/navigation';
import Location from '../screens/Location';
import BusList from '../screens/BusList';
import SelectSource from '../screens/SelectSource';
import SelectDestination from '../screens/SelectDestination';
import React from 'react';
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
        headerShown: null,
      },
    },
  },
  {
    initialRouteName: 'Splash',
  },
);
export default StackNavigation;
