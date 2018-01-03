import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import TabViewScreen from '../Containers/TabView/TabView.Screen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  TabViewScreen: { screen: TabViewScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'TabViewScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
