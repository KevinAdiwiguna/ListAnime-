import React from 'react'
import { Close } from './svg/Close'
import { Search } from './svg/Search'

export const Sidebar = (props) => {

  const searchChangeHandler = (e) => {
    props.setInputACC(e)
  }

  const keyPressHandler = (e) => {
    if (e.key === 'Enter') {
      props.setInputSearch(props.inputACC)
      // console.log(e.key);
    }
  }

  return (
    <div className={`${props.navHandle ? 'w-screen h-screen sm:w-[40vh] ' : 'h-screen w-0'} duration-500  fixed top-0 left-0 right-0 bottom-0 overflow-x-hidden  bg-fixed bg-cover  z-50 bg-slate-700 overflow-hidden`}>
      <div className={`${props.navHandle ? 'opacity-100  pointer-events-auto' : 'opacity-0 pointer-events-none'} duration-300`}>
        <div className='flex justify-between items-center p-4'>
          <p className='font-bold text-2xl'>LOGO</p>
          <Close navHandle={props.navHandle} setNavHandle={props.setNavHandle} />
        </div>

        <div className="items-center flex gap-1 border p-1 rounded-md bg">
          <input
            placeholder="search..."
            type="text"
            onChange={(e) => searchChangeHandler(e.target.value)}
            className="bg-transparent focus:outline-none z-20 mx-2 "
            onKeyPress={(e) => keyPressHandler(e)}
          />


          <div className="w-[1px] h-6 bg-white" />
          <button>
            <Search
              inputACC={props.inputACC}
              setInputSearch={props.setInputSearch}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
