import React, {createContext, useState } from 'react'; 
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';

const context = createContext();

function App() {


  const [login, setLogin] = useState(false);

  const [userName, setUserName] = useState("");


  return (
    <>
    <context.Provider value={{login , setLogin, userName, setUserName }}>
  <div>

<div>
{
  login ?  <Home /> : <Routes>
  <Route path='/' element={<Login />}/>
  <Route path='/SignUp' element={<SignUp />}/>
</Routes>


}
</div>   

    </div>  
    </context.Provider>

    
 </> )
}

export default App

export {context}
