"use client"
import React, { useContext, useState } from 'react'
import Styles from "./main.module.css"
import employeeContext from '@/context/employeeContext'
import Card from '../card/Card';
import Create from '../create/Create';
import Button from '@mui/material/Button';
import EmployeeData from '../employeeData/EmployeeData';

const Main = () => {
  const [showCreate, setshowCreate] = useState(false);
      const empData = useContext(employeeContext);
    const [showData, SetshowData] = useState(false);
    const [empid, setEmpid] = useState("");


    const handleCreate = () => {
        setshowCreate(true);
    }
    const handleClose = () => {
        setshowCreate(false);
    }
    const [index, setIndex] = useState("");
    console.log(empData);

    const handleClick = (id)=>{
      setEmpid(id);
      for(var i=0;i<empData.length;i++){
        if(empData[i]._id === id){
         setIndex(i);
        }
      }
      SetshowData(true);
    }

    const handleDataClose = ()=>{
      SetshowData(false);
    }

    const stylee = {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      fontSize: '40px',
      fontWeight: 'bold',
      color: 'white',
      // backgroundColor: 'red',
      boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      zIndex: '1000'
    }



  return (
    <div className={Styles.main} >
       {empData.map((employee) => (
                <Card  key={employee._id} name={employee.name}  printId = {()=>handleClick(employee._id)}    />
            ))}



            {showCreate && <Create onClose={handleClose}   />}
            {showData && <EmployeeData  idd={empData[index].id} onClose = {handleDataClose} name = {empData[index].name}  
            age = {empData[index].age} address = {empData[index].address} status = {empData[index].status} department = {empData[index].department}
            
            />}
            <div className={Styles.plusbtn} >

            <Button sx={stylee} className={Styles.btn} onClick={handleCreate} variant='contained' >+</Button>
            </div>

    </div>
  )
}

export default Main;