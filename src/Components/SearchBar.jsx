import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';
const SearchBar = () => {
  const [text,setText]=useState("");
  const{setText:updateQuery}=useContext(NewsContext);
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Search text:",text);
    updateQuery(text);
    setText("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="border border-red-700 rounded-md bg-white dark:bg-gray-800 shadow-md dark:shadow-lg flex items-center"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
          sx={{
            width: {
              sm: "200px",
              md: "400px"
            },
            input: { color: 'inherit' },
            label: { color: 'gray' },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none"
              },
              "&:hover fieldset": {
                border: "none"
              },
              "&.Mui-focused fieldset": {
                border: "none"
              }
            }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClick}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SearchBar;
