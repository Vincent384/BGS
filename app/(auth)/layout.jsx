import React from 'react'
import { Navbar } from '../components/Navbar'
import { UserButton } from '@clerk/nextjs'

function AuthLayout({children}) {
  return (
    <div>
        <UserButton/>
        <Navbar/>

      {children}
      </div>
  )
}

export default AuthLayout