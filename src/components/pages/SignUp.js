import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userRegister, selectUser, clearErrors } from 'features/userSlice'

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

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLoading, isError, errors } = useSelector(selectUser)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [formErrors, setFormErrors] = useState({})
  const [submittable, setSubmittable] = useState(false)

  // フォームバリデーション
  useEffect(() => {
    if (name && email && password && passwordConfirmation) {
      setSubmittable(true)
    } else {
      setSubmittable(false)
    }
  }, [name, email, password, passwordConfirmation])

  // フォームにエラーメッセージの反映
  useEffect(() => {
    if (isError) {
      setFormErrors({ ...errors })
      dispatch(clearErrors())
    }
  }, [isError, errors, dispatch])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (isLoading) return

    await dispatch(
      userRegister({
        username: name,
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
      }),
    ).unwrap()
    navigate('/')
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
          <FormErrorMessages errors={formErrors.name} />
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
          <FormErrorMessages errors={formErrors.email} />
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
          <FormErrorMessages errors={formErrors.password} />
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
          <FormErrorMessages errors={formErrors.passwordConfirmation} />
        </FormGroup>
        <FormButton type="submit" disabled={!submittable || isLoading}>
          アカウントを登録する
        </FormButton>
        <Link to="/signin">ログインフォームはこちら</Link>
      </Form>
    </Container>
  )
}

export default SignUp
