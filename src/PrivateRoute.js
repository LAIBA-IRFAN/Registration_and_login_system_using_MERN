import React,{useEffect, useState} from "react";
import Cookies from 'universal-cookie';
import axios from "axios";
import { BrowserRouter , Routes , Route, useNavigate } from "react-router-dom";


const PrivateRoute=({component:Component , ...rest})=>{
    const cookies = new Cookies();
    const token = cookies.get("mycookie")
    const [isLoggedIn , setIsLoggedIn] = useState(false)
    const navigate = useNavigate() 
  
    useEffect(() => {
      const fetchData = async (req, res) => {
        try {
          const response = await axios.get("http://localhost:3000/newpage", {
            headers: {
              Authorization: token
            }
          })
          const decodedtoken = await response.data;
          if(decodedtoken){
            console.log('HELLO WORLD')
            setIsLoggedIn(true)
          }
          
        } 
        catch (error) {
          console.error(`The error is ${error}`);
        }
      };
  
      fetchData();
    });
    return(
    //     <Route {...rest}
    //       render={(props) =>
    //         isLoggedIn ? (
    //         <Component {...props} />
    //       ) : (
    //         navigate('/')
    //       )
    //     }
    //   />

    <Route {...rest} element={<Component />} />

        
    )
}

export default PrivateRoute;