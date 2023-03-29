import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkTheme ? '#181818 ' : '#f9f9f9 ')};
  display: flex;
  flex-direction: column;
`
export const FormInput = styled.input`
  background-color: transparent;
  font-size: 13px;
  height: 35px;
  padding: 0px 12px;
  border: 1px solid ${props => (props.darkTheme ? '#475569' : '#cbd5e1')};
  width: 100%;
  color: ${props => (props.darkTheme ? '#cbd5e1' : '#475569')};
`
export const SearchButton = styled.button`
  height: 35px;
  padding: 0px 30px;
  color: ${props => (props.darkTheme ? '#cbd5e1' : '#475569')};
  border: 1px solid ${props => (props.darkTheme ? '#475569' : '#cbd5e1')};
  background-color: ${props => (props.darkTheme ? '#212121' : '#f9f9f9')};
  outline: none;
  cursor: pointer;
`
export const RightColumn = styled.div`
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    width: 79vw;

    margin-left: 21vw;
  }
`
