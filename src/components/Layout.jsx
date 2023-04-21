import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<>
			Layout
			<Outlet />
		</>
	);
}

export default Layout;
