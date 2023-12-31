import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box,
    AppBar,
    Toolbar,
    Button,
    Typography,
    Tabs,
    Tab, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import toast from "react-hot-toast";
import '../styles/Header.css'
import imageURL from "../assets/brand-logo-navbar.png"
import  { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../redux/store';

const Image = styled("img")({
  width:200,
  height:70,
  // margin:'auto',
  display:'flex',
  // padding:'25px 0 0'
});

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  console.log(isLogin);
  const [value, setValue] = useState();

  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      // alert('logout successful');
      toast.success("logout successful");
      navigate('/login');
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <>
    <AppBar position="sticky" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar className='navbar'>
            {/* <Typography variant="h4">BlogIT</Typography> */}
            <Image src={imageURL} alt="login" />
            {isLogin && (
              <Box display={"flex"} marginLeft={"auto"}>
                <Tabs textColor="inherit" value={value} onChange={(e, val) => setValue(val)}>
                  {/* <Tab sx={{color:'orange'}}label="Blogs" LinkComponent={Link} to="/" /> */}
                  <Tab sx={{color:'orange'}}label="My Blogs" LinkComponent={Link} to="/my-blogs" />
                  <Tab
                  label="Create Blog"
                  LinkComponent={Link}
                  to="/create-blog"
                  sx={{color:'orange'}}
                  />
                </Tabs>
              </Box>
            )}
              
            <Box display={'flex'} marginLeft={'auto'}>
              {!isLogin && (
                <>
                  <Button sx={{margin:1,color:'orange'}} LinkComponent={Link} to="/login">Login</Button>
                  <Button sx={{margin:1,color:'orange'}} LinkComponent={Link} to="/register">Register</Button>
                </>
              )}
              {isLogin && (
                <>
                  {/* <Typography variant="h6">Hello</Typography> */}
                  <Button  onClick={handleLogout} sx={{margin:1,color:'orange'}}>Logout</Button>
                </>
              )}                       
            </Box> 
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Header