import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import StackNavigation from './StackNavigation';
import StackNavigationTamil from '../Tamil/navigation/StackNavigation';
import Splash from '../Splash';
import TamilSplash from '../Tamil/Splash';

const SwitchNavigator = createSwitchNavigator(
  {
    Splash: Splash,
    TamilSplash: TamilSplash,
    English: StackNavigation,
    Tamil: StackNavigationTamil,
  },
  // {initialRouteName: 'Splash'},
);
const SwitchNavigation = createAppContainer(SwitchNavigator);
export default SwitchNavigation;
