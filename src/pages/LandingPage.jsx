import React from 'react'
import { Box, Button, Typography, styled } from '@mui/material';
import '../styles/LandingPage.css';
import LandingHeader from '../components/LandingHeader';
import Blogs from '../pages/Blogs';

const LandingPage = () => {
  return (
    <>
        <Box className="mega-container">
            <LandingHeader />
            <Box className="sub-container">
                <Typography class="main-text">Create your <span>space</span> today</Typography>
                <Typography class="sub-text">for a better tomorrow</Typography>
            </Box>
        </Box>
        <Blogs />
    </>
  )
}

export default LandingPage
