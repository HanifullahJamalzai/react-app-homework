import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import vehiclePhoto from "../assets/vehicle.jpg";

function Vehicle() {
	const [vehicles, setVehicles] = useState();

	useEffect(() => {
		localStorage.getItem("vehicles")
			? setVehicles(JSON.parse(localStorage.getItem("vehicles")))
			: fetch("https://swapi.dev/api/vehicles/")
					.then((res) => res.json())
					.then((data) => {
						return (
							localStorage.setItem("vehicles", JSON.stringify(data)),
							setVehicles(JSON.parse(localStorage.getItem("vehicles")))
						);
					});
	}, []);

	const vehiclesElements = vehicles ? (
		vehicles.results?.map((vehicles) => {
			return (
				<div key={vehicles.name} className="flex flex-row w-2/12 m-3 p-3">
					<Link to="/">
						<div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
							<img className="rounded-t-lg" src={vehiclePhoto} alt="" />
							<div className="p-2">
								<h4 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50 flex justify-center">
									{vehicles.name}
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
			{vehiclesElements}
		</div>
	);
}

export default Vehicle;
