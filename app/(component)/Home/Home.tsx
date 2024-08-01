import React from 'react'

export default function Home() {
  return (
    <div className="Home w-full h-[80vh] bg-gray-800 bg-[url(../public/cover1.jpg)] bg-cover bg-left-top bg-no-repeat relative">
      <div className='w-full h-[80vh] flex justify-center items-center bg-gray-800 opacity-70 absolute z-10'></div>
        <div className='w-full h-[80vh] flex justify-center items-center absolute z-50'>
          <div className="container flex justify-center items-center md:items-start  flex-col px-2 sm:px-6 lg:px-8">
            <h1 className='text-white text-3xl  sm:text-4xl  md:text-5xl lg:text-6xl font-semibold'>Hello !</h1>
            <h1 className='text-white text-3xl  sm:text-4xl  md:text-5xl lg:text-6xl font-bold'>I am Abdelrahman Mamdouh</h1>
            <p className='text-white text-xl  sm:text-2xl  md:text-3xl lg:text-4xl font-semibold'>
            Software Engineer ,<br/> FrontEnd Developer.
              </p>
          </div>
        </div>
      </div>
  )
}
