import React, { useEffect, useState } from 'react';
import gamesImg from '@/gamesImagesData/Data';


const GameImages = () => {
  const [Games,setGames] = useState([])

  useEffect(()=>{

    setGames(gamesImg)

  },[])




  return (
   <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 mt-5'>
      {Games.map((item,index) => (
        <div
        className='flex flex-col items-center mt-4 gap-2'
         key={index}>
          <img 
            width={60} 
            height={60} 
            src={item.image} 
            alt={item.name}
            className='rounded-lg object-cover hover:animate-bounce transition-all duration-200 cursor-pointer'
          />
          <h2 className='text-xs text-center font-medium truncate w-full'>
            {item.name}
          </h2>
        </div>
      ))}
    </div>
  )
}

export default GameImages