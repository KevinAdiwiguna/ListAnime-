import React, { useEffect, useState } from "react";
import { Index } from "./View/Index";
import { Loading } from "./View/Loading";
import axios from "axios";

export const App = () => {
	document.title = "AnimeList";
	const [getSeach, setGetSeach] = useState("anime");
	const [getAnime, setGetAnime] = useState([]);

	const [inputSearch, setInputSearch] = useState("");
	const [inputACC, setInputACC] = useState("")


	const [loading, setLoading] = useState(false);
	const [navHandle, setNavHandle] = useState(false);


	const apiDataHandler = () => {	
		if (inputSearch  !== "") {
			// console.log('search anime', inputSearch);
			setLoading(true);
			const data = async() => {
				const result = await axios.get(`https://api.jikan.moe/v4/${getSeach}?q=${inputSearch}&sfw`)
				const dataStatus = result.status
				if(dataStatus === 200) {
					setGetAnime(result.data.data)
				} else {
					return alert('API ERROR ', dataStatus)
				}
			}
			data()
			setLoading(false);
		}else if (inputSearch === '') {
			// console.log('top', getSeach);
			const getDataAPI = async () => {
				setLoading(true);
				const result = await axios.get(`https://api.jikan.moe/v4/top/${getSeach}`);
				setGetAnime(result.data.data);
				const apiStatus = result.status.toString();
				if (apiStatus === "200") {
					setLoading(false);
				} else {
					setLoading(true);
					alert(`ERROR API ${apiStatus}`);
				}
			};
			getDataAPI()
		}
	};


	useEffect(() => {
		apiDataHandler()
		

	}, [getSeach, inputSearch]);

	return (
		<div>
			<Loading loading={loading} />
			<Index
				inputSearch={inputSearch}
				getAnime={getAnime}
				getSeach={getSeach}
				setGetSeach={setGetSeach}
				loading={loading}
				navHandle={navHandle}
				setNavHandle={setNavHandle}
				setInputSearch={setInputSearch}
				inputACC={inputACC}
				setInputACC={setInputACC}
			/>
		</div>
	);
};
