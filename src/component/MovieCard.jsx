import React from 'react'
import { Star, ThumbsUp } from 'lucide-react'

const MovieCard = ({movieData }) => {
        
    return   <div  className='flex flex-col px-1 items-start lg:px-4'>
     <div  className='grid grid-col-2 w-[31vw] lg:w-[16vw]  '>
       <img className='h-[16vh]  xl:h-[50vh]  lg:h-[30vh] w-[31vw] lg:w-[16vw]  rounded-t-xl' src={movieData.Poster} alt={movieData.Title}/>
       <div className='flex bg-gray-500 lg:bg-black text-white px-3 py-2 rounded-b-xl'>
          {movieData.imdbRating === "N/A" && <span className='flex items-center gap-2 text-xs lg:text-2xl'><ThumbsUp className='lg:w-6 w-4 text-green-500' />{Math.floor(Math.random() * 100)}k likes </span>}
          {movieData.imdbRating !== "N/A" && <span className='flex items-center gap-2 text-xs lg:text-2xl'><Star className='w-4 lg:w-6  text-pink-700' /> {movieData.imdbRating}/10 rating</span>}
          </div>
       </div>
       <div className=' max-w-32 lg:max-w-60 py-2 font-medium'>
       <h3>{movieData.Title}</h3>
       <p className='hidden lg:block font-normal'>{movieData.Genre}</p>    
       </div>
    </div>
 
}

export default MovieCard
