import React from 'react'

function IconButton({  icon, text, handler }) {
  return (
    <button className='flex gap-2  p-2 rounded-md cursor-pointer bg-green-900 dark:bg-white dark:text-black'
      onClick={() => handler()}
    >
      {/* {icon && <img src={icon} className='w-2 h-2' />} */}
      <span>+</span>
      {text}
    </button>
  )
}

export default IconButton
