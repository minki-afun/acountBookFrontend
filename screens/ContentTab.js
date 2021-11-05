import { Button, Center } from 'native-base'
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalculator, faCoffee, faPlus, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Container = styled.View`
flex:1;
backgroundColor: #444444;
`
const Wrapper = styled.View`
margin-top:30;
margin-bottom:10;
margin-left:30;
margin-right:30;
flex-direction:row;
// justify-Content:center;
justify-Content:space-between;
text-Align: center;
`
const WrapperInner = styled.View`
text-Align: center;
padding: 0;

`

const AppTitle = styled.Text`
color:#fff;
fontSize: 18;
font-Weight:500;
// text-Align: center;
// justify-Content:center;
  // letter-Spacing: 5;
  `
  const AppSub1 = styled.Text`
  color: red;
  margin-Bottom:10;
  text-Align:center;
  justify-Content:center;
  font-Weight:500;
  fontSize: 18;
  margin-top:7;
  `
  const AppSub2 = styled.Text`
  fontSize: 18;
  font-Weight:500;
  color: blue;
  margin-Bottom:10;
  margin-top:7;
  text-Align:center;
  justify-Content:center;
  
  `
  const AppSub3 = styled.Text`
  margin-top:7;
  fontSize: 18;
  font-Weight:500;
  text-Align:center;  
  justify-Content:center;
  color: #fff;
  margin-Bottom:10;
`
const Card = styled.View`
  background-Color:#fff;
  flex:2;
  borderTopLeftRadius:10;
  borderTopRightRadius:10;
  marginRight:10;
  marginLeft:10;
`
const AddButton = styled.Button`
  flex:1;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-szie:1rem;
`;


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
           
          </Card>
        </Container>
    )
}

export default ContentTab