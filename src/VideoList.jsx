import React from 'react'

let VideoList = (props) => {
   const videoID = props.videoSource.id.videoId
   const videoURL = `http://www.youtube.com/embed/${videoID}`

        return (
            <div>
                <iframe src={videoURL}/>
            </div>
        )
    }
 

export default VideoList