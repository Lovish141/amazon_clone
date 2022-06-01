import "./Register.css"
import React,{useState,useEffect} from 'react'
import {Link ,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux"
import { registerInitiate } from "../../redux/actions"

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {user}=useSelector((state) => state.data)
  const history=useNavigate();
    
  let dispatch=useDispatch();
useEffect(()=>{
if(user){
  history('/')
}
}
,[user,dispatch])

  
  const register=(e)=>{
    e.preventDefault();
    dispatch(registerInitiate(email,password));
    setEmail('')
    setPassword('')
  }
  return (
    <div className="register">
      <Link to='/'>
        <img src='https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png' 
        className="register-logo" alt="Amazon-logo"/>
      </Link>
      <div className="register-container">
        <h1>Create Account</h1>
        <form>
        <h5>E-Mail</h5>
                <input
                 type='text' 
                 value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                />
                <h5>Password</h5>
                <input
                 type='password' 
                 value={password} 
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button type='submit' onClick={register} className='continue'>
                    Continue
                </button>
                <div className="detail">
                  <p> Already have an account ? </p>
                  <Link to='/login' className="signin-link">
                    <p> Sign In</p>
                  </Link>
                
                </div>
        </form>
      </div>
      
    </div>
  )
}

export default Register
