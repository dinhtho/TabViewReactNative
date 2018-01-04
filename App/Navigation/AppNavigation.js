import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import TabViewScreen from '../Containers/TabView/TabView.Screen'
import ViewPagerScreen from '../Containers/ViewPager/ViewPager.Screen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  TabViewScreen: { screen: TabViewScreen },
  ViewPagerScreen: { screen: ViewPagerScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ViewPagerScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
