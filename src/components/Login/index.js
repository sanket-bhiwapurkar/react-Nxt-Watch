import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginContainer,
  LoginForm,
  Logo,
  FormLabel,
  FormInput,
  CheckBox,
  CheckboxLabel,
  LoginButton,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class Login extends Component {
  state = {username: '', password: '', errMsg: '', showPassword: false}

  onUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  togglePasswordView = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onLogin = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }

    const response = await fetch(url, options)
    let data
    if (response.ok === true) {
      data = await response.json()
      this.onLoginSuccess(data)
    } else {
      data = await response.json()
      this.onLoginFailure(data)
    }
  }

  onLoginSuccess = data => {
    const jwtToken = data.jwt_token
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = async data => {
    this.setState({errMsg: data.error_msg})
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {username, password, errMsg, showPassword} = this.state
    const passwordInputType = showPassword ? 'text' : 'password'
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          const logoImg = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginContainer darkTheme={darkTheme} className="Login-container">
              <LoginForm darkTheme={darkTheme} onSubmit={this.onLogin}>
                <Logo src={logoImg} alt="website logo" />
                <FormLabel darkTheme={darkTheme} htmlFor="username">
                  USERNAME
                </FormLabel>
                <FormInput
                  darkTheme={darkTheme}
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={this.onUsernameChange}
                />
                <FormLabel darkTheme={darkTheme} htmlFor="password">
                  PASSWORD
                </FormLabel>
                <FormInput
                  darkTheme={darkTheme}
                  id="password"
                  type={passwordInputType}
                  placeholder="Password"
                  value={password}
                  onChange={this.onPasswordChange}
                />
                <div>
                  <CheckBox
                    type="checkbox"
                    id="checkbox"
                    onChange={this.togglePasswordView}
                  />
                  <CheckboxLabel darkTheme={darkTheme} htmlFor="checkbox">
                    Show Password
                  </CheckboxLabel>
                </div>
                <LoginButton type="submit">Login</LoginButton>
                {errMsg !== '' ? <p className="errMsg">*{errMsg}</p> : null}
              </LoginForm>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Login
