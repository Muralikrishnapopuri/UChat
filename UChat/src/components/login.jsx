import { Button, TextField } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { store } from '../App'
import {useCookies} from 'react-cookie';

export default function Login() {
  const [token,setToken] =useContext(store);
  const [cookies,setCookie,removecookie] = useCookies("token");
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues:{
      Email:'',
      Password:''
    },
    onSubmit:(values =>{
      axios.post('http://127.0.0.1:8022/login',values).then(
        res =>{
          setToken(res.data.token)
          setCookie("token",res.data.token,{maxAge:7200});
          console.log("token cookie stored..");

        } 
      )
    })
  });
  if(token){
    navigate('/myprofile')
  };

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
                              <img   width="70px" src="/images/login.png"/>
                              <h1 className='ps-4' >Login</h1>
                            </div>
                 
                            <TextField name="Email" type="email" onChange={formik.handleChange} className = "textfield" label="Email" variant="outlined" />
                            <TextField name="Password" type="password" onChange={formik.handleChange} className = "textfield" label="Password" variant="outlined" />
                
                            <Button type="submit"  variant="contained">Login</Button>
                            <Link to="/register">Create A New Account? Register</Link>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
