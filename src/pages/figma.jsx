import React from 'react'
import Button from '../components/button/button'
import PrimaryButton from '../components/primaryButton'
import SecondaryButton from '../components/secondaryButton'
import DisabledButton from '../components/disabledButton'
import IconButton from '../components/iconButton'

function Figma() {
  return (
    <div className='flex gap-4'>
      {/* <Button text='click me' type='secondary'  /> */}
      <PrimaryButton text='click me Primary' handler={() => {console.log('primary button')}}/>
      <SecondaryButton text='click me Secondary' handler={() => {console.log('secondary button')}}/>
      <DisabledButton text='click me Disabled' />
      <IconButton text='click me Icon' handler={() => {console.log('secondary button')}}/>
    </div>
  )
}

export default Figma
