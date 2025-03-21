import React, { useState ,useContext} from 'react';
import "./Login.css";
import InstaGram from "./assets/InstaGram.jpeg";
import { Link } from 'react-router-dom';
import { usersRef } from './components/Firebase/Firebase';
import { getDocs, where, query } from 'firebase/firestore';
import swal from 'sweetalert';
import bcrypt from 'bcryptjs';
import { context } from './App';


const Login = () => {

  const appState = useContext(context)

  const [form, setForm ] = useState({
    mobile:"",
    password:"",
  })


  const login = async () =>{
   
    try {
      const quer = query(usersRef, where("mobile", "==" ,form.mobile))

      const querySnapShot = await getDocs(quer)

      querySnapShot.forEach((doc)=>{
        const _data = doc.data()
        const isUser = bcrypt.compareSync(form.password, _data.password)
        console.log(isUser)
        if(isUser){
          appState.setLogin(true)

          swal({
            title: "Logged In Successfully!",
            icon: "success",
            button: "OK",
            timer:"3000",
          })
        }else{
          swal({
            title: "Invalid Credintial",
            icon: "error",
            button: "OK",
            timer:"3000",
          })

        }
      })
      
    } catch (error) {
     console.log(error.message)
      
    }

  }



  console.log(form)

  return (
    <div className='loginDisplay'>

      <div className="instaBoxesL">

  <div className="mainBox">
           <div className="instaLogin">
          <img className='instagramL' src={InstaGram} alt="instaLogo" />
           </div>
        <div className="Linputs">
          <input className='inputSize' value={form.mobile} onChange={(e)=> setForm({ ...form , mobile:e.target.value})} type="number" placeholder='Phone Number' />
          <input className='inputSize' value={form.password} onChange={(e)=> setForm({ ...form , password:e.target.value})} type="password" placeholder='password' />
        </div>
        <div className="button">
          <button onClick={login}>Log In</button>
        </div>
        <div className="line">
          <hr/>OR<hr/>
        </div>
        <div className="fbLogin">
          <img className='fbLogo' src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png" alt="fbLogin" />
          <h3>Login with FaceBook</h3>
        </div>
        <div className="forgot">
        <h3>Forgot Password ?</h3>
        </div>

  </div>
        <div className="midBox">

          <div className="signUp">
            <h3>Don't have an account ?</h3>
                <div className='BTN'>  <Link className='btnStyle' to={"/SignUp"} >SignUp</Link></div>
          
          </div>

        </div>
        <div className="lastBox">
          <div className='appFlex'>Get the app.</div>
          <div className="signInImg">
            <img className='signImg' src="https://static.cdninstagram.com/rsrc.php/v4/yz/r/c5Rp7Ym-Klz.png" alt="google Play" />
            <img className='signImg' src="https://static.cdninstagram.com/rsrc.php/v4/yu/r/EHY6QnZYdNX.png" alt="google Play" />
          </div>

        </div>

      </div>
  
    </div>
  )
}

export default Login
