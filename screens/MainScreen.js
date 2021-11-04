import React from 'react'
import { Text, View, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'

import { ContentTab } from '../components/AppTabNavigator'
import { UserTab } from '../components/AppTabNavigator'

const Tab = createBottomTabNavigator();

const Tabs = () => {

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return <Image source={require("../assets/icon1.png")} style={{width: 40, height: 40}}/>
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
      })}
    >
      <Tab.Screen 
        name="가계부 기록" 
        component={ContentTab} 
      />
      <Tab.Screen 
        name="사용자" 
        component={UserTab} 
      />
    </Tab.Navigator>
  )
}

const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:4000"}),
  cache: new InMemoryCache(),
})

const MainScreen = () => {

  return (
    <ApolloProvider client={client}>
      <Tabs />
    </ApolloProvider>
  )
}

export default MainScreen
