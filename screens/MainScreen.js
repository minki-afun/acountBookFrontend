import React from "react"
import { Text, View, Image } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
import styled from "styled-components"

import ApolloClient from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"
import { ApolloProvider, useQuery } from "@apollo/react-hooks"
import { gql } from "@apollo/client"

import ContentTab from "./ContentTab"
import UserTab from "./UserTab"
import LoginScreen from "./LoginScreen"
import Loading from "../components/Loading"

const IS_LOGIN = gql`
  query {
    isLogin {
      id
      email
    }
  }
`

const Tab = createBottomTabNavigator()

const Tabs = () => {
  const { loading, error, data } = useQuery(IS_LOGIN)

  if (loading) {
    return (
      <View>
        <Loading />
      </View>
    )
  }
  console.log(data)

  if (!data) {
    return (
      <ViewContainer>
        <LoginScreen />
      </ViewContainer>
    )
  }

  if (data) {
    return (
      <Tab.Navigator
        initialRouteName="ContentTab"
        screenOptions={({ route }) => ({
          // tabBarIcon: ({ focused, color, size }) => {
          //   return <Image source={require("../assets/icon1.png")} style={{width: 40, height: 40}}/>
          // },
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "black",
        })}
      >
        <Tab.Screen
          name="가계부 기록"
          component={ContentTab}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Image
                  source={require("../assets/icon2.png")}
                  style={{ width: 40, height: 40 }}
                />
              )
            },
          }}
        />
        <Tab.Screen
          name="사용자"
          component={UserTab}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={require("../assets/icon1.png")}
                  style={{ width: 40, height: 40 }}
                />
              )
            },
          }}
        />
      </Tab.Navigator>
    )
  }
}

const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:4000" }),
  cache: new InMemoryCache(),
})

const MainScreen = () => {
  return (
    <ApolloProvider client={client}>
      <Tabs />
    </ApolloProvider>
  )
}

const ViewContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default MainScreen
