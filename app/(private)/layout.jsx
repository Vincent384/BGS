'use client'
import React, { Suspense } from 'react'
import { Navbar } from '../components/Navbar'
import { InputProvider } from '../context/InputProvider'
import Loading from './loading'

const PrivateLayout = ({children}) => {

  
  return (
    <div className=''>
      <Navbar/>
      <Suspense fallback={<Loading/>}>
      <InputProvider>
        {children}
      </InputProvider>

      </Suspense>
      
    </div>
  )
}

export default PrivateLayout