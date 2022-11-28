import React from 'react'
import css from './Infographic.module.css';

export const Infographic = ({ title }) => {
  return (
    <Infographic className={css.Infographic}>
      <span>{title}</span>
    </Infographic>
  )
}


