import React from 'react'

const PrimiereCard = ({primierData}) => {
  return (
    <>
    <div className='text-white  flex flex-col ' >
    <div className='grid grid-col-1 w-[31vw] lg:w-[18w] xl:w-[18vw]   '>
     <img  className=' h-[20vh] lg:h-[30vh] xl:h-[50vh] px-1 lg:px-0 w-[31vw] lg:w-[16vw] xl:w-[16vw] rounded-xl' src={primierData.Poster} alt={primierData.Title}/>
    <h3 className='lg:px-0 px-2 py-2'>{primierData.Title}</h3>
    <p className='lg:px-0 px-2 '>{primierData.Language}</p>
    </div>
    </div>
    </>
  )
}

export default PrimiereCard
