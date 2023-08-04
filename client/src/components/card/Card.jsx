import React from 'react'
import Styles from "./card.module.css"
import { Button } from '@mui/material'



const Card = (props) => {
  return (
    <div className={Styles.card} onClick={props.printId}  ><Button className={Styles.btn}>{props.name}</Button></div>
  )
}

export default Card