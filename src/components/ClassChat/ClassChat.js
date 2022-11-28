import React from 'react'
import css from './ClassChat.module.css';

export const ClassChat = ({ title }) => {
  return (
    <ClassChat className={css.ClassChat}>
      <span>{title}</span>
    </ClassChat>
  )
}


