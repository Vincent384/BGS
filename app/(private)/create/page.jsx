'use client'
import React, { useEffect, useState } from 'react'
import { Sidebar } from '../_component/Sidebar'
import { CreateInput } from '../_component/CreateInput'
import { Button } from '@/app/components/Button'

const CreatePage = () => {

 

  return (
 
    <div>
      <div className='flex '>
        <div>
            <Sidebar/>
        </div>
        <div className='flex justify-center border-2 border-slate-300 
        items-center w-full m-5 overflow-hidden overflow-y-auto'>
          <CreateInput/>
        </div>
      </div>
      <div className='flex justify-end mr-10'>
          <div>
            <Button bgColor={'bg-green-500'} textColor={'text-white'} name={'Save'}/>
          </div>
        </div>
    </div>
    
    
    
  )
}

export default CreatePage