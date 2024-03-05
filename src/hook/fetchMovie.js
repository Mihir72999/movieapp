
import { movieArray } from "./movieData"
import { premierData } from "./premierData"
export  function fetchAllMovie(){
   const data = {}
    for(let i = 0; i < movieArray.length ; i++){
     data[i + 1] = `https://www.omdbapi.com/?i=${movieArray[i]}&apikey=1d57127d` 
    }
    return data
    }

    export function fetchAllPrimiere(){
        const data = {}
         for(let i = 0; i < premierData.length ; i++){
          data[i + 1] = `https://www.omdbapi.com/?i=${premierData[i]}&apikey=1d57127d` 
         }
         return data
         }

