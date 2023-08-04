"use client"
import React, {useState} from 'react'
import Styles from "./employeeData.module.css";
import { Box, Button } from '@mui/material';


const EmployeeData = (props) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const [Name, setName] = useState(props.name)
const [updateDisable, setUpdateDisable] = useState(true);
const [Age, setAge] = useState(props.age)
const [Department, setDepartment] = useState(props.department)
const [Status, setStatus] = useState(props.status)
const [Address, setAddress] = useState(props.address)
const [id, setId] = useState("")
// const [showEdit, setShowEdit] = useState(false)
// const [showDelete, setShowDelete] = useState(false)


  return (

    <Box className={Styles.container}  sx={style}>
      <div className={Styles.left} >

            <h1>Create</h1>
            <div className={Styles.inputs}>

            <label htmlFor="name">Name :  </label>
            <input onChange={(e)=>{setName(e.target.value); if(e.target.value === props.name){
              setUpdateDisable(true)
            }
            else{
              
              setUpdateDisable(false)
            }}}  value={Name} type="text" id='name' />
            </div>
            <div className={Styles.inputs}>

            <label htmlFor="age">Age :  </label>
            <input value={Age} onChange={(e)=>{setAge(e.target.value); if(e.target.value == props.age){
                setUpdateDisable(true)
              }
              else{
                
                setUpdateDisable(false)
              }}}  type="number" id='age' />
            </div>
            <div className={Styles.inputs}>

            <label htmlFor="address">Address :  </label>
            <input value={Address} onChange={(e)=>{setAddress(e.target.value); if(e.target.value === props.address){
              setUpdateDisable(true)
            }
            else{

              setUpdateDisable(false)
            }}} type="text" id='address' />
            </div>
            <div className={Styles.inputs}>

            <label htmlFor="status">Status :  </label>
            <input value={Status} onChange={(e)=>{setStatus(e.target.value); if(e.target.value === props.status){
              setUpdateDisable(true)
            }
            else{
              
              setUpdateDisable(false)
            }}} type="text" id='status' />
            </div>
            <div className={Styles.inputs}>

            <label htmlFor="department">Department :  </label>
            <input value={Department} onChange={(e)=>{setDepartment(e.target.value); if(e.target.value === props.department){
              setUpdateDisable(true)
            }
            else{
              
              setUpdateDisable(false)
            }}} type="text" id='department' />
            </div>

            <hr className={Styles.hr} />

            <div className={Styles.btns} >

            <Button variant='contained' onClick={props.onClose} >Close</Button>
            <Button variant='contained' disabled = {updateDisable} >Update</Button>
            </div>
            </div>

            <div className={Styles.right} >
              <h1>Location</h1>
            </div>
        </Box>


  )
}

export default EmployeeData;