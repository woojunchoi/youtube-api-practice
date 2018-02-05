import React, { Component } from 'react';
import './App.css';
import YTSearch from "youtube-api-search";
import SearchBar from './SearchBar'
import VideoList from './VideoList'
const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";


class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      videos : [],
      selectedVideo : null
    }
  }
  componentDidMount() {
    YTSearch({ key: API_KEY, term: 'surfboard' }, (videos) => {
      console.log(videos)
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  changeTerm = (value) => {
    YTSearch({ key: API_KEY, term: value }, (videos) => {
      console.log(videos)
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    let videoItem = this.state.videos.map((video) => {
      return <VideoList key={video.etag} class={video.etag} videoSource={video}/>
    })
    return (
      <div>
       <SearchBar changeTerm={this.changeTerm} />
       {videoItem}
      </div>
    );
  }
}

export default App;
