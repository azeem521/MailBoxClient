
import classes from './SignUp.module.css'

import React, { Fragment, useState } from 'react'

const SignUp = () => {
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [confPass,setconfPass]=useState('')
    const [isCursorAllow,SetisCursorAllow]=useState(true)

    const emailChangeHandler =(e)=>{
        setemail(e.target.value)
    }
const passwordChangeHandler =(e)=>{
    setpassword(e.target.value)
}

    const confPassChangeHandler =(e)=>{
        setconfPass(e.target.value)
        SetisCursorAllow(false)
    }
    const submitHandler = async(e)=>{
        e.preventDefault()
        if(confPass!==password){
            return alert('Confirm password and password is not same');
        }
        let url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBQ6bTtVBaFvjcG7dc8ukqQSjqGkRF4ivY';
        const singUp=await fetch(url,{
            method:'POST',
            body:JSON.stringify({
                email:email,
                password:password
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await singUp.json()
        console.log(data,'data');
        if(!singUp.ok){
            alert(data.error.message)
        }else{
            console.log('sign up successfully');
        }
      
    }
    return (
        <Fragment>
            <section className={classes.auth}>
                <h1>Sign up</h1>
                <form onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <label htmlFor='email'>Your Email</label>
                        <input type='email'  required onChange={emailChangeHandler} value={email} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Your Password</label>
                        <input type='password'  required onChange={passwordChangeHandler} value={password} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='confpassword'>Confirm Password</label>
                        <input type='confpassword' required onChange={confPassChangeHandler} value={confPass} />
                    </div>
                    <div className={classes.actions}>
                        <button type='submit' style={{'cursor':isCursorAllow ? 'not-allowed':'pointer'}} >Create Account</button>
                       
                    </div>
                </form>
            </section>
        </Fragment>
      )
    }
    

export default SignUp