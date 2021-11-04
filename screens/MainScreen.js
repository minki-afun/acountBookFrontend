import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'


const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:4000"}),
  cache: new InMemoryCache(),
})

const MainScreen = () => {
  return (
    <ApolloProvider client={client}>
      <View>
        <Text>HIdddassss</Text>
      </View>
    </ApolloProvider>
  )
}

export default MainScreen