import React from 'react';
import logo from "../assets/news logo.avif";
import { motion } from 'framer-motion';

const SearchSection = () => {
  return (
    <div className="dark px-4 md:px-10 mt-10">
      <div className='flex flex-col ml-20 sm:flex-row items-center gap-4'>
        {/* Logo */}
        <motion.img
          src={logo}
          alt="logo"
          className='w-[80px] md:w-[100px] h-auto rounded-full shadow-md'
          initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />

        {/* Brand Name */}
        <motion.h1
          className="font-extrabold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 drop-shadow-xl dark:drop-shadow-[0_2px_15px_rgba(255,255,255,0.25)] text-center md:text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Rapid <span className="text-emerald-400">Report</span>
        </motion.h1>
      </div>
    </div>
  );
};

export default SearchSection;
