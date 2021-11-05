import React, { Component } from "react"
import { View, Text, StyleSheet,Button } from "react-native"

import styled from "styled-components"

const Container = styled.View`
  flex: 1;
  backgroundColor: #444444;
`
const Wrapper = styled.View`
  margin-top: 30;
  margin-bottom: 10;
  margin-left: 30;
  margin-right: 30;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`
const WrapperInner = styled.View`
  text-align: center;
  padding: 0;
`

const AppTitle = styled.Text`
  color: #fff;
  fontSize: 18;
  font-weight: 500;
`
const AppSub1 = styled.Text`
  color: tomato;
  margin-bottom: 10;
  margin-top: 7;
  text-align: center;
  justify-content: center;
  font-weight: 500;
  fontSize: 18;
`
const AppSub2 = styled.Text`
  fontSize: 18;
  font-weight: 500;
  color: #0000FF;
  margin-bottom: 10;
  margin-top: 7;
  text-align: center;
  justify-content: center;
`
const AppSub3 = styled.Text`
  margin-top: 7;
  fontSize: 18;
  font-weight: 500;
  text-align: center;
  justify-content: center;
  color: #fff;
  margin-bottom: 10;
`
const Card = styled.View`
  background-color: #fff;
  flex: 2;
  borderTopLeftRadius: 10;
  borderTopRightRadius: 10;
  marginRight: 10;
  marginLeft: 10;
`
const AddButton = styled.Button`
  flex: 1;
  border-radius: 0.25;
  font-size: 1;
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
      <Card>
        <Button title="추가" onPress={()=>Submit()}></Button>
      </Card>
    </Container>
  )
}

export default ContentTab
