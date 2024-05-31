import React, { useContext, useEffect, useState } from 'react'
import App, { store } from '../App'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AppBar, Avatar, Box, Button, IconButton, MenuItem, Toolbar, Typography , Menu , MenuList, Card, CardHeader, CardMedia, CardActions } from '@mui/material';
import { useCookies } from 'react-cookie';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { red } from '@mui/material/colors';
import { IoSend } from "react-icons/io5"; 
import { GrEmoji } from "react-icons/gr"; 

export default function Myprofile() {
    const [token,setToken] = useContext(store);
    const [data,setData] =useState(null);
    const navigate = useNavigate();
    const [cookies,setCookie,removecookie] = useCookies("token");
    const [allmsg,setAllmsg] = useState([]);
    const [newMsg,setNewMsg] = useState("");
    useEffect(() =>{
        axios.get('http://127.0.0.1:8022/myprofile',{
            headers :{
                'x-token':cookies["token"]
            }
        }).then(res => setData(res.data)).catch((err) => console.log(err));
        axios.get('http://127.0.0.1:8022/getmsg',{
            headers :{
                'x-token':cookies["token"]
            }
        }).then(res => setAllmsg(res.data)).catch((err) => console.log(err));
        if(!(cookies["token"])){
         
            
            navigate("/login")
        }
    },[]);
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('http://127.0.0.1:8022/addmsg',{text:newMsg},{
            headers :{
                'x-token':cookies["token"]
            }
        }).then(res => setAllmsg(res.data)).catch((err) => console.log(err));

    }
    const logoutHandler = e =>{
        removecookie("token");
        window.location.reload();
    }

  return (
    <div>
      {
        data && 
        <div>
<div className='row'>
            <Box sx={{flexGrow:1}}>
                <AppBar  className='bg-success' position='static'>
                    <Toolbar>
                        <IconButton
                          size="large"
                          edge="start"
                          color="dark"
                          aria-label='menu'
                          sx={{mr : 2}}
                        >
                            <PopupState variant="popover" popupId="demo-popup-menu">
                                {(popupState) => (
                                    <React.Fragment>
                                    <div {...bindTrigger(popupState)}>
                                    <i className="bi bi-list text-white"></i>
                                    </div>
                                    <Menu {...bindMenu(popupState)}>
                                        <MenuItem onClick={popupState.close}>Profile</MenuItem>
                                        <MenuItem onClick={popupState.close}>My account</MenuItem>
                                        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                                    </Menu>
                                    </React.Fragment>
                                )}
                             </PopupState>
                      
                        </IconButton>
                        <Typography variant='h5' component="div" sx={{flexGrow: 1}}>
                        <div className='d-flex align-items-center'>
                            <img height="35px" width="38px" src="/images/home.png"></img>
                            <h3 className='h3 fw-bold'>UChat</h3>
                        </div>
                        </Typography>
                        <Button color='inherit'>
                            <div className='d-flex justify-content-end align-items-center'>
                                {/* <i className="bi bi-pencil-square"></i> */}
                                {data.UserName}
                                <Avatar alt="userName" className='ms-2'/>
                            </div>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
        <div className='row' width="100%" height="20px">
            <div className='col-lg-4 bg-dark p-3 text-white'>
               
            </div>
            <div className='col-lg-4 bg-dark p-3 text-white' >
            <Card >
                <CardHeader
                
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        U
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        
                    </IconButton>
                    }
                    title="Telugu Chat"
                    subheader="Active"
                />
                <CardMedia className='chat-body' style={{maxHeight: '60vh', overflow: 'auto'}} >
                    <div  style={{maxHeight: '100%', overflow: 'auto'}}>                        
                        {
                            allmsg.map(msg => <div>
                                <div className='m-3'>
                                    <div><span className='msg-box-1 fw-bold text-danger'>{msg.UserName} : </span><span className='msg-box-2'>{msg.text} <span  className='date'>{msg.date}</span></span></div>
                                    
                                </div>
                            </div>)
                        }
                    </div>
                </CardMedia>
                <CardActions className='bg-success'>
                    <form onSubmit={submitHandler} className='row d-flex  align-items-center'>
                        <div className='col-2 d-flex justify-content-end'>
                        <GrEmoji size={32} color='white' />
                        </div>
                        <div className='col-8 d-flex justify-content-end'>
                            <input id="typing" onChange={e => setNewMsg(e.target.value)}  type="text" placeholder='Type a message' className='form-control w-100'  required/>
                        </div>
                        <div className='col-2 d-flex justify-content-end'>
                        <Button type="submit"  variant='iniherit'><IoSend size={32} color='white'/></Button>
                        </div>
                    </form>
                </CardActions>
            </Card>
            </div>
            
            <div className='col-lg-4 bg-dark p-3 text-white'>
               
            </div>
        </div>
        <div className='row bg-dark p-3 text-white'>
            
        </div>
        

      </div>
      }
    </div>
  )
}
