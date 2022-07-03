import React, { useState, useEffect } from 'react'
import axios from 'lib/axios'

import FormErrorMessages from 'components/ui/FormErrorMessages'

import {
  AuthContainer as Container,
  AuthForm as Form,
  AuthFormTitle as FormTitle,
  AuthFormGroup as FormGroup,
  AuthFormLabel as FormLabel,
  AuthFormInput as FormInput,
  AuthFormButton as FormButton,
  AuthLink as Link,
} from 'components/css/Auth'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formErros, setFormErrors] = useState({})
  const [submittable, setSubmittable] = useState(false)
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    if (email && password) {
      setSubmittable(true)
    } else {
      setSubmittable(false)
    }
  }, [email, password])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (processing) return
    setProcessing(true)
    try {
      const response = await axios.post('/api/v1/signin', {
        user: {
          email: email,
          password: password,
        },
      })
      console.log(response.status)
      console.log(response.data)
    } catch (error) {
      const errorRescpnse = error.response
      console.log(errorRescpnse.data.errors)
      setFormErrors({ ...errorRescpnse.data.errors })
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormTitle>ログインフォーム</FormTitle>
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
        <FormButton type="submit" disabled={!submittable || processing}>
          ログイン
        </FormButton>
        <Link to="/signup">新規会員登録はこちら</Link>
      </Form>
    </Container>
  )
}

export default SignIn