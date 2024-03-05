import { ChevronLeft, ChevronRight, Loader2, Play, Rabbit } from 'lucide-react'
import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {premierData} from '../hook/premierData'
import PrimiereCard from './PrimiereCard'
import { fetchPrimiere, getPrimieres } from '../state/primierReducer'
import AliceCarousel from 'react-alice-carousel'

const Premier = () => {
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
        },
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
   
    const {movieData , isLoading , isError} = useSelector(getPrimieres)
    const dispatch = useDispatch()
    
    useEffect(()=>{
    dispatch(fetchPrimiere(premierData))
    },[dispatch])
    return (
    <>
    <div className='px-3 lg:px-14 py-8 flex' >
    <Play className='h-14 w-14 rounded-full py-1 px-2  bg-red-600 text-white' />       
    <div className='flex flex-col px-2 lg:px-6  text-white'>
    <h3 className='font-bold  text-2xl tracking-widest space-x-0'>PREMIERE</h3>
     <p>watch new movies at home , every firday</p>
    </div>
    </div>
    {isLoading && <Loader2 className='animate-spin h-10 w-10 mx-auto text-white' />}
    {isError && <div className='flex justify-center items-center gap-6'><Rabbit className='w-20 h-20  text-white' />
      <p className=' text-white text-2xl'>Went Something Wrong</p>
    </div>}
    <div className='text-white px-3 lg:px-14'>
     <h2>Premieres</h2>
     <p>Brand New Releases every friday</p>
    </div>
    <div className='flex px-3 xl:px-14 pt-2 '>
    <AliceCarousel
        responsive={responsive}
        autoPlay={false}
        activeIndex={autoIndex}
        onSlideChange={(newIndex)=>setAutoIndex(newIndex.item)}
        autoPlayInterval="1000"
        disableDotsControls={true}
        renderPrevButton={()=>{
            return autoIndex > 1 && <ChevronLeft strokeWidth={1} className='hidden lg:block w-12 text-white h-12  rounded-full  absolute cursor-pointer -left-5 top-1/3   bg-gray-500'  />}}
            renderNextButton={()=>{
                return autoIndex <= 4  && <ChevronRight strokeWidth={1} className='hidden lg:block w-12 text-white h-12 rounded-full mr-0  absolute cursor-pointer right-0 top-1/3   bg-gray-500' />}}
                 
        >    
    {movieData && movieData.map((premierData,index)=><PrimiereCard key={index} primierData={premierData} />)}
   </AliceCarousel>
    </div>
    </>
  )
}

export default Premier
