import {Component} from 'react'
import {Link} from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <>
        <p>
          <Link to="/">home</Link>
        </p>
        <p>
          <Link to="/trending">trending</Link>
        </p>
        <p>
          <Link to="/gaming">gaming</Link>
        </p>
        <p>
          <Link to="/saved-videos">saved</Link>
        </p>
      </>
    )
  }
}

export default Sidebar
