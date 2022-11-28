import React from 'react'
import css from './LessonsList.module.css';

export const LessonsList = ({ title }) => {
  return (
    <LessonsList className={css.LessonsList}>
      <span>{title}</span>
    </LessonsList>
  )
}


