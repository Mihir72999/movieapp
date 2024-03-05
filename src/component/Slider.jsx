import { ChevronLeft, ChevronRight } from 'lucide-react';
import AliceCarousel from 'react-alice-carousel'
const IMG = [
    {alt:"img1" ,url:"https://assets-in.bmscdn.com/promotions/cms/creatives/1708320625451_wpl2024web.jpg"},
    {alt:"img2",url:"https://assets-in.bmscdn.com/promotions/cms/creatives/1708667895907_abyprebookweb.jpg"},
    {alt:"img3",url:"https://assets-in.bmscdn.com/promotions/cms/creatives/1708067001250_gajendravermaweb.jpg"}
]
const Slider = () => {

  

  return (

        <AliceCarousel
         
          autoPlay={true}
         autoHeight={true}
         autoWidth={true}
          autoPlayInterval="3000"
          infinite={true} 
          renderPrevButton={()=>{
          return <ChevronRight strokeWidth={1} className='w-10 h-12 absolute cursor-pointer right-0 top-1/3  opacity-50 bg-white' />}}
          renderNextButton={()=>{
            return <ChevronLeft strokeWidth={1} className=' opacity-50 h-12 w-10 cursor-pointer  absolute left-0 top-1/3  bg-white' />}}
               >
        

    {IMG.map((e , i)=>(
    <img id='slide' key={i} className='mx-0 h-[200px] lg:h-auto lg:mx-[50px] rounded-md lg:rounded-xl px-1'  alt={e.alt} src={e.url}   />
    ))}  
    </AliceCarousel>
  )
}


export default Slider
