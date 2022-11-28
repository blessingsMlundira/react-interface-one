import React from 'react'
import css from './QuizScreen.module.css';

export const QuizScreen = ({ title }) => {
  return (
    <QuizScreen className={css.QuizScreen}>
      <span>{title}</span>
    </QuizScreen>
  )
}


