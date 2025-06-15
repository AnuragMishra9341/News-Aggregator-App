import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Button from '@mui/material/Button';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import NewsContextProvider from './context/NewsContextProvider';
import Details from './Components/details';
import Footer from './Components/Footer';
import AiSummarizer from './Components/AiSummarizer';
import Chatbox from './Components/Chatbox';

const App = () => {
  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white min-h-screen transition-colors duration-500">
      <NewsContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path='/summary' element={<AiSummarizer/>}/>
          <Route path='/chat' element={<Chatbox/>}/>
          
        </Routes>
       <Footer />
      </NewsContextProvider>
       
    </div>
  );
};

export default App;
