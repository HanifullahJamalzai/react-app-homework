import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import planetPhoto from "../assets/palents.jpg";
function Planet() {
	const [planets, setPlanets] = useState();

	useEffect(() => {
		localStorage.getItem("planets")
			? setPlanets(JSON.parse(localStorage.getItem("planets")))
			: fetch("https://swapi.dev/api/planets/")
					.then((res) => res.json())
					.then((data) => {
						return (
							localStorage.setItem("planets", JSON.stringify(data)),
							setPlanets(JSON.parse(localStorage.getItem("planets")))
						);
					});
	}, []);

	const planetElements = planets ? (
		planets.results?.map((planet) => {
			return (
				<div key={planet.name} className="flex flex-row w-2/12 m-3 p-3">
					<Link to="/">
						<div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
							<img className="rounded-t-lg" src={planetPhoto} alt="" />
							<div className="p-2">
								<h4 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50 flex justify-center">
									{planet.name}
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
			{planetElements}
		</div>
	);
}

export default Planet;
