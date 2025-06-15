import React, { useState } from 'react'
import { NewsContext } from './NewsContext'

const NewsContextProvider = ({children}) => {
  const [text,setText]=useState("All");
  return (
    <div>
       <NewsContext.Provider value={{text,setText}}>
          {children};
       </NewsContext.Provider>

    </div>
  )
}

export default NewsContextProvider