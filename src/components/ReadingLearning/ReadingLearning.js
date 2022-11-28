import React from 'react'
import css from './ReadingLearning.module.css';

export const ReadingLearning = ({ title }) => {
  return (
    <ReadingLearning className={css.ReadingLearning}>
      <span>{title}</span>
    </ReadingLearning>
  )
}


