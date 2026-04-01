import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'

import Cookies from 'js-cookie'

import {Container, Image, Button} from './styledComponents'

class Navbar extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <Container>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt-watch-logo-light-theme-img"
        />
        <Container>
          <Button>light</Button>
          <Button>profile</Button>
          <Button onClick={this.onClickLogout}>logout</Button>
        </Container>
      </Container>
    )
  }
}
export default withRouter(Navbar)
