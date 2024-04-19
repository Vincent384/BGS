'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Navlinks } from './navlink-links'
import { Button } from './Button'

export const Navbar = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className='bg-stone-100 py-2 px-2'>
        <nav className='flex justify-between container mx-auto'>
            <Link className='py-2 px-4' href='/'>LOGO</Link>
            
            {
                
               isLoggedIn ? <Navlinks/> :''
            }
            
            <Button
             bgColor={'bg-red-500'} 
             name={'Sign In'}
             textColor={'text-white'}>
              <Link href='/sign-in'>Sign in</Link>
             </Button>
        </nav>
    </div>
  )
}
