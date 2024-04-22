
import React from 'react'
import Image from 'next/image'
import BGS from '../components/bgs.png'


const HomePage = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <h1 className='text-4xl text-white'>Welcome to BGS-BoardGame Stats</h1> 
      <Image src={BGS} style={{
        maxWidth:'100%',
        height:'auto'
      }}/>
    </div>
  )
}

export default HomePage