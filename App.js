import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import MainScreen from './screens/MainScreen'

const Stack = createStackNavigator();

const App = () => {

  const [isLoading, setIsLoading] = useState(true)
  useEffect( async () => {
    setTimeout(() => {setIsLoading(false)}, 5000)
  })
  
  if (isLoading) {
    return (
      <View>
        <Text style={{flex:1, justifyContent:'center',alignItems:'center', fontSize:20}}>Loading</Text>
      </View>
    )
  } else {
    return (
      <NavigationContainer>
        <MainScreen />
        {/* <Stack.Navigator initialRouteName="Main">
          <Stack.Screen 
            name="Main" 
            component={MainScreen}
            options={{
              title: "가계부"
            }}
          />
        </Stack.Navigator> */}
      </NavigationContainer>
    )
  }
}

export default App