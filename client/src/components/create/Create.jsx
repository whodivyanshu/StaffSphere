import React, {useState} from 'react'
import Styles from "./create.module.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};




const Create = ({ onClose}) => {
    
    
    
    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [department, setdepartment] = useState("");
    const [status, setstatus] = useState("");
    const [address, setaddress] = useState("");


    const handleSubmit =async () => {
        const formData = {
            name,
            age,
            department,
            status,
            address
        }
        try{
            if(name==="" || age==="" || department==="" || status==="" || address===""){
                alert("Please fill all the fields");
                return;
            }
            
            const response = await fetch("https://divyanshuweb.onrender.com/insert",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(formData)
            
                
    
            });

            
        }
        catch(err){
            console.log(err);
        }
        window.location.reload();
    
    }







    return (    
        <Box className={Styles.container}  sx={style}>
            <h1>Create</h1>
            <div className={Styles.inputs}>

            <label htmlFor="name">Name :  </label>
            <input onChange={(e)=>setname(e.target.value)}  value={name} type="text" id='name' />
            </div>
            <div className={Styles.inputs}>

            <label htmlFor="age">Age :  </label>
            <input value={age} onChange={(e)=>setage(e.target.value)}  type="number" id='age' />
            </div>
            <div className={Styles.inputs}>

            <label htmlFor="address">Address :  </label>
            <input value={address} onChange={(e)=>setaddress(e.target.value)} type="text" id='address' />
            </div>
            <div className={Styles.inputs}>

            <label htmlFor="status">Status :  </label>
            <input value={status} onChange={(e)=>setstatus(e.target.value)} type="text" id='status' />
            </div>
            <div className={Styles.inputs}>

            <label htmlFor="department">Department :  </label>
            <input value={department} onChange={(e)=>setdepartment(e.target.value)} type="text" id='department' />
            </div>

            <hr className={Styles.hr} />

            <div className={Styles.btns} >

            <Button variant='contained' onClick={onClose} >Close</Button>
            <Button variant='contained'  onClick={handleSubmit} >Save</Button>
            </div>
        </Box>
    )
}

export default Create