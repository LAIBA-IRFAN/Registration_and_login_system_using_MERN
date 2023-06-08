import React,{useEffect} from "react";
import Cookies from 'universal-cookie';
import axios from "axios";

const NewPage = () =>{
    const cookies = new Cookies();
    const token = cookies.get("mycookie")
    // const token = JSON.stringify({oldtoken})

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:3000/newpage", {
              headers: {
                Authorization: token,
                // "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
              }
            });
            console.log(response.data)
          } 
          catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
    return(
        <>
        
        <h1>Hello, This is First Page</h1>
        </>
    )
}

export default NewPage;