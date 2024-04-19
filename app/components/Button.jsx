import React from 'react'

export const Button = ({bgColor,textColor,name}) => {
  return (
    <button className={`${bgColor} ${textColor} font-bold rounded-md py-2 px-4`}>{name}</button>
  )
}
