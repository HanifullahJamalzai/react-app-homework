import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import img from "../assets/star-wars-logo-981.png";
function Layout() {
	return (
		<div className="p-6 bg-black text-white">
			<header className="flex flex-row justify-between">
				<img src={img} alt="" width={100} />
				<ul className="flex flex-row space-x-2">
					<NavLink
						to="/films"
						className={({ isActive }) =>
							[
								"hover:underline decoration-amber-500 underline-offset-8",
								isActive
									? "underline decoration-amber-500 underline-offset-8 text-amber-500 font-bold"
									: "",
							].join(" ")
						}
					>
						Films
					</NavLink>
					<NavLink
						to="/people"
						className={({ isActive }) =>
							[
								"hover:underline decoration-amber-500 underline-offset-8",
								isActive
									? "underline decoration-amber-500 underline-offset-8 text-amber-500"
									: "",
							].join(" ")
						}
					>
						People
					</NavLink>
					<NavLink
						to="/planet"
						className={({ isActive }) =>
							[
								"hover:underline decoration-amber-500 underline-offset-8",
								isActive
									? "underline decoration-amber-500 underline-offset-8 text-amber-500"
									: "",
							].join(" ")
						}
					>
						Planets
					</NavLink>
					<NavLink
						to="/species"
						className={({ isActive }) =>
							[
								"hover:underline decoration-amber-500 underline-offset-8",
								isActive
									? "underline decoration-amber-500 underline-offset-8 text-amber-500"
									: "",
							].join(" ")
						}
					>
						Species
					</NavLink>
					<NavLink
						to="/vehicles"
						className={({ isActive }) =>
							[
								"hover:underline decoration-amber-500 underline-offset-8",
								isActive
									? "underline decoration-amber-500 underline-offset-8 text-amber-500"
									: "",
							].join(" ")
						}
					>
						Vehicles
					</NavLink>
				</ul>
			</header>
			<div className="p-5">
				<h1 className="text-xl font-bold">
					May the Force be with you -{" "}
					<span className="underline decoration-amber-500 underline-offset-8 text-amber-500 uppercase">
						Star Wars
					</span>{" "}
				</h1>
				<div className="flex justify-between mt-4 mb-8">
					<input
						type="text"
						name=""
						id=""
						placeholder="Looking for Character?"
						className="shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-3/12"
					/>
					<div className="space-x-2">
						<button className="bg-amber-500 px-2 rounded-xl">1</button>
						<button className="px-2 bg-gray-500">2</button>
						<button className="px-2 bg-gray-500">3</button>
					</div>
				</div>
				<Outlet />
			</div>
			<div className="flex justify-center">
				<p>Created By Hanifullah Jamalzai With Love For CTD</p>
			</div>
		</div>
	);
}

export default Layout;
