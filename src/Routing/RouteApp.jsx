import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Courses from '../components/Course/Courses';
import Team from '../components/Team/Team';
import Contact from '../components/Contact/Contact';


const RouteApp = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/courses' element={<Courses />}/>
          <Route path='/team' element={<Team />}/>
          <Route path='/contactus' element={<Contact />}/>
          

        </Route>
      </Routes>
    </Router>
  );
};

export default RouteApp;
