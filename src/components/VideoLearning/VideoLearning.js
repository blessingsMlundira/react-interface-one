import React from 'react'
import css from './VideoLearning.module.css';
// import {DefaultPlayer as Video} from 'react-html5video';
// import 'react-html5video/dist/style.css';
import videoFile from './videos/videoFile.mp4';


export const VideoLearning = ({ title }) => {
  return (
    <VideoLearning className={css.VideoLearning}>
      <span>{title}</span>
      <p>some more content will come here</p>
      
      
    </VideoLearning>
  )
}
