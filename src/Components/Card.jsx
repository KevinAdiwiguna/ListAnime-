import React from 'react'
import { SelectorList } from './SelectorList'

export const Card = (props) => {
    const cardHandle = (data) => {
        window.open(data.images.jpg.large_image_url, '_blank')
    }

    return (
        <div >
            <div className='grid sm:grid-cols-2 2xl:grid-cols-3 content-start gap-10'>
                {props.getAnime?.map((res, key) => {
                    return (
                        <div className="  lg:max-w-full lg:flex mx-auto" key={key}>
                            {/* TODO style="background-image: url('/mountain.jpg')" */}
                            <div onClick={() => cardHandle(res)} className={`h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-center bg-clip-content`} style={{ backgroundImage: `url(${res.images.jpg.large_image_url})` }} title={res.title}>
                            </div>
                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal max-w-[425px]">
                                <div className="mb-8">
                               
                                    <div className="text-gray-900 font-bold text-xl mb-2 cursor-pointer hover:underline" onClick={() => window.open(res.url, '_blank')}>{res.title}</div>
                                    <p className="text-gray-700 text-base"><b>Background: </b> {res.background}</p>
                                    <p><b>Rating: </b>{res.rating}</p>
                                    <p><b>Producers: </b> 
                                        {res.producers?.map((res, key) => {
                                            return (
                                                <span key={key} className="text-slate-600">{res.name},</span>
                                            )
                                        })}
                                    </p>
                                    <a href={res.trailer?.embed_url} target="_blank"  rel="noreferrer" className='underline text-blue-500'>Look The Trailer</a>
                                </div>
                                <div className="flex items-center">
                                <p className='mx-1'><b>From realse: </b>{res.aired?.from}</p>
                                    <div className="text-sm">
                                    <p className='mx-1'><b>Score: </b>{res.score}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
