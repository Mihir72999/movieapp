import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';

const Courasol = ({movieData}) => {
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
        <AliceCarousel
        responsive={responsive}
        autoPlay={false}
        activeIndex={autoIndex}
        onSlideChange={(newIndex)=>setAutoIndex(newIndex.item)}
        autoPlayInterval="1000"
        disableDotsControls={true}
        renderPrevButton={()=>{
            return autoIndex > 1 && <ChevronLeft strokeWidth={1} className='hidden lg:block w-12 text-white h-12  rounded-full  absolute cursor-pointer left-0 top-1/3   bg-gray-500'  />}}
            renderNextButton={()=>{
                return autoIndex <= 4  && <ChevronRight strokeWidth={1} className='hidden lg:block w-12 text-white h-12 rounded-full mr-0  absolute cursor-pointer right-0 top-1/3   bg-gray-500' />}}
                 
        >  
          
          {movieData.length > 0 && 
          movieData.map((movieData,index)=> <MovieCard key={index}  movieData={movieData}/>)
            }         
    </AliceCarousel>
  )
}

export default Courasol
