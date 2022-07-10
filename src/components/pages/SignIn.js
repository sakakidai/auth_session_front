import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin, userSelector, clearErrors } from 'features/userSlice'

import styled from 'styled-components'

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

const ErrorMessage = styled.div`
  color: red;
`

const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLoading, isError, errors } = useSelector(userSelector)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formError, setFormError] = useState('')
  const [submittable, setSubmittable] = useState(false)

  // フォームバリデーション
  useEffect(() => {
    if (email && password) {
      setSubmittable(true)
    } else {
      setSubmittable(false)
    }
  }, [email, password])

  // フォームにエラーメッセージの反映
  useEffect(() => {
    if (isError) {
      setFormError(errors.message)
      dispatch(clearErrors())
    }
  }, [isError, errors, dispatch])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (isLoading) return
    await dispatch(userLogin({ email: email, password: password })).unwrap()
    navigate('/')
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormTitle>ログインフォーム</FormTitle>
        <ErrorMessage>{formError}</ErrorMessage>
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
        <FormButton type="submit" disabled={!submittable || isLoading}>
          ログイン
        </FormButton>
        <Link to="/signup">新規会員登録はこちら</Link>
      </Form>
    </Container>
  )
}

export default SignIn
