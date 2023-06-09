import logo from './logo.svg';
import React,{useEffect, useState} from "react";
import Cookies from 'universal-cookie';
import axios from "axios";
import './App.css';
import { BrowserRouter , Routes , Route, useNavigate } from "react-router-dom";
import Registration from './Registration';
import Login from './Login';
import NewPage from './NewPage';
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage';


function App() {
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
        navigate('/')
        console.error(`The error is ${error}`);
      }
    };

    fetchData();
  });

  return (
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
        {isLoggedIn && <Route path='/newpage' element={<NewPage setIsLoggedIn={setIsLoggedIn}/>}/>}
        {isLoggedIn && <Route path='/secondpage' element={<SecondPage setIsLoggedIn={setIsLoggedIn}/>}/>}
        {isLoggedIn && <Route path='/thirdpage' element={<ThirdPage setIsLoggedIn={setIsLoggedIn}/>}/>}

      </Routes>
  );
}

export default App;
