import React, { useState } from 'react'
import './auth.css'
//import app from 'Firebase.config'
//import { getAuth, RecaptchaVerifier,signInWithPhoneNumber, verifyPasswordResetCode } from "firebase/auth";
import app from '../../Firebase.config';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { signup,login,login2} from 'src/actions/auth'
import firebase from '../../Firebase.config';
// import { auth } from 'firebase/auth';
//const auth = getAuth(app);







const Auth = () => {
const auth=firebase.auth()
const [phoneno,setphoneno]=useState("")
   const [phonelogin,setphonelogin]=useState(false)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [isSignup,setisSignup]=useState(false)
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setpassword]=useState('')
const [final, setfinal] = useState('');
const [verifyOTP,setOTPverify]=useState(false)
const [verify,setverify]=useState(false)
const [phonenumber,setphonenumber]=useState("")
const [otp,setotp]=useState(0)
const [verified,setverified]=useState(false)
    const handleswitch=()=>{
setisSignup(!isSignup)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!email && !password){
            alert("Enter a name to continue")
        }
        if(isSignup){
            if(!name){
                alert("Enter name to continue")
            }
            dispatch(signup({name,email,password,phoneno},navigate))

        }
        
        
        else{

dispatch(login({email,password},navigate))


           
        }
        
    }




// const onCaptchaverify=()=>{

    
//     window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
//       'size': 'normal',
      
//     //   'expired-callback': () => {
//     //     // Response expired. Ask user to solve reCAPTCHA again.
//     //     // ...
//     //   }
//     }, auth);
// }

const onsigninSubmit=()=>{

          if (phonenumber == "" || phonenumber.length < 10) return;
console.log(typeof(phonenumber))
        let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        auth.signInWithPhoneNumber("+91"+phonenumber, verify).then((result) => {
            setfinal(result);
            alert("code sent")
            setOTPverify(true)
        })
            .catch((err) => {
                alert(err);
                window.location.reload()
            });
}





const ChangeMobile=(mobile)=>{

    setphonenumber(mobile)
    console.log(mobile)
        if(mobile.length==10){
            setverify(true)
          
        }
        

}




const verifycode=()=>{
    

                if (otp === null || final === null)
                    return;
                final.confirm(otp).then((result) => {
                    // success

                    setverified(true)

                    dispatch(login2({phonenumber},navigate))
                         alert(phonenumber)
                }).catch((err) => {
                    alert("Wrong code");
                })

 }
const handlephonelogin=()=>{
    if(phonelogin){
        setphonelogin(false)

    }else{
        setphonelogin(true)
    }
}
  return (
    <div className='auth-box'>
<section className='auth-section'>
<div className='auth-container'>
   <div id="recaptcha-container"></div>

{
    isSignup? 
    // <img src={icon} alt="stack overflow" className='stackorverflow'/>
    <h1>Signup</h1>:<h1>Login</h1>
}

<form onSubmit={(e)=>{handleSubmit(e)}}>
 {
  (isSignup==true)&&(phonelogin==false)?
<>
    <label htmlFor="name">

    <h4>name</h4>
    <input type="text" name="name" id="name" onChange={(e)=>{setName(e.target.value)}}/>
</label>
</>:<div></div>

   }

 {
  (isSignup==true)&&(phonelogin==false)?
<>
    <label htmlFor="name">

    <h4>phoneno</h4>
    <input type="text" name="phoneno" id="phoneno" onChange={(e)=>{setphoneno(e.target.value)}}/>
</label>
</>:<div></div>

   }

   {
    (phonelogin==false)||(isSignup==true)?
    <>
    <label htmlFor="email">

        <h4>Email</h4>
        <input type="text" name="email" id="email"onChange={(e)=>{setEmail(e.target.value)}}/>
    </label><br></br>
    </>:<div></div>
}

{
    (phonelogin==true)&&(!isSignup) ?
    <>
 <label htmlFor="phonenumber">

 <h4>Phoneno</h4>

 <input value={phonenumber}  name="phonenumber" id="phonenumber" onChange={(e)=>{ChangeMobile(e.target.value)}} placeholder="phone number" />

</label>
</>:<div></div>
}
   
    
{ 
    
verify?
<>
<input type="button" value={verified?"verified":"verify"} style={{backgroundColor:"blue",width:"100px"}} onClick={onsigninSubmit}/><br></br></> :<div></div>


}
{ verifyOTP?
<>
    <label htmlFor="otp">

        <h4>OTP</h4>
        <input type="number" name="otp" id="otp"onChange={(e)=>{setotp(e.target.value)}}/>
    </label>

    <input type="button" value="verifyotp" onClick={verifycode} style={{backgroundColor:"blue",width:"100px"}}/>
    </>:<div></div>
}



    <label htmlFor="password">
<div >
{(phonelogin==false)?
        <h4>Password</h4>:<h4></h4>
    }       

        </div>
        { (phonelogin==false)?
        <input type="text" name="password"id="password" onChange={(e)=>{setpassword(e.target.value)}}/>:<p></p>
}
        {
    isSignup&&<p>password must contain at least eight characters 1 number and 1 special characters</p>

   }





    </label>
{
    isSignup&&
    <label htmlFor='check'>
<input type="checkbox" id='check'/>

<p>Opt in to recieve extra information</p>

    </label>
}
<br></br>
    <button type="submit"className='btn btn-primary'>{isSignup?'SignUp':'Login'}</button>
    {
    isSignup&&
    <p>By clicking on signup you will agree to terms and conditons of policy</p>

}
</form>
<p>

    {
        isSignup?'Already have a account':'Dont have an account'
    }
</p>
<button type="button" className='handle-switch-btn'onClick={handleswitch}>{isSignup?'login':'signup'}</button>
<button type="button" className='handle-switch-btn'onClick={handlephonelogin}>login using phoneno</button>
</div>


</section>



    </div>
  )


// const [mynumber, setnumber] = useState("");
//     const [otp, setotp] = useState('');
//     const [show, setshow] = useState(false);
//     const [final, setfinal] = useState('');
  
//     // Sent OTP
//     const signin = () => {
  
//         if (mynumber === "" || mynumber.length < 10) return;
//         let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
//         auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
//             setfinal(result);
//             alert("code sent")
//             setshow(true);
//         })
//             .catch((err) => {
//                 alert(err);
//                 window.location.reload()
//             });
//     }
  
//     // Validate OTP
//     const ValidateOtp = () => {
//         if (otp === null || final === null)
//             return;
//         final.confirm(otp).then((result) => {
//             // success
//         }).catch((err) => {
//             alert("Wrong code");
//         })
//     }
  
//     return (
//         <div style={{ "marginTop": "200px" }}>
//             <center>
//                 <div style={{ display: !show ? "block" : "none" }}>
//                     <input value={mynumber} onChange={(e) => { 
//                        setnumber(e.target.value) }}
//                         placeholder="phone number" />
//                     <br /><br />
//                     <div id="recaptcha-container"></div>
//                     <button onClick={signin}>Send OTP</button>
//                 </div>
//                 <div style={{ display: show ? "block" : "none" }}>
//                     <input type="text" placeholder={"Enter your OTP"}
//                         onChange={(e) => { setotp(e.target.value) }}></input>
//                     <br /><br />
//                     <button onClick={ValidateOtp}>Verify</button>
//                 </div>
//             </center>
//         </div>
//     );


























}

export default Auth