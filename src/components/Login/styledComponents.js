import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: ${props => (props.darkTheme ? '#181818' : '#ffffff')};
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  box-shadow: 0px 4px 16px 0px ${props => (props.darkTheme ? '' : '#bfbfbf')};
  background-color: ${props => (props.darkTheme ? '#000000' : '#ffffff')};
  border-radius: 8px;
  font-family: 'Roboto';
  width: 100%;
  max-width: 400px;
`
export const Logo = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
  align-self: ${props => (props.align === 'left' ? 'flex-start' : 'center')};
`
export const FormLabel = styled.label`
  font-size: 13px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 6px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#64748b')};
`
export const FormInput = styled.input`
  background-color: transparent;
  font-size: 13px;
  height: 35px;
  padding: 0px 12px;
  border: 1px solid #cbd5e1;
  color: ${props => (props.darkTheme ? '#cbd5e1' : '#475569')};
  border-radius: 3px;
`
export const CheckBox = styled.input`
  margin-top: 16px;
  margin-right: 8px;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  border-radius: 8px;
  color: #ffffff;
  font-weight: bold;
  height: 35px;
  border: 0px;
  outline: none;
  cursor: pointer;
  margin-top: 30px;
`
export const CheckboxLabel = styled.label`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
