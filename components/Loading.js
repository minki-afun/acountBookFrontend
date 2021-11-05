import React, { Component } from "react"
import { View, Text, Image } from "react-native"
import styled from "styled-components"

const LoginScreen = () => {
  return (
    <ViewContainer>
      <Image
        source={require("../assets/money.png")}
        style={{ width: 40, height: 40 }}
      />
      <Text>Loading</Text>
    </ViewContainer>
  )
}

const ViewContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default LoginScreen
