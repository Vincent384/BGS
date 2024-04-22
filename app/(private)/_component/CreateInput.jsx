import React from 'react'
import { InputProvider, useInputContext } from '@/app/context/InputProvider'

export const CreateInput = ({  }) => {
  const { inputs } = useInputContext()

  return (
    <div>
              <div className='flex'>
          {inputs.map((input, index) => (
            <div key={index}>
              <input 
              type={input.type}
              className={input.className}
              />
            </div>
          ))}

        </div>
    </div>
  )
}
