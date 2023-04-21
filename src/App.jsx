import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<>Home</>} />
					<Route path="/cars" element={<>Cars</>} />
					<Route path="/films" element={<>Films</>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
