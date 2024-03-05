import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovie, getMovies } from '../state/movieReducer'
import Courasol from './Courasol'
import {movieArray} from '../hook/movieData'
const RecomandedMovie = () => {
const {movieData , isLoading  , isError} = useSelector(getMovies)
const dispatch = useDispatch()


useEffect(()=>{
dispatch(fetchMovie(movieArray))
},[dispatch])
    return (
        <>
      <div className='lg:px-4 px-1 mt-6 text-2xl text-gray-700 font-bold'>Recommended movies</div>  
    <div className='flex py-2'>
      {isLoading && <div>loading...</div>}
      {isError && <div>went something wrong</div>}
       <Courasol movieData={movieData}/>
    
             </div>

    </>
    
   
     
      
  )
}

export default RecomandedMovie

