import {createStackNavigator} from 'react-navigation-stack';
import Splash from '../Splash';
import AppContainer from './bottom_navigation/Navigation';
// import Location from '../Location';
import BusList from '../BusList';
import RouteList from '../RouteList';
import Bot from '../Bot';
import BusNumberRouteList from '../BusNumberRouteList';
import SelectSource from '../SelectSource';
import SelectDestination from '../SelectDestination';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {TouchableOpacity} from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
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

  

    RouteList: {
      screen: RouteList,
    },
    Bot: {
      screen: Bot,
    },
  },
  {
    initialRouteName: 'Home',
  },
);
export default StackNavigation;
