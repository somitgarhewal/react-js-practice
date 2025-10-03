import React from 'react'

function Button({ type, isDisabled, icon, text }) {
  return (
    <button className={` flex gap-2  p-2 rounded-md cursor-pointer ${type === "primary" ? 'bg-blue-900 dark:bg-red-500' : 'bg-gray-700 dark:bg-yellow'} ${isDisabled && 'disabled cursor-none'}`}
      disabled={isDisabled}
    >
      {icon && <img src={icon} className='w-2 h-2' />}
      {text}
    </button>
  )
}

export default Button
