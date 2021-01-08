import Routes from '../../screens/Routes';
import Location from '../../screens/Location';
import Bus from '../../screens/Bus';
import {createAppContainer} from 'react-navigation';
import React from 'react';
import {
  getAnimatingBottomBar,
  AnimationType,
} from 'react-native-animating-bottom-tab-bar';

import AnimatingBottomBarContext from './AnimatingBottomBarContext';

const RouteName = {
  Home: 'Routes',
  Location: 'Bus Number',
  Bus: 'Bus',
};
const NavigationScreens = {
  [RouteName.Home]: Routes,
  [RouteName.Location]: Location,
  [RouteName.Bus]: Bus,
};

const NavigationParameter = [
  {
    label: RouteName.Home,
    routeName: RouteName.Home,
    icons: {
      selected: require('../../assets/routes.png'),
      unselected: require('../../assets/routes.png'),
    },
    activeIconScale: 1,
    yTranslation: 8,
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    activeTextStyle: {
      color: 'white',
      // fontWeight: 'bold',
      fontFamily: 'Acme-Regular',
    },
    inactiveTextStyle: {
      color: 'white',
      // fontWeight: 'bold',
      fontFamily: 'Acme-Regular',
    },
    activeBGColor: 'black',
    // lottieSource: require('./message.json'),
    // isLottieTab: true,
  },

  {
    label: RouteName.Location,
    routeName: RouteName.Location,
    icons: {
      selected: require('../../assets/buslist_icon.png'),
      unselected: require('../../assets/buslist_icon.png'),
    },
    activeIconScale: 1,
    yTranslation: 8,
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    activeTextStyle: {
      color: 'white',
      // fontWeight: 'bold',
      fontFamily: 'Acme-Regular',
    },
    inactiveTextStyle: {
      color: 'white',
      // fontWeight: 'bold',
      fontFamily: 'Acme-Regular',
    },
    // lottieSource: require('./message.json'),
    // isLottieTab: true,
  },
  {
    label: 'Bus Stop',
    routeName: RouteName.Bus,
    icons: {
      selected: require('../../assets/Busstop.png'),
      unselected: require('../../assets/Busstop.png'),
    },
    activeIconScale: 1,
    yTranslation: 8,
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    activeTextStyle: {
      color: 'white',
      // fontWeight: 'bold',
      fontFamily: 'Acme-Regular',
    },
    inactiveTextStyle: {
      color: 'white',
      // fontWeight: 'bold',
      fontFamily: 'Acme-Regular',
    },
    // lottieSource: require('./message.json'),
    // isLottieTab: true,
  },
];

const bottomBarConfig = {
  backgroundColor: '#ed4950',
  height: 50,
  bottom: 0,
  curveWidth: 82,
  curveDepth: 43,
  animationDuration: 400,
  tabCircleDiameter: 44,
  extraMarginBetweenTabIconAndLabel: -10,
  initialRouteName: RouteName.Routes,
};

const BottomBarStack = getAnimatingBottomBar({
  type: AnimationType.SvgBottomBar,
  navigationScreens: NavigationScreens,
  navigationParameter: NavigationParameter,
  configData: {
    bottomBarConfig,
  },
});
const AppContainer = createAppContainer(BottomBarStack);

export default AppContainer;
