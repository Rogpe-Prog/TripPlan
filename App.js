import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import TripsScreen from './src/screens/TripsScreen'


const AppNavigator = createSwitchNavigator({
  Home: HomeScreen,
  Trips: TripsScreen
}, {
  initialRouteName: 'Trips'
})

export default createAppContainer(AppNavigator)
