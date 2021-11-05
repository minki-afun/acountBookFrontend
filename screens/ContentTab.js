import { Button, Center } from "native-base"
import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import styled from "styled-components"

const Container = styled.View`
  flex: 1;
  backgroundcolor: #444444;
`
const Wrapper = styled.View`
  margin-top: 30;
  margin-bottom: 10;
  margin-left: 30;
  margin-right: 30;
  flex-direction: row;
  justify-content: center;
  justify-content: space-between;
  text-align: center;
`
const WrapperInner = styled.View`
  text-align: center;
  padding: 0;
`

const AppTitle = styled.Text`
  color: #fff;
  fontsize: 18;
  font-weight: 500;
  text-align: center;
  justify-content: center;
  letter-spacing: 5;
`
const AppSub1 = styled.Text`
  color: red;
  margin-bottom: 10;
  text-align: center;
  justify-content: center;
  font-weight: 500;
  fontsize: 18;
  margin-top: 7;
`
const AppSub2 = styled.Text`
  fontsize: 18;
  font-weight: 500;
  color: blue;
  margin-bottom: 10;
  margin-top: 7;
  text-align: center;
  justify-content: center;
`
const AppSub3 = styled.Text`
  margin-top: 7;
  fontsize: 18;
  font-weight: 500;
  text-align: center;
  justify-content: center;
  color: #fff;
  margin-bottom: 10;
`
const Card = styled.View`
  background-color: #fff;
  flex: 2;
  bordertopleftradius: 10;
  bordertoprightradius: 10;
  marginright: 10;
  marginleft: 10;
`
const AddButton = styled.Button`
  flex: 1;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  /* font-szie: 1rem; */
`

const ContentTab = () => {
  return (
    <Container>
      <Wrapper>
        <WrapperInner>
          <AppTitle>
            <Text>수입</Text>
          </AppTitle>
          <AppSub1>0</AppSub1>
        </WrapperInner>

        <WrapperInner>
          <AppTitle>
            <Text>지출</Text>
          </AppTitle>
          <AppSub2>0</AppSub2>
        </WrapperInner>

        <WrapperInner>
          <AppTitle>
            <Text>합계</Text>
          </AppTitle>
          <AppSub3>0</AppSub3>
        </WrapperInner>
      </Wrapper>
      <Card></Card>
    </Container>
  )
}

export default ContentTab
