import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from './Pages/Register';
import { Login } from './Pages/Login';
import { ProfileSetUp } from './Pages/ProfileSetUp';
import { Article } from './Pages/Article';
import { LandingPage } from './Pages/LandingPage';
import { Post } from './Pages/Post';

function RouterPage() {
  
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage to="/landingpage" />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/profilesetup" element={<ProfileSetUp />} />
                <Route path="/article" element={<Article />} />
                <Route path="/landingpage" element={<LandingPage />} />
                <Route path="/post" element={<Post />} />
            </Routes>
        </Router>
    );
  }
  export default RouterPage;
