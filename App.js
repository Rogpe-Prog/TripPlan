import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import { Text } from 'react-native'

const TripScreen = props => {
  return(
    <Text style={{paddingTop: 100 }}>TripScreen</Text>
  )
}

const AppNavigator = createSwitchNavigator({
  Home: HomeScreen,
  Trips: TripScreen
}, {
  initialRouteName: 'Home'
})

export default createAppContainer(AppNavigator)

// const App = () => {

//   return (
//     <HomeScreen />
//   )
// }

// export default App
