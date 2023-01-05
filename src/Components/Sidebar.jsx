import React from 'react'
import { Close } from './svg/Close'

export const Sidebar = (props) => {
  return (
    <div className= {`${props.navHandle ? 'w-screen h-screen sm:w-[40vh] ' : 'h-screen w-0'} duration-500  fixed top-0 left-0 right-0 bottom-0 overflow-x-hidden  bg-fixed bg-cover  z-50 bg-slate-700 overflow-hidden`}>
        <div className={`${props.navHandle ? 'opacity-100  pointer-events-auto' : 'opacity-0 pointer-events-none'} duration-300`}>
            <div className='flex justify-between items-center p-4'>
              <p className='font-bold text-2xl'>LOGO</p>
              <Close navHandle={props.navHandle} setNavHandle={props.setNavHandle}/>
            </div>
            <div></div>
        </div>
    </div>
  )
}
