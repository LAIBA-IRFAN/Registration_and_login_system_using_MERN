import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration=()=>{
    const [details , setDetails] = useState({
        firstName:'',
        lastName:'',
        emailAddress:'',
        phoneNumber:'',
        password:'',
        confirmPassword:''
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


    const handleSubmit=(e)=>{
        e.preventDefault();
        axios
        .post('http://localhost:3000/students' , details ,
        {headers:{"Content-Type" : "application/json"}}
        )
        .then((res)=>{
            setDetails((prevValue)=>{
            return{
                ...prevValue,
                firstName:'',
                lastName:'',
                emailAddress:'',
                phoneNumber:'',
                password:'',
                confirmPassword:''
            }

            })
            console.log(details)

            navigate('/login')

        })

        .catch((err)=>{
            console.log(`The error is ${err}`)
        })
        

    }
    return(
        <>
        <a href='/newpage'>New Page</a>
        <br></br>
        <a href='/secondpage'>Second Page</a>
        <br></br>
        <a href='/thirdpage'>Third Page</a>
        <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <TextField onChange={change} label="firstName" value={details.firstName} name="firstName" id="outlined-basic" variant="outlined"/>
        <TextField onChange={change} label="lastName" value={details.lastName} name="lastName" id="outlined-basic" variant="outlined" />
        <TextField onChange={change} label="emailAddress" value={details.emailAddress} name="emailAddress" id="outlined-basic" variant="outlined" />
        <TextField onChange={change} label="phoneNumber" value={details.phoneNumber} name="phoneNumber" id="outlined-basic" variant="outlined" />
        <TextField onChange={change} label="password" value={details.password} name="password" type='password' id="outlined-basic" variant="outlined" />
        <TextField onChange={change} label="confirmPassword" value={details.confirmPassword} name="confirmPassword" type='password' id="outlined-basic" variant="outlined" />
        <Button variant="contained" type='submit'>SUBMIT</Button>

        </form>
        </>

    )

}

export default Registration;