import React from 'react'

function SecondaryButton({ isDisabled, icon, text, handler }) {
    return (
        <button className={` flex gap-2  p-2 rounded-md cursor-pointer bg-gray-700 dark:bg-yellow-100 dark:text-black ${isDisabled && 'disabled cursor-none'}`}
            disabled={isDisabled}
            onClick={() => handler()}
        >
            {icon && <img src={icon} className='w-2 h-2' />}
            {text}
        </button>
    )
}

export default SecondaryButton
