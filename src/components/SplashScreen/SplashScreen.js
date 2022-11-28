import React from 'react'
import css from './SplashScreen.module.css';

export const SplashScreen = ({ title }) => {
  return (
    <SplashScreen className={css.SplashScreen}>
      <span>{title}</span>
    </SplashScreen>
  )
}


