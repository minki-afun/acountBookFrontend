import React, { useCallback, useEffect, useState } from "react"
import { StyleSheet, Text, View, Image } from "react-native"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import MainScreen from "./screens/MainScreen"
import Loading from "./components/Loading"

const Stack = createStackNavigator()

const App = () => {
  // 로딩화면 세팅
  const [isLoading, setIsLoading] = useState(true)

  useEffect(async () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  })

  // useEffect( async () => {

  // })

  // 로딩중일때
  if (isLoading) {
    return <Loading />
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
