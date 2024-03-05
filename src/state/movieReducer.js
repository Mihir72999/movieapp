import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchAllMovie } from "../hook/fetchMovie"


export const fetchMovie = createAsyncThunk("fetchMovie",async(movieArray)=>{
  const data = fetchAllMovie()
     
  const newData = await Promise.all(Object.entries(data).map(async([_key ,url])=>{
    const res = await fetch(url)
    return await res.json() 
 }))
return newData
})


const movieReducer = createSlice({
    name:'moviereducer',
    initialState:{
     isLoading:false,
     movieData:[],
     isError:false   
    },
    extraReducers(builder){
        builder
          .addCase(fetchMovie.pending,(state,action)=>{
            state.isLoading = true 
          })
          .addCase(fetchMovie.fulfilled,(state,action)=>{
            state.isLoading = false
            state.movieData = action.payload
        
          })
          .addCase(fetchMovie.rejected,(state,action)=>{
            state.isLoading = false
            state.movieData = []
            state.isError = true
          })
    }
})


export const getMovies = (state) => state.movie
export default movieReducer.reducer