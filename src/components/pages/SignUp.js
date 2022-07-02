import axios from 'lib/axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import FormErrorMessages from 'components/ui/FormErrorMessages'

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
  padding: 15px;
  border-radius: 4px;
  &:focus {
    border: 2px solid #ff9900;
    z-index: 10;
    outline: 0;
  }
`

const FormButton = styled.button`
  background-image: linear-gradient(to right, #fc9a05, #f5c11e);
  width: 100%;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 30px;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
    transition: opacity 0.3s;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [formErros, setFormErrors] = useState({})
  const [submittable, setSubmittable] = useState(false)
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    if (name && email && password && passwordConfirmation) {
      setSubmittable(true)
    } else {
      setSubmittable(false)
    }
  }, [name, email, password, passwordConfirmation])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (processing) return
    setProcessing(true)
    try {
      const response = await axios.post('/api/v1/signup', {
        user: {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
        },
      })
      console.log(response.status)
      console.log(response.data)
    } catch (error) {
      const errorRescpnse = error.response
      console.log(errorRescpnse.data.errors)
      setFormErrors({ ...errorRescpnse.data.errors })
    }
    setProcessing(false)
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
          <FormErrorMessages errors={formErros.name} />
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
          <FormErrorMessages errors={formErros.email} />
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
          <FormErrorMessages errors={formErros.password} />
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
          <FormErrorMessages errors={formErros.passwordConfirmation} />
        </FormGroup>
        <FormButton type="submit" disabled={!submittable || processing}>
          登録
        </FormButton>
      </Form>
    </Container>
  )
}

export default SignUp
