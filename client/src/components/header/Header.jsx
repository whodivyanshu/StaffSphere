import React from 'react';
import Styles from "./header.module.css"
import { Lilita_One } from 'next/font/google';
import Button from '@mui/material/Button';




const lilitaone = Lilita_One({
    weight: "400",
    subsets: ['latin']
})



const Header = () => {
    return (
    <div className={Styles.header}>
        <h1 style={lilitaone.style}>
        StaffSphere

        </h1>
        <Button variant="contained">Dashboard</Button>
        </div>
  )
}

export default Header