import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { fetchAllPrimiere } from "../hook/fetchMovie"


export const fetchPrimiere = createAsyncThunk("fetchPrimiere",async()=>{
  const data = fetchAllPrimiere() 
  
  const newData = await Promise.all(Object.entries(data).map(async([_key,url])=>{
   const res = await fetch(url)
   return await res.json()
  }))    

return newData
})


const primiereReducer = createSlice({
    name:'primierereducer',
    initialState:{
     isLoading:false,
     primiereData:[],
     isError:false   
    },
    extraReducers(builder){
        builder
          .addCase(fetchPrimiere.pending,(state,_action)=>{
            state.isLoading = true 
          })
          .addCase(fetchPrimiere.fulfilled,(state,action)=>{
            state.isLoading = false
            state.movieData = action.payload
        
          })
          .addCase(fetchPrimiere.rejected,(state,_action)=>{
            state.isLoading = false
            state.movieData = []
            state.isError = true
          })
    }
})


export const getPrimieres = (state) => state.primiere
export default primiereReducer.reducer