import React from 'react'
import { Hero } from '../Components/Hero'
import { Navbar } from '../Components/Navbar'
import { SelectorList } from '../Components/SelectorList'
import { Card } from '../Components/Card'
import { HeaderList } from '../Components/HeaderList'

export const Index = (props) => {
	return (

		<div 
		className={`
			${props.loading ? 'hidden' : 'block'} 
			${props.navHandle ? 'overflow-y-hidden' : 'overflow-y-auto'}`}
		>

			<Hero />
			<Navbar 
				inputACC={props.inputACC} 
				setInputSearch={props.setInputSearch}  
				setInputACC={props.setInputACC} 
				navHandle={props.navHandle} 
				setNavHandle={props.setNavHandle}
				
				getSeach={props.getSeach}
			/>


			<div className='container mx-auto'>

				<HeaderList 
					getSeach={props.getSeach}
					inputSearch={props.inputSearch}
				/>

				<SelectorList 
					setGetSeach={props.setGetSeach} 
					getSeach={props.getSeach} 
				/>

				<Card  
					setGetSeach={props.setGetSeach}  
					getAnime={props.getAnime} 
					getSeach={props.getSeach}
				/>

			</div>
				
				<div className='h-screen'></div>
		</div>
	)
}
