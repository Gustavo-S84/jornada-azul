import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import Home_pages from './pages/home';
import Questions_pages from './pages/questions';



function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home_pages}/>
        <Route path='/questions' Component={Questions_pages}/>
      </Routes>
    </BrowserRouter>
  );  
}

export default Router;
