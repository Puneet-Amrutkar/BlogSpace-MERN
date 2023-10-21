import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login"
import Blogs from './pages/Blogs'
import Register from './pages/Register'
import UserBlogs from './pages/UserBlogs'
import CreateBlog from './pages/CreateBlog'
import BlogDetails from './pages/BlogDetails';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/my-blogs" element={<UserBlogs />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

