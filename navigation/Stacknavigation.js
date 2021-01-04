import {createStackNavigator} from 'react-navigation-stack';
import Splash from '../screens/Splash';
import AppContainer from './bottomtabnavigation/navigation';
import Location from '../screens/Location';
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
  },
  {
    initialRouteName: 'Splash',
  },
);
export default StackNavigation;
