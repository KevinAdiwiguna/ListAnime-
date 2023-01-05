import React from 'react'
import { Navbar } from '../Components/Navbar'

export const Err404 = () => {
  return (
    <div className='overflow-y-hidden '>
        <Navbar />
    <div className=' h-[91vh] bg bg-black overflow-y-hidden   flex justify-center items-center'>
        <div>
            <div className='text-center'>
                <img src="https://http.cat/404" alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}
