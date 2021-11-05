import { gql } from "@apollo/client"
import React, { Component, useState } from "react"
import { useMutation } from "@apollo/client"
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Touchable,
} from "react-native"
import styled from "styled-components"

const LOGIN_SEND = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      ok
      token
      result
    }
  }
`

const LoginScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [addLogin, { loading, error }] = useMutation(LOGIN_SEND, {
    variables: {
      email,
      password,
    },
  })

  const Submit = async () => {
    if (email != "" || password != "") {
      const data = await addLogin({ variables: { email, password } })
      if (data.result) {
        console.log(data.token)
      } else {
        error = true
      }
    }
    setEmail("")
    setPassword("")
  }

  return (
    <View>
      <TextBox>로그인</TextBox>
      <InputBox
        placeholder={"이메일"}
        value={email}
        onChangeText={(value) => setEmail(value)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <InputBox
        placeholder={"비밀번호"}
        secureTextEntry={true}
        value={password}
        onChangeText={(value) => setPassword(value)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Button title="로그인" onPress={() => Submit()} />
      <Button title="회원가입" />
      {error && <TextNotice>로그인 오류</TextNotice>}
    </View>
  )
}

const TextNotice = styled.Text`
  color: red;
`

const TextBox = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`
const InputBox = styled.TextInput`
  height: 40px;
  margin: 12px;
  border-width: 1px;
  padding: 10px;
  width: 200px;
`

export default LoginScreen
