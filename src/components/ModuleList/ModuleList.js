import React from 'react'
import css from './ModuleList.module.css';

export const ModuleList = ({ title }) => {
  return (
    <ModuleList className={css.ModuleList}>
      <span>{title}</span>
    </ModuleList>
  )
}


