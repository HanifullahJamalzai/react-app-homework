import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import filmPhoto from "../assets/film.jpg";
function Film() {
	const [films, setFilms] = useState();

	useEffect(() => {
		localStorage.getItem("films")
			? setFilms(JSON.parse(localStorage.getItem("films")))
			: fetch("https://swapi.dev/api/films/")
					.then((res) => res.json())
					.then((data) => {
						return (
							localStorage.setItem("films", JSON.stringify(data)),
							setFilms(JSON.parse(localStorage.getItem("films")))
						);
					});
	}, []);

	const filmElements = films ? (
		films.results?.map((film) => {
			return (
				<div key={film.title} className="flex flex-row w-2/12 m-3 p-3">
					<Link to="/">
						<div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
							<img className="rounded-t-lg" src={filmPhoto} alt="" />
							<div className="p-2">
								<h4 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50 flex justify-center">
									{film.title}
								</h4>
							</div>
						</div>
					</Link>
				</div>
			);
		})
	) : (
		<div>
			<h1>Loading.....</h1>
		</div>
	);

	return (
		<div className="flex flex-row flex-wrap mt-3 justify-center mb-6">
			{filmElements}
		</div>
	);
}

export default Film;
