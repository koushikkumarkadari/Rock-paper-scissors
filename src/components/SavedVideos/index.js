import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'

class SavedVideos extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {savedVids} = value
          return (
            <ul>
              {savedVids.map(item => (
                <li key={item.id}>
                  <img src={item.thumbnailUrl} />
                  <p>{item.title}</p>
                  <p>{item.channel.name}</p>
                  <img src={item.channel.profileImageUrl} />
                  <p>{item.viewCount}</p>
                  <p>{item.publishedAt}</p>
                </li>
              ))}
            </ul>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
