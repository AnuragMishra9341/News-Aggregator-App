import React from 'react'
import SearchSection from './searchSection';
import SearchBar from './SearchBar';
import HomeNewsCards from './HomeNewsCards';
const Home = () => {
  return (
    <div>
     <div>
    <div className='flex items-center w-full flex-wrap'>
      <SearchSection/>
      <div className='mt-10 sm: ml-auto mr-auto'>
         <SearchBar/>
      </div>
    </div>
    <div>
       <HomeNewsCards/>
    </div>
    </div>
    </div>
    
  )
}

export default Home