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





  return (
    <div className={Styles.main} >
       {empData.map((employee) => (
                <Card  key={employee._id} name={employee.name}  printId = {()=>handleClick(employee._id)}    />
            ))}



            <Button className={Styles.btn} onClick={handleCreate} variant='contained' >+</Button>
            {showCreate && <Create onClose={handleClose}   />}
            {showData && <EmployeeData  idd={empid} onClose = {handleDataClose} name = {empData[index].name}  
            age = {empData[index].age} address = {empData[index].address} status = {empData[index].status} department = {empData[index].department}
            
            />}

    </div>
  )
}

export default Main;