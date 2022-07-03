import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { Container as CommonContainer } from 'components/css/Common'
import palette from 'components/themes/palette'

const AuthContainer = styled.div`
  height: 100vh;
  ${CommonContainer}
`

const AuthForm = styled.form`
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
  background-color: ${palette.secondary.light};
  box-shadow: 2px 12px 17px -7px #383838;
`

const AuthFormTitle = styled.h1`
  text-align: center;
  margin: 13px 0;
`

const AuthFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const AuthFormLabel = styled.label`
  font-weight: 600;
  margin-bottom: 3px;
`

const AuthFormInput = styled.input`
  border: 1px solid grey;
  padding: 15px;
  border-radius: 4px;
  &:focus {
    border: 2px solid ${palette.primary.main};
    z-index: 10;
    outline: 0;
  }
`

const AuthFormButton = styled.button`
  background-image: linear-gradient(to right, ${palette.primary.main}, ${palette.primary.light});
  width: 100%;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 30px;
  font-size: 1.25rem;
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

const AuthLink = styled(Link)`
  transition: color 0.5s;
  &:hover {
    color: ${palette.primary.light};
    transition: color 0.5s;
  }
`

export {
  AuthContainer,
  AuthForm,
  AuthFormTitle,
  AuthFormGroup,
  AuthFormLabel,
  AuthFormInput,
  AuthFormButton,
  AuthLink,
}
