import React,{useEffect, useState} from "react";
import Cookies from 'universal-cookie';
import axios from "axios";

const NewPage = () =>{      
    // const cookies = new Cookies();
    // const token = cookies.get("mycookie")
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
        // <>
        // {
        // info ?
        <h1>Hello, This is First Page</h1> 
        // : null
        // }
        // </>
    )
}

export default NewPage;