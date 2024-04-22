'use client'
import React from 'react'
import { Navbar } from '../components/Navbar'
import { InputProvider } from '../context/InputProvider'

const PrivateLayout = ({children}) => {

  
  return (
    <div className=''>
      <Navbar/>
      <InputProvider>
      
        {children}
      </InputProvider>
    </div>
  )
}

export default PrivateLayout