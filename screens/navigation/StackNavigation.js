import {createStackNavigator} from 'react-navigation-stack';
import Splash from '../Splash';
import AppContainer from './bottom_navigation/Navigation';

import BusList from '../BusList';
import RouteList from '../RouteList';
import Map from '../Map';
import BusNumberRouteList from '../BusNumberRouteList';

import JunctionPoint from '../JunctionPoint';

import BusNumberStageList from '../BusNumberStageList';
import SelectSource from '../SelectSource';
import RouteSearchRouteList from '../RouteSearchRouteList';
import SelectDestination from '../SelectDestination';
import OlaService from '../OlaService';
import RouteListMap from '../RouteListMap';
import ConnectToInternet from '../ConnectToInternet';
import CurrentLocation from '../CurrentLocation';
import FindBusStop from '../FindBusStop';
import AboutTheApp from '../AboutTheApp';
import HowItWorks from '../HowItWorks';

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

    BusNumberRouteList: {
      screen: BusNumberRouteList,
      navigationOptions: {
        title: 'Bus Details',

        headerStyle: {
          backgroundColor: '#ebc550',
        },
        headerTintColor: '#22333b',
        headerTitleStyle: {
          fontFamily: 'Acme-Regular',
        },
      },
    },

    BusNumberStageList: {
      screen: BusNumberStageList,
      navigationOptions: {
        title: 'Bus Details',

        headerStyle: {
          backgroundColor: '#ebc550',
        },
        headerTintColor: '#22333b',
        headerTitleStyle: {
          fontFamily: 'Acme-Regular',
        },
      },
    },

    RouteSearchRouteList: {
      screen: RouteSearchRouteList,
      navigationOptions: {
        title: 'Bus Details',

        headerStyle: {
          backgroundColor: '#ebc550',
        },
        headerTintColor: '#22333b',
        headerTitleStyle: {
          fontFamily: 'Acme-Regular',
        },
      },
    },

    BusList: {
      screen: BusList,
      navigationOptions: {
        title: 'Bus List',
        headerStyle: {
          backgroundColor: '#ebc550',
        },
        headerTintColor: '#22333b',
        headerTitleStyle: {
          fontFamily: 'Acme-Regular',
        },
      },
    },
    HowItWorks: {
      screen: HowItWorks,
      navigationOptions: {
        title: 'How It Works',
        headerStyle: {
          backgroundColor: '#ebc550',
        },
        headerTintColor: '#22333b',
        headerTitleStyle: {
          fontFamily: 'Acme-Regular',
        },
      },
    },
    AboutTheApp: {
      screen: AboutTheApp,
      navigationOptions: {
        title: 'About the App',
        headerStyle: {
          backgroundColor: '#ebc550',
        },
        headerTintColor: '#22333b',
        headerTitleStyle: {
          fontFamily: 'Acme-Regular',
        },
      },
    },

    JunctionPoint: {
      screen: JunctionPoint,
      navigationOptions: {
        // title: '###',
        headerStyle: {
          backgroundColor: '#ebc550',
        },
        headerTintColor: '#22333b',
        headerTitleStyle: {
          fontFamily: 'Acme-Regular',
        },
      },
    },

    RouteList: {
      screen: RouteList,
    },
    Map: {
      screen: Map,
      navigationOptions: {
        title: 'Map',
        headerStyle: {
          backgroundColor: '#ebc550',
        },
        headerTintColor: '#22333b',
        headerTitleStyle: {
          fontFamily: 'Acme-Regular',
        },
      },
    },
    RouteListMap: {
      screen: RouteListMap,
      navigationOptions: {
        title: 'Map',
        headerStyle: {
          backgroundColor: '#ebc550',
        },
        headerTintColor: '#22333b',
        headerTitleStyle: {
          fontFamily: 'Acme-Regular',
        },
      },
    },

    FindBusStop: {
      screen: FindBusStop,
      navigationOptions: {
        title: 'Find Bus Stop',
        headerStyle: {
          backgroundColor: '#ebc550',
        },
        headerTintColor: '#22333b',
        headerTitleStyle: {
          fontFamily: 'Acme-Regular',
        },
      },
    },

    CurrentLocation: {
      screen: CurrentLocation,
      navigationOptions: {
        title: 'Nearest bus stop',
        headerStyle: {
          backgroundColor: '#ebc550',
        },
        headerTintColor: '#22333b',
        headerTitleStyle: {
          fontFamily: 'Acme-Regular',
        },
      },
    },
    ConnectToInternet: {
      screen: ConnectToInternet,
      navigationOptions: {
        headerShown: null,
      },
    },
    OlaService: {
      screen: OlaService,
      navigationOptions: {
        title: 'Book your ride',
        headerStyle: {
          backgroundColor: '#ebc550',
        },
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);
export default StackNavigation;
