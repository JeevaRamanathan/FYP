import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import StackNavigation from './StackNavigation';
const SwitchNavigator = createSwitchNavigator(
  {Screen: StackNavigation},
  {initialRouteName: 'Screen'},
);
const SwitchNavigationEnglish = createAppContainer(SwitchNavigator);
export default SwitchNavigationEnglish;
