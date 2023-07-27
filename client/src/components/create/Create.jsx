import React from 'react'
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


const Create = ({ onClose }) => {
    return (
        <Box classname={Styles.container} sx={style}>
            <h1>Create</h1>
            <label htmlFor="name">Name :  </label>
            <input type="text" id='name' />
            <hr className={Styles.hr} />
            <div >

            <Button variant='contained' onClick={onClose} >Close</Button>
            <Button variant='contained' >Save</Button>
            </div>
        </Box>
    )
}

export default Create