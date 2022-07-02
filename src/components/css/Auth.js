import styled from 'styled-components'
import { Container as CommonContainer } from 'components/css/Common'

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
  background-color: #fdf5f5;
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
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 3px;
`

const AuthFormInput = styled.input`
  border: 1px solid grey;
  padding: 15px;
  border-radius: 4px;
  &:focus {
    border: 2px solid #ff9900;
    z-index: 10;
    outline: 0;
  }
`

const AuthFormButton = styled.button`
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

export {
  AuthContainer,
  AuthForm,
  AuthFormTitle,
  AuthFormGroup,
  AuthFormLabel,
  AuthFormInput,
  AuthFormButton,
}
