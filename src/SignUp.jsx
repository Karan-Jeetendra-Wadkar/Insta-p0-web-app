import React, { useState } from 'react';
import "./SignUp.css";
import InstaGram from "./assets/InstaGram.jpeg";
import { Link } from 'react-router-dom';
import { addDoc } from 'firebase/firestore';
import { usersRef } from './components/Firebase/Firebase';
import swal from 'sweetalert';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';


const SignUp = () => {
  
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    mobile:"",
    name:"",
    password:"",
  }) 

  const uploadData = async () =>{

    setLoading(true)

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(form.password, salt);

    await addDoc(usersRef,{
      mobile:form.mobile,
      name:form.name,
      password:hash,
    });

    swal({
           title: "Successfull !",
           text: "Account Has Been Created Successfully!",
           icon: "success",
           button: "OK",
           timer:"3000",
         });
         setLoading(false)
         navigate("/")

  }



  console.log(form)

  return (
   <div className='loginDisplay'>
    
    <div className="instaBoxes">
<div className="SUmainBox">

         <div className="instaLogin">
        <img className='instagram' src={InstaGram} alt="instaLogo" />
         </div>

         <div className="viewPage">
            <h2>
            Sign up to see photos and videos from your friends.
            </h2>
         </div>
         <div className="SUfbLogin">
        <img className='fbBtn' src="https://www.freeiconspng.com/uploads/images-facebook-logo-png-file-page-2-19.png" alt="fbLogin" />
        <h3>Login with FaceBook</h3>
      </div>
      <div className="line">
        <hr/>OR<hr/>
      </div>
      <div className="Linputs">
        <input className='inputSize' value={form.mobile} onChange={(e)=> setForm({ ...form, mobile:e.target.value})} type="number" placeholder='Mobile Number or Email' />
        <input className='inputSize' value={form.name} onChange={(e)=> setForm({ ...form, name:e.target.value})} type="text" placeholder='Full Name' />
        <input className='inputSize' value={form.password} onChange={(e)=> setForm({ ...form, password:e.target.value})} type="password" placeholder='Password' />
      </div>
      <div className="SignUpInfo">
        <div className="secondInfo">By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</div>
      </div>
      <div className="button">
        {loading ? (<TailSpin width={50} height={50} /> ):
        <button onClick={uploadData}>Sign Up</button>
}
      </div>
    

</div>
      <div className="midBox">

        <div className="signUp">
          <h3>Don't have an account ?</h3>
          <div className='BTN'>  <Link className='btnStyle'  to={"/"} >Login</Link></div>

        
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

export default SignUp
