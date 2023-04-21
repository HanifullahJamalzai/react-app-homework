import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vehicle from "./pages/Vehicle";
import Film from "./pages/Film";
import People from "./pages/People";
import Species from "./pages/Species";
import Planet from "./pages/Planet";
import Layout from "./components/Layout";

function App() {
	return (
		<>
			<BrowserRouter>
				{/* Header here */}
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<>Home</>} />
						<Route path="/people" element={<People />} />
						<Route path="/films" element={<Film />} />
						<Route path="/vehicle" element={<Vehicle />} />
						<Route path="/species" element={<Species />} />
						<Route path="/planet" element={<Planet />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
