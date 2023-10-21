import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, InputLabel, TextField, Typography, styled } from "@mui/material";
import toast from "react-hot-toast";
import imageURL from "../assets/brand-logo.png"

const Image = styled("img")({
    width:200,
    margin:'auto',
    display:'flex',
});

const CreateBlog = () => {
    const id = localStorage.getItem("userId");
    const Navigate = useNavigate();

    // const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        image: "",
      });

      // input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8000/api/v1/blog/create-blog", {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      });
      if (data?.success) {
        toast.success("Blog Created");
        Navigate("/my-blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          width={"50%"}
          border={3}
          borderRadius={10}
          padding={3}
          margin="auto"
          boxShadow={"10px 10px 20px #ccc"}
          display="flex"
          flexDirection={"column"}
          marginTop="30px"
        >
          {/* <Typography
            variant="h2"
            textAlign={"center"}
            fontWeight="bold"
            padding={3}
            color="gray"
          >
            Create A Pots
          </Typography> */}
          <Image src={imageURL} alt="login" />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Title
          </InputLabel>
          <TextField
            name="title"
            value={inputs.title}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Description
          </InputLabel>
          <TextField
            name="description"
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Image URL
          </InputLabel>
          <TextField
            name="image"
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <Button type="submit" color="primary" variant="contained">
            SUBMIT
          </Button>
        </Box>
      </form>
    </>
  )
}

export default CreateBlog
