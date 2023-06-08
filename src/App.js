import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Registration from './Registration';
import Login from './Login';
import NewPage from './NewPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/newpage' element={<NewPage/>}/>
        <Route path='/secondpage' element={<SecondPage/>}/>
        <Route path='/thirdpage' element={<ThirdPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
