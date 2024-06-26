'use client'
import { Button } from '@/app/components/Button'
import { useInputContext } from '@/app/context/InputProvider'
import React, { useRef, useState } from 'react'

export const Sidebar = ({}) => {

  const { addInput } = useInputContext()

  const [isActive, setIsActive] = useState(null)
  const [barClosed, setBarClosed] = useState(null)

  const handleClick = (index) =>{
    setIsActive(index === isActive ? null : index)
  }

  const handleClickOpenBar = ()=>{
    setBarClosed((prev)=> !prev)
  }

  const AddInputClick = (inputId,classBody) =>{
    const inputElement = document.getElementById(inputId)
    if(inputElement){
      const clonedInput = inputElement.cloneNode(true)
      clonedInput.className = classBody
      addInput(clonedInput)
    }
  }
  const inputField = 'inputField'
  const classInput = 'border-2 ml-2'

  return (
    <div className='h-[400px] border-black w-[350px] m-2 mt-5 cursor-pointer'>
      <div onClick={handleClickOpenBar} className='text-center border-2 mb-2'>
        <h1 className='text-lg m-2'>Input Field</h1>
    { barClosed && <div>
            <input id={inputField} className={classInput} type="text"/>
            <button className='py-2 px-4 bg-slate-400 rounded-md text-white m-2
            hover:bg-slate-500 transition-colors' 
            onClick={() => AddInputClick(inputField,classInput)}>Add</button>
          </div>}
      </div>
      <div onClick={() => handleClick(1)} className={`h-1/2 border-slate-400 ${isActive === 1 ? 'border-4' : 'border-2'}`}>
        sidbar
      </div>
      <div onClick={() => handleClick(2)} className={`h-1/2 border-slate-400 ${isActive === 2 ? 'border-4' : 'border-2'}`}>
        sidbar
      </div>
    </div>
  )
}
