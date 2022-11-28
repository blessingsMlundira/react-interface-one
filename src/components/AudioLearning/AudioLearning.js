import React from 'react'
import css from './AudioLearning.module.css';

export const AudioLearning = ({ title }) => {
  return (
    <AudioLearning className={css.AudioLearning}>
      <span>{title}</span>
    </AudioLearning>
  )
}


