"use client"
import React, { useContext, useState } from 'react'
import Styles from "./main.module.css"
import employeeContext from '@/context/employeeContext'
import Card from '../card/Card';
import Create from '../create/Create';
import Button from '@mui/material/Button';

const Main = () => {
  const [showCreate, setshowCreate] = useState(false);
    const empData = useContext(employeeContext);


    const handleCreate = () => {
        setshowCreate(true);
    }
    const handleClose = () => {
        setshowCreate(false);
    }



  return (
    <div className={Styles.main} >
       {empData.map((employee) => (
                <Card key={employee.id} name={employee.name} />
            ))}



            <Button className={Styles.btn} onClick={handleCreate} variant='contained' >+</Button>
            {showCreate && <Create onClose={handleClose} />}

    </div>
  )
}

export default Main;