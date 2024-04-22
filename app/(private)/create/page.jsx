'use client'
import React, { useEffect, useState } from 'react'
import { Sidebar } from '../_component/Sidebar'
import { InputProvider, useInputContext } from '@/app/context/InputProvider'

const CreatePage = () => {

  const { inputs } = useInputContext()

  return (
 
    
      <div className='flex'>
        <div>
            <Sidebar/>
        </div>
        <div className='flex col-span-1'>
          {inputs.map((input, index) => (
            <div key={index}>
              <input 
              type={input.type}
              className={input.className}
              />
            </div>
          ))}

        </div>
          <div>
            createpage
          </div>
      </div>
    
    
    
  )
}

export default CreatePage