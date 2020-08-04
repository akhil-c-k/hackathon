import React,{useState} from 'react'
import {Redirect,Route} from  'react-router-dom'
import history from '../common/History'
import './login.scss'

const Login = (props) =>
 {
     const {from} = props.location.state || {from:{pathname:'/'}}
     const [loggedIn] = useState(false)
     const [Name,setName] = useState('')
     const [Password,setPassword] = useState('');
     
     const submitValue = (e) => {
         const formdetails = {
             'Name':Name,
             'Password': Password
         }
        const userName = localStorage.getItem("Username");
        const passWord = localStorage.getItem("Password");

        const submittedName = formdetails.Name;
        const submittedPassword = formdetails.Password
        if((submittedName == userName && submittedPassword == passWord) == true)
             {
                 localStorage.setItem("userLoggedin","true")
                 history.push('/landing')
                 return <Redirect to={from} />
             }
             else{
                 history.push('/')
             }
     }

     return(
         <div className="login-outer-wrapper">
            <form className="login-form-wrapper">
               <input className="input-box" name="user" type="text" placeholder="username" onChange={e=>setName(e.target.value)}/>
                <br/>
                <input className="input-box" name="pass" type="text" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
                 <button className="login-btn" onClick={submitValue}>Login</button>
                </form>
         </div>
     )
 }

 export default Login;