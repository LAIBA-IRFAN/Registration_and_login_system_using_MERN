import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const Login=()=>{
    const cookies = new Cookies();
    const [details , setDetails] = useState({
        emailAddress:'',
        password:'',
    })

    const navigate = useNavigate();

    const change=(e)=>{
        setDetails((prevValue)=>{
            return{
                ...prevValue,
                [e.target.name]:e.target.value
            }
        })
    }


    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(details)
        try{
            const response = await axios.post('http://localhost:3000/login' , details,
            {headers:{"Content-Type" : "application/json"}}
            )
            const token = response.data.token;
            console.log(token)
            cookies.set( "mycookie" , token , {
                expires: new Date(Date.now() + 6000000000)
            })

            setDetails((prevValue)=>{
                return{
                    ...prevValue,
                    emailAddress:'', 
                    password:'',
                }
            })
            navigate('/newpage')
                    // navigate('/newpage')

        }

        catch(err){
            console.log(err)

        }
        

    }
    return(
        <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <TextField onChange={change} label="emailAddress" value={details.emailAddress} name="emailAddress" id="outlined-basic" variant="outlined" />
        <TextField onChange={change} label="password" value={details.password} name="password" type='password' id="outlined-basic" variant="outlined" />
        <br></br>
        <a href='/register'>Register now</a>
        <Button variant="contained" type='submit'>SUBMIT</Button>

        </form>

    )

}

export default Login;