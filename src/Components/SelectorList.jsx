import React from "react";

export const SelectorList = (porps) => {

	const onClickEvent = (data) => {
		if (data === 1) {
			porps.setGetSeach('manga')
		} else if (data === 2) {
			porps.setGetSeach('anime')
		}
	}

	return (
		// <div className="flex w-full p-5">
		// 	<p className="bg-slate-400 p-2 m-1 rounded-full text-white text-xs" onClick={() => porps.setGetSeach('manga')}>Manga</p>
		// 	<p className="bg-slate-400 p-2 m-1 rounded-full text-white text-xs" onClick={() => porps.setGetSeach('anime')}>Anime</p>
		// </div>
		<div className="mx-auto  w-full bg-green-900 bg-opacity-95 rounded-t-lg">
			<div className="xl:pl-14 py-5 rounded-md shadow-sm" role="group">
				<button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-slate-800 focus:text-slate-800 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white" onClick={() => onClickEvent(1)}>
					Manga
				</button>
				<button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-slate-800 focus:text-slate-800 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white" onClick={() => onClickEvent(2)}>
					Anime
				</button>
			</div>
		</div>

	);
};
