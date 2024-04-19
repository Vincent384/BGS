import React from 'react'
import { Navbar } from '../components/Navbar'

function AuthLayout({children}) {
  return (<>
  
        <Navbar/>
    <div className='flex justify-center items-center h-screen'>

      {children}
      </div>
  
  </>
  )
}

export default AuthLayout