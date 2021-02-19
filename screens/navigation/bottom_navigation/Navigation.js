import Routes from '../../Routes';
import BusNumber from '../../BusNumber';
import BusStage from '../../BusStage';
import {createAppContainer} from 'react-navigation';
import {
  getAnimatingBottomBar,
  AnimationType,
} from 'react-native-animating-bottom-tab-bar';

const RouteName = {
  Home: 'Routes',
  BusNumber: 'Bus Number',
  BusStage: 'BusStage',
};
const NavigationScreens = {
  [RouteName.Home]: Routes,
  [RouteName.BusNumber]: BusNumber,
  [RouteName.BusStage]: BusStage,
};

const NavigationParameter = [
  {
    label: RouteName.Home,
    routeName: RouteName.Home,
    icons: {
      selected: require('../../../assets/routes.png'),
      unselected: require('../../../assets/routes.png'),
    },
    activeIconScale: 1,
    yTranslation: 8,
    activeTintColor: '#22333b',
    inactiveTintColor: '#22333b',
    activeTextStyle: {
      color: 'white',
      fontFamily: 'Acme-Regular',
    },
    inactiveTextStyle: {
      color: 'white',

      fontFamily: 'Acme-Regular',
    },
    activeBGColor: 'black',
  },

  {
    label: RouteName.BusNumber,
    routeName: RouteName.BusNumber,
    icons: {
      selected: require('../../../assets/buslist_icon.png'),
      unselected: require('../../../assets/buslist_icon.png'),
    },
    activeIconScale: 1,
    yTranslation: 8,
    activeTintColor: '#22333b',
    inactiveTintColor: '#22333b',
    activeTextStyle: {
      color: 'white',

      fontFamily: 'Acme-Regular',
    },
    inactiveTextStyle: {
      color: 'white',
      fontFamily: 'Acme-Regular',
    },
  },
  {
    label: 'Bus Stop',
    routeName: RouteName.BusStage,
    icons: {
      selected: require('../../../assets/Busstop.png'),
      unselected: require('../../../assets/Busstop.png'),
    },
    activeIconScale: 1,
    yTranslation: 8,
    activeTintColor: '#22333b',
    inactiveTintColor: '#22333b',
    activeTextStyle: {
      color: 'white',

      fontFamily: 'Acme-Regular',
    },
    inactiveTextStyle: {
      color: 'white',

      fontFamily: 'Acme-Regular',
    },
  },
];

const bottomBarConfig = {
  backgroundColor: '#ebc550',
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
