import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  border: 1px solid black;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 70%;
  max-width: 450px;
  height: 550px;
  border: 1px solid #dfdfdf;
  padding: 30px;
  border-radius: 10px;
  background-color: #fdf5f5;
  box-shadow: 2px 12px 17px -7px #383838;
`

const FormTitle = styled.h1`
  text-align: center;
  margin: 13px 0;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const FormLabel = styled.label`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 3px;
`

const FormInput = styled.input`
  border: 1px solid grey;
  padding: 20px;
  border-radius: 4px;
  &:focus {
    border: 2px solid #ff9900;
    z-index: 10;
    outline: 0;
  }
`

const FormButton = styled.button`
  background: #0563b4;
  width: 100%;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 30px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #0e528d;
  }
`

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormTitle>新規登録</FormTitle>
        <FormGroup>
          <FormLabel htmlFor="name">氏名</FormLabel>
          <FormInput
            id="name"
            type="text"
            name="name"
            placeholder="例: 山本　太郎"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="email">メールアドレス</FormLabel>
          <FormInput
            id="email"
            type="email"
            name="email"
            placeholder="例: tarou@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="password">パスワード</FormLabel>
          <FormInput
            id="password"
            type="password"
            name="password"
            placeholder="8文字以上の英数字"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="password_confirmation">確認用パスワード</FormLabel>
          <FormInput
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
          />
        </FormGroup>
        <FormButton type="submit">登録</FormButton>
      </Form>
    </Container>
  )
}

export default SignUp
