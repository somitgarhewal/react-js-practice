import React from 'react'

function PrimaryButton({ isDisabled, icon, text, handler }) {
  return (
    <button className={` flex gap-2  p-2 rounded-md cursor-pointer bg-blue-900 dark:bg-red-500 ${isDisabled && 'disabled cursor-none'}`}
      disabled={isDisabled}
      onClick={() => handler()}
    >
      {icon && <img src={icon} className='w-2 h-2' />}
      {text}
    </button>
  )
}

export default PrimaryButton
