import React from 'react'
import './Spinner.css'
const spinner = () => {
  return (
    <div className='flex flex-col items-center space-y-2w'>
      <div className='custom-loader'></div>
      <p className='text-bgDark text-lg font-semibold'>Loading...</p>
    </div>
  )
}

export default spinner