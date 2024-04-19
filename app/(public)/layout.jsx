import React from 'react'
import { Navbar } from '../components/Navbar'
import { ClerkProvider } from '@clerk/nextjs'

function PublicLayout({children}) {
  return (
    <div className='bg-black'>
        <Navbar/>
        {children}
        
        </div>
  )
}

export default PublicLayout