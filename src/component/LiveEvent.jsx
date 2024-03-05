import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ARR = [
  "workshop-and-more-web",
  "kids-zone",
  "comedy-shows",
  "music-shows",
  "upskill",
  "food-drinks",
  "interactive-games",
  "arts-crafts",
  "theatre-shows",
  "adventure-fun"
]

export const LIVECONCERT =[]
for(let i = 0; i < ARR.length; i++){
LIVECONCERT[i] = `https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-OTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/${ARR[i]}-collection-202211140440.png`
}


const LiveEvent = () => {
  const [autoIndex, setAutoIndex ] = useState(0)    
  const responsive = {
      2000: {
        items: 10,
      },
      1300: {
        items: 5,
      },
      1050:{
          items:5
      }
      
      ,
      900:{
        items:3,  
      },
      700:{
      items:3    
      },
      400: {
        items: 2.8,
      },
      0: {
        items: 3,
      },
    };
  return (
    <>
    <div className='px-1 lg:px-4 font-bold text-gray-700 text-2xl'> 
     <h2>The Best Of Live Events</h2> 
    </div>
    <AliceCarousel
        responsive={responsive}
        autoPlay={false}
        activeIndex={autoIndex}
        onSlideChange={(newIndex)=>setAutoIndex(newIndex.item)}
        autoPlayInterval="1000"
        disableDotsControls={true}
        renderPrevButton={()=>{
          return autoIndex > 1 && <ChevronLeft strokeWidth={1} className='hidden lg:block w-12 text-white h-12  rounded-full  absolute cursor-pointer left-0 top-1/3   bg-gray-400'  />}}
            renderNextButton={()=>{
              return autoIndex <= 4  && <ChevronRight strokeWidth={1} className='hidden lg:block w-12 text-white h-12 rounded-full mr-0  absolute cursor-pointer right-0 top-1/3   bg-gray-400' />}}
                 
        >  
          
          
          {LIVECONCERT.map((movieData,index)=> <div key={index} className='px-1 lg:px-4'>
              <img className='rounded-xl my-4 '  src={movieData} alt={`images ${index + 1}`}/>
              </div>)
            }         
    </AliceCarousel>
    </>
  )
}

export default LiveEvent
