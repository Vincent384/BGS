'use client'
import Link from 'next/link';
import React from 'react';
import { Button } from './Button';
import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import BGS from './bgs.png';

export const Navbar = () => {
  const { user } = useUser();

  return (
    <div className='bg-stone-100 py-2 px-2'>
      <nav className='flex justify-between container mx-auto'>
        <Link className='py-2 px-4' href='/'>
          <Image src={BGS} style={{ maxWidth: '10%', height: 'auto' }} />
        </Link>

        <div className='flex justify-center items-center gap-6'>
          {user && (
            <div className='flex gap-6'>
        
              <Link href='/create'>Create</Link>
              <Link href='/dashboard'>Dashboard</Link>
            </div>
          )}
          <UserButton afterSignOutUrl='/' />
        </div>

      
        {!user && (
          <div className='py-2 px-4'>
            <Link href='/sign-in'>
              <Button
                bgColor={'bg-red-500'}
                name={'Sign In'}
                textColor={'text-white'}
              ></Button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};
