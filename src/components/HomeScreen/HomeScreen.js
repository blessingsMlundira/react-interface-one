import React from 'react'
import css from './HomeScreen.module.css';

export const HomeScreen = ({ title }) => {
  return (
    <HomeScreen className={css.HomeScreen}>
      <span>{title}</span>
    </HomeScreen>
  )
}

export const BlackBG = () => {
  return (<BlackBG className={css.BlackBG}>
    <center>
                
                <p>Homescreen will come here</p>
                
          </center>
  </BlackBG>)
}


