import Link from 'next/link'
import React from 'react'

const NAV_LINKS = [
    {label:'Home',href:'/'},
    {label:'Create',href:'/create'},
    {label:'Login',href:'/login'},
    {label:'Register',href:'/register'}
]

export const Navlinks = () => {
  return (
    <div className='flex gap-7 items-center'>
        {
        NAV_LINKS.map(link=>(
            <Link key={link.href} href={link.href}>{link.label}</Link>
        ))
        }
        </div>
  )
}
