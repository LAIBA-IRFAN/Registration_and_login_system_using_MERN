import React from "react";
import Cookies from 'universal-cookie';
import Button from '@mui/material/Button';

const ThirdPage = ({setIsLoggedIn}) =>{
    const cookies = new Cookies();
    
    const Logout=()=>{
        cookies.remove("mycookie");
        setIsLoggedIn(false)
        console.log('HELLO')
    }
    return(
        <>
        <h1>Hello, This is Third Page</h1>
        <br></br>
        <Button variant="contained" type='submit'
        onClick={Logout}>LOGOUT</Button>
        </>
    )
}

export default ThirdPage;