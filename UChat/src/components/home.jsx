import React from 'react'
import './styles.css';
import { Button} from '@mui/material';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div >
      <section className='whole-bg'>
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
      <div className='background hm' >
        <div className='opacity-bg'></div>
        <header className='pt-5'>
          <div>
            <img width="400px" src="/images/home.png" />
          </div>

        </header>
        <div className='welcome-1'>
              <div>
              <h1>Welcome to <span className='logo'>U-Chat</span></h1>
              <p>This is new chatting website .All existing users can talk with each other just by create an account .</p>
              </div>
           </div>
        <div className='bts' >
              <Link to="/login"><Button variant="contained" className='bts me-4'>Login</Button></Link>
              <Link to="/register"><Button variant="contained" className='bts' color='warning'>Register</Button></Link>
        </div>
      </div>
      </section>
    </div>
  )
}
