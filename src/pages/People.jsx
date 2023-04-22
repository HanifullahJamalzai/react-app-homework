import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import personPhoto from "../assets/person.jpg";
function People() {
	const [people, setPeople] = useState();

	useEffect(() => {
		localStorage.getItem("people")
			? setPeople(JSON.parse(localStorage.getItem("people")))
			: fetch("https://swapi.dev/api/people/")
					.then((res) => res.json())
					.then((data) => {
						return (
							localStorage.setItem("people", JSON.stringify(data)),
							setPeople(JSON.parse(localStorage.getItem("people")))
						);
					});
	}, []);

	const peopleElements = people ? (
		people.results?.map((person) => {
			return (
				<div key={person.name} className="flex flex-row w-2/12 m-3 p-3">
					<Link to="/">
						<div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
							<img className="rounded-t-lg" src={personPhoto} alt="" />
							<div className="p-2">
								<h4 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50 flex justify-center">
									{person.name}
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
			{peopleElements}
		</div>
	);
}

export default People;
