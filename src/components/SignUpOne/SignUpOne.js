import React from 'react'
import css from './SignUpOne.module.css';

export const SignUpOne = ({ title }) => {
  return (
    <SignUpOne className={css.SignUpOne}>
      <span>{title}</span>
    </SignUpOne>
  )
}


