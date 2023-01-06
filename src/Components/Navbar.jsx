import React from "react";
import { Search } from "./svg/Search";
import { Burger } from "./svg/Burger";
import { Sidebar } from "./Sidebar";

export const Navbar = (props) => {
	const searchChangeHandler = (e) => {
		props.setInputACC(e)
	}
	
	const keyPressHandler = (e) => {
		if(e.key === 'Enter') {
			props.setInputSearch(props.inputACC)
			// console.log(e.key);
		}
	}

	return (
		<nav id="list"
			className="sticky top-0">
			<div 
				className="flex bg-[#050833] h-full justify-between md:justify-around items-center text-white p-5">
				<div 
					className="font-bold text-2xl">
						<p>LOGO</p>
				</div>

				<Burger navHandle={props.navHandle} setNavHandle={props.setNavHandle} />
				<div className="hidden md:flex items-center">

					<ul className="sm:flex gap-5 hidden md:flex items-center">
						<div className="items-center flex gap-1 border p-1 rounded-md bg">

							<input 
								placeholder="search..." 
								type="text" 
								onChange={(e) => searchChangeHandler(e.target.value)} 
								className="bg-transparent focus:outline-none z-20 mx-2" 
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
					</ul>

				</div>
				<Sidebar 
					setInputACC={props.setInputACC}
					inputACC={props.inputACC} 
					setInputSearch={props.setInputSearch} 
					navHandle={props.navHandle} 
					setNavHandle={props.setNavHandle} 
				/>
			</div>
			{/* <div className="flex bg-[#050833] p-8 md:px-14 justify-between items-center text-white w-full">
				<div>
					<h1 className="font-bold text-2xl">LOGO</h1>
				</div>
				<div className="flex items-center">
					<ul className="sm:flex gap-5 hidden md:flex items-center">
						<li>Team</li>
						<li>About</li>
						<div className="items-center flex gap-1 border p-1 rounded-md bg">
							<input placeholder="search..." type="text" className="bg-transparent focus:outline-none z-20 mx-2" />
							<div className="w-[1px] h-6 bg-white" />
							<button className="">
								<Search />
							</button>
						</div>
					</ul>
					<Burger navHandle={props.navHandle} setNavHandle={props.setNavHandle} />

				</div>
				<Sidebar navHandle={props.navHandle} setNavHandle={props.setNavHandle}  />
			</div> */}
		</nav>
	);
};
