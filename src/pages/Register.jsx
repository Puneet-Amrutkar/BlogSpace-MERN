import React, { useState } from 'react'
import { Box, Button, TextField, InputBase, styled } from '@mui/material';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import "../styles/Register.css";
import imageURL from "../assets/brand-logo-navbar.png"

// const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

const Component = styled(Box)`
width:400px;
margin:auto;
border-radius:20px;
border:none;
`
const Image = styled("img")({
    width:200,
    margin:'auto',
    display:'flex',
    // padding:'25px 0 0'
});

const Wrapper = styled(Box)`
padding:25px 35px;
display:flex;
flex:1;
flex-direction:column;
gap:20px;
`

const Register = () => {
    const Navigate = useNavigate();

    const [inputs, setInputs] = useState(
        {
            name:"",
            email:"",
            password:"",
        }
    )
    
    // handle input change
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };

      //form handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://Localhost:8000/api/v1/user/register", {
        username: inputs.name,
        email: inputs.email,
        password: inputs.password
      });
      if (data.success) {
        toast.success("User Registered Successfully");
        Navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

    return (
        <form class="contain-login" onSubmit={handleSubmit}>
            <Component className="contain-login-contents">
                  <Image src={imageURL} alt="login" />
                  <Wrapper>
                      <TextField className="inputs" onChange={handleChange} id="outlined-basic" placeholder="name" value={inputs.name} name="name" label="name" variant="outlined"/>
                      <TextField sx={{border:'1px solid white', color: 'white'}} onChange={handleChange} id="outlined-basic" value={inputs.email} name="email" label="email" variant="outlined"/>
                      <TextField onChange={handleChange} id="outlined-basic" value={inputs.password} name="password" label="password" type={"password"} variant="outlined"/>
                      <Button type="submit" variant="contained">Register</Button>
                      <Button onClick={() => Navigate('/login')}>Already have an account</Button>
                  </Wrapper>
            </Component>
        </form>
    )
}

export default Register