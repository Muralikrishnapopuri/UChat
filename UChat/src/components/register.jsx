import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useFormik} from 'formik';
import axios from 'axios';
export default function Register() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues:{
      UserName:'',
      Email:'',
      Password:'',
      ConfirmPassword:''
    },
    onSubmit:(values =>{
      axios.post("http://127.0.0.1:8022/register",values).then(() =>{
        alert("Register successfull...NOW You Login.");
        navigate("/login");
      })
    })
  })
  
  return (
    <div>
      
      <section>
             <div className='leaves'>
                <div className='set'>
                    <div><img width="20px" src="images/leave-1.png"/></div>
                    <div><img width="50px" src="images/leave-2.png"/></div>
                    <div><img width="50px" src="images/leave-1.png"/></div>
                    <div><img width="50px" src="images/leave-2.png"/></div>
                    <div><img width="10px" src="images/leave-1.png"/></div>
                    <div><img width="50px" src="images/leave-2.png"/></div>
                    <div><img width="30px" src="images/leave-1.png"/></div>
                    <div><img width="50px" src="images/leave-2.png"/></div>
                </div>
            </div>
            <div>
             <div className='background'>
             <div className='opacity-bg'></div>
                    <div >
                        <form onSubmit={formik.handleSubmit} className='form-design'> 
                        <div className='d-flex justify-content-start'>
                            <img   width="70px" src="/images/register.png"/>
                            <h1 className='ps-4' >Register</h1>
                          </div>
                        <TextField name="UserName" onChange={formik.handleChange} className = "textfield"  label="UserName" variant="outlined" type='text' />
                        <TextField name="Email" onChange={formik.handleChange} className = "textfield"  label="Email" variant="outlined" type="email" />
                        <TextField name="Password" onChange={formik.handleChange} className = "textfield"  label="Password" variant="outlined" type="password"/>
                        <TextField name="ConfirmPassword" onChange={formik.handleChange} className = "textfield" label="Confirm Password" variant="outlined" type="password" />
                     
                        <Button type='submit'  variant="contained">Register</Button>
                        <Link to="/login">Already I Have An Account ? Login</Link>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
