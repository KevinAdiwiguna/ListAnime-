import React from 'react'

export const Burger = (props) => {
  return (
    <div onClick={() => props.setNavHandle(true)}  className='float-right md:hidden'>
    <svg className='!block z-50' xmlns="http://www.w3.org/2000/svg" fill='#fff'  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" /></svg>
    </div>
  )
}
