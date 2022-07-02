import styled from 'styled-components'

const ErrorMessage = styled.p`
  color: red;
  margin: 0;
  align-self: flex-start;
`

const FormErrorMessages = ({ errors }) => {
  return (
    errors &&
    errors.map((error, index) => {
      return <ErrorMessage key={index}>{error}</ErrorMessage>
    })
  )
}

export default FormErrorMessages
