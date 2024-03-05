import React from 'react'
const TAB1 = ["Movies","Stream","Events","Plays","Sports","Acivities"]
const TAB2 =["ListYourShow","Corporates","Offers","Gift Cards"]
const Tabbar = () => {
  return (
    <>
      <div className='flex'>{
        TAB1.map((e , i)=>(
        <nav className='px-3' key={i}>{e}</nav>
        ))
        }</div>
      <div className='flex '>{
        TAB2.map((e , i)=>(
            <nav className='px-3' key={i}>{e}</nav>
            ))
        }</div>
    </>
  )
}

export default Tabbar
