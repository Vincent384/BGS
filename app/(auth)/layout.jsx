import React from 'react'
import { Navbar } from '../components/Navbar'

function AuthLayout({children}) {
  return (<>
  
        <Navbar/>
    <div className='flex justify-center items-center h-screen bg-black'>

      {children}
      </div>
  
  </>
  )
}

export default AuthLayout