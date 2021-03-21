import {createStackNavigator} from 'react-navigation-stack';
import Splash from '../Splash';
import AppContainer from './Navigation';

import BusList from '../BusList';
// import RouteList from '../RouteList';
import Map from '../Map';
import BusNumberRouteList from '../BusNumberRouteList';

import JunctionPoint from '../JunctionPoint';

import BusNumberStageList from '../BusNumberStageList';
import SelectSource from '../SelectSource';
import RouteSearchRouteList from '../RouteSearchRouteList';
import SelectDestination from '../SelectDestination';
import RouteListMap from '../RouteListMap';
import ConnectToInternet from '../ConnectToInternet';
import CurrentLocation from '../CurrentLocation';

const StackNavigationTamil = createStackNavigator(
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
    //   SSource: {
    //     screen: SelectSource,
    //     navigationOptions: {
    //       headerShown: null,
    //     },
    //   },
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
    //   SDestination: {
    //     screen: SelectDestination,
    //     navigationOptions: {
    //       headerShown: null,
    //     },
    //   },

    BusNumberRouteList: {
      screen: BusNumberRouteList,
      navigationOptions: {
        title: 'பேருந்து விவரங்கள்',

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
        title: 'பேருந்து விவரங்கள்',

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
        title: 'பேருந்து விவரங்கள்',

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
        title: 'பேருந்து பட்டியல்',
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

    //   RouteList: {
    //     screen: RouteList,
    //   },
    Map: {
      screen: Map,
      navigationOptions: {
        title: 'வரைபடம்',
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
        title: 'வரைபடம்',
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
        title: 'அருகிலுள்ள பஸ் நிறுத்தம்',
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
  },
  {
    initialRouteName: 'Home',
  },
);
export default StackNavigationTamil;
