import React, { useState, useEffect } from 'react'
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import { Box, styled } from "@mui/material";
import Header from '../components/Header'
import moment from 'moment';

const Container = styled(Box)`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
`

const Blogs = () => {

  const [blogs, setBlogs] = useState([]);

  // get blogs
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/api/v1/blog/all-blog');
      if (data?.success) {
        setBlogs(data?.blogs);
    } 
  } catch(error) {
      console.log(error);
    }
  } 

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <>
      <Header />
      <Container>
      {blogs &&
        blogs.map((blog) => (
          <BlogCard
            id={blog?._id}
            isUser={localStorage.getItem("userId") === blog?.user?._id}
            title={blog?.title}
            description={blog?.description}
            image={blog?.image}
            username={blog?.user?.username}
            time={(blog.createdAt)}
          />
        ))}
        {/* <BlogCard /> */}
      </Container>
    </>
    
  )
}

export default Blogs
