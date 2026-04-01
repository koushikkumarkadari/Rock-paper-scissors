import {Component} from 'react'
import Cookies from 'js-cookie'

import Navbar from '../Navbar'
import SideBar from '../SideBar'

class Gaming extends Component {
  state = {
    videoList: [],
  }

  componentDidMount() {
    this.getVideosApiCall()
  }

  getVideosApiCall = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const formattedData = fetchedData.videos.map(item => ({
        id: item.id,
        title: item.title,
        thumbnail: item.thumbnail_url,
        viewCount: item.view_count,
      }))
      this.setState({
        videoList: formattedData,
      })
    }
  }

  renderVideos = () => {
    const {videoList} = this.state
    return (
      <ul>
        {videoList.map(item => (
          <li key={item.id}>
            <img src={item.thumbnail} />
            <p>{item.title}</p>
            <p>{item.viewCount}</p>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <>
        <Navbar />
        <SideBar />
        <div>{this.renderVideos()}</div>
      </>
    )
  }
}

export default Gaming
