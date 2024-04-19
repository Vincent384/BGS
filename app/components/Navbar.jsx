'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Navlinks } from './navlink-links'
import { Button } from './Button'
import { useRouter } from 'next/router'
import { UserButton } from '@clerk/nextjs'


export const Navbar = ({  }) => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false)



  return (
    <div className='bg-stone-100 py-2 px-2'>
        <nav className='flex justify-between container mx-auto'>
            <Link className='py-2 px-4' href='/'>LOGO</Link>
            
            {
                
               isLoggedIn ? <Navlinks/> :''
            }
            <div className='flex justify-center items-center gap-6'>
            <UserButton afterSignOutUrl='/'/>
            <Link href='/create'>Create</Link>
            <Link href='/create'>Dashboard</Link>
            </div>
             <Link href='/sign-in'>
            <Button
             bgColor={'bg-red-500'} 
             name={'Sign In'}
             textColor={'text-white'}
             >
             </Button>
             </Link>
        </nav>
    </div>
  )
}
