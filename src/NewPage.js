import React,{useEffect, useState} from "react";
import Cookies from 'universal-cookie';
import axios from "axios";
import Button from '@mui/material/Button';

const NewPage = ({setIsLoggedIn}) =>{      
    const cookies = new Cookies();
    
    const Logout=()=>{
        cookies.remove("mycookie");
        setIsLoggedIn(false)
        console.log('HELLO')
    }
    // const [info , setInfo] = useState(false)

    // useEffect(() => {
    //     const fetchData = async (req, res) => {
    //       try {
    //         const response = await axios.get("http://localhost:3000/newpage", {
    //           headers: {
    //             Authorization: token
    //           }
    //         })
    //         const decodedtoken = await response.data;
    //         if(decodedtoken){
    //           setInfo(true)
    //         }
            
    //       } 
    //       catch (error) {
    //         console.error(`The error is ${error}`);
    //       }
    //     };
    
    //     fetchData();
    //   });
    return(
        <>
        <h1>Hello, This is First Page</h1> 
        <br></br>
        <Button variant="contained" type='submit'
        onClick={Logout}>LOGOUT</Button>
        
        </>

    )
}

export default NewPage;