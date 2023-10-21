import React, { useState } from 'react'
import { Box, Button, TextField, styled } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";
import axios from "axios";
import "../styles/Login.css";
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
const Login = () => {

  const Navigate = useNavigate();
  const Dispatch = useDispatch();

  const [inputs, setInputs] = useState(
    {
        email:'',
        password:'',
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
      const { data } = await axios.post("http://Localhost:8000/api/v1/user/login", {
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        localStorage.setItem("userId", data?.user._id);
        Dispatch(authActions.login());
        toast.success("User login Successfully");
        Navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

    return (
      <form class="contain-login" onSubmit={handleSubmit}>
        <Component class="contain-login-contents">
              <Image src={imageURL} alt="login" />
              <Wrapper>
                <TextField onChange={handleChange} id="outlined-basic" value={inputs.email} name="email" label="email" variant="outlined"/>
                <TextField onChange={handleChange} id="outlined-basic" value={inputs.password} name="password" type={"password"} label="password" variant="outlined"/>
                <Button type="submit" variant="contained">Login</Button>
                <Button onClick={() => Navigate('/register')}>Create an account</Button>
              </Wrapper>
        </Component>
      </form>
    )
}

export default Login