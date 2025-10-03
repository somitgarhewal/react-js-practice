import React from 'react'

function DisabledButton({ text }) {
  return (
    <button className='flex gap-2  p-2 rounded-md cursor-pointer bg-gray-100 dark:bg-gray-500 text-black'
      disabled={true}
    >
      {text}
    </button>
  )
}

export default DisabledButton
