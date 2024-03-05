import { AlignJustify} from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='hidden lg:flex items-center justify-between  h-16 px-6'>
      <header className='flex items-center '>
        
        <img alt='movie' className='px-5' src='/logo.svg'/>
       
        <input type="search" className=' focus:border-white search border h-9 items-center border-gray-200 w-[53vw] rounded-md placeholder:px-10 placeholder:translate-y-[-2px]' placeholder={`search for movies `} />
        
      </header>
      <header className=' flex items-center justify-end ml-4'>
       <select >
        <option>Bengluru</option>
        <option>Bombay</option>
        <option>Ahmedabad</option>
        </select> 
        <div className='flex px-5 gap-5'>
      <button className=' bg-red-500 text-white w-16 text-xs py-[5px]  rounded-[4px]'>Sign In</button>
      <AlignJustify className='px-0' />
      </div>
      </header>
    </nav>
  )
}

export default Navbar
