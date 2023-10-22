import React from 'react'
import { Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';
import LandingHeader from '../components/LandingHeader';
import Blogs from '../pages/Blogs';

const LandingPage = () => {

  const Navigate = useNavigate();

  return (
    <>
        <Box>
          <Box className="mega-container">
            <LandingHeader />
            <Box className="sub-container">
                <Typography class="main-text">Create your <span>space</span> today</Typography>
                <Typography class="sub-text">for a better tomorrow</Typography>
            </Box>
          </Box>
            <Box className="memory-contain">
              <Box className='memory-text'>
                <Typography id="major-text">Hang on to your memories</Typography>
                <Typography id="minor-text">Save the moments that matter. BlogSpace lets you safely store thousands of blogs
                </Typography>
              </Box>              
              <Box className='memory-image'></Box>
            </Box>
            <Box className="world-contain">
              <Box className="world-sub-contain">
                <Typography class="main-world-text">Follow millions of others</Typography>
                <Typography class="minor-world-text">Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on BlogSpace. Sign up to discover why millions of people have published their passions here.
                </Typography>
                <Button className="button" type="submit" onClick={() => Navigate('/register')} variant="contained" sx={{backgroundColor:"#D57301", borderRadius:"20px", border:"none"}}>Register</Button>
              </Box>
            </Box>
        </Box>
        {/* <Blogs /> */}
    </>
  )
}

export default LandingPage