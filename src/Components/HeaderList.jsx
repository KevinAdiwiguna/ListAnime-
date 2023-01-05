import React from 'react'

export const HeaderList = (props) => {
    // inputSearch={props.inputSearch}

    const TextHandler = () => {
        if(props.inputSearch === '')  {
            return (
                <p className="text-center text-white text-xl sm:text-3xl md:text-4xl py-20 "><b> Top list </b> <span className="underline">{props.getSeach}</span></p>
            ) 
        }
        if(props.inputSearch !== '') {
            return (
                <p className="text-center text-white text-xl sm:text-3xl md:text-4xl py-20 "><b>Search Result For </b> <span className="">{props.getSeach}</span> <span className="underline">{props.inputSearch}</span></p>
            )
        }
    }

    return (
        <TextHandler />
    )
}
