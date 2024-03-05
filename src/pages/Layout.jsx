import 'react-alice-carousel/lib/alice-carousel.css';
import { LiveEvent , Premier ,RecomandedMovie ,Tabbar ,Slider , Navbar } from '../component'


const Layout = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

function success(pos){
    const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

navigator.geolocation.getCurrentPosition(success,error,options)



  return (
    <div className='my-2'>
      <div className='px-4'> 
      <Navbar/>
    </div>
    <div className='hidden  lg:flex justify-between items-center h-12 px-10  text-sm bg-slate-100'>
      <Tabbar/>
    </div>
    <div className='bg-gray-200 h-[220px] lg:h-[320px] overflow-y-hidden flex overflow-x-hidden pt-2'>
     <Slider />
    </div>
    <div className=' mx-auto w-auto lg:w-[95%] px-3  overflow-x-hidden' >
      <RecomandedMovie/>
    </div>
    <div className=' mx-auto w-auto  xl:max-w-[95%] px-2 lg:px-4'>
     <LiveEvent /> 
    </div>
    <div className=" overflow-x-hidden px-2  bg-gray-800">
      <Premier/>
    </div> 
    </div>
  )
}

export default Layout
