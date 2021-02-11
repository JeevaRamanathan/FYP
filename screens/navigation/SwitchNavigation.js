import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import StackNavigation from './StackNavigation';
const SwitchNavigator = createSwitchNavigator(
  {Screen: StackNavigation},
  {initialRouteName: 'Screen'},
);
const SwitchNavigation = createAppContainer(SwitchNavigator);
export default SwitchNavigation;
