import React from 'react'
import Styles from "./card.module.css"
import { Button } from '@mui/material'
const Card = (props) => {
  return (
    <div className={Styles.card} ><Button className={Styles.btn}>{props.name}</Button></div>
  )
}

export default Card