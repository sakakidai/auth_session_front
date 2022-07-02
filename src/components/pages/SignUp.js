import React, { useState, useEffect } from 'react'
import axios from 'lib/axios'
import { Link } from 'react-router-dom'

import FormErrorMessages from 'components/ui/FormErrorMessages'

import {
  AuthContainer as Container,
  AuthForm as Form,
  AuthFormTitle as FormTitle,
  AuthFormGroup as FormGroup,
  AuthFormLabel as FormLabel,
  AuthFormInput as FormInput,
  AuthFormButton as FormButton,
} from 'components/css/Auth'

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
        <Link to="/signin">ログインフォームはこちら</Link>
      </Form>
    </Container>
  )
}

export default SignUp
