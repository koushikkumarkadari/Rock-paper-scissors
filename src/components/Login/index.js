import {Component} from 'react'
import Cookies from 'js-cookie'
import {
  ContainerBig,
  Container,
  Image,
  Text,
  Input,
  CustomButton,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    error: '',
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      Cookies.set('jwt_token', data.jwt_token, {expires: 1})
      const {history} = this.props
      history.push('/')
    } else {
      const data = await response.json()
      console.log(data)
      this.setState({showError: true, error: data.error_msg})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {username, password, showPassword, error, showError} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme} = value
          console.log(lightTheme)
          return (
            <ContainerBig lightTheme={lightTheme}>
              <Container lightTheme={lightTheme}>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
                <Container
                  lightTheme={lightTheme}
                  as="form"
                  onSubmit={this.onLogin}
                >
                  <Container lightTheme={lightTheme}>
                    <Text lightTheme={lightTheme} as="label" htmlFor="username">
                      USERNAME
                    </Text>
                    <Input
                      onChange={this.onChangeUsername}
                      value={username}
                      type="text"
                      id="username"
                    />
                  </Container>
                  <Container lightTheme={lightTheme}>
                    <Text lightTheme={lightTheme} as="label" htmlFor="password">
                      PASSWORD
                    </Text>
                    <Input
                      onChange={this.onChangePassword}
                      value={password}
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                    />
                  </Container>
                  <Container lightTheme={lightTheme}>
                    <Input
                      onChange={this.onChangeShowPassword}
                      id="showPassword"
                      checked={showPassword}
                      type="checkbox"
                    />
                    <Text
                      lightTheme={lightTheme}
                      as="label"
                      htmlFor="showPassword"
                    >
                      Show Password
                    </Text>
                  </Container>
                  <CustomButton type="submit">Login</CustomButton>
                  {showError && <Text>{`*${error}`}</Text>}
                </Container>
              </Container>
            </ContainerBig>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
