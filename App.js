import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"

import MainScreen from './screens/MainScreen'

const navigator = createStackNavigator(
  {
    Main: MainScreen
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      // headerleft: ,
      title: "AccountBook",
      // headerRight: ,
    },
  }
);

export default createAppContainer(navigator)