import { Box } from "@mui/material";
import type { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./Header";

export const Layout: FunctionComponent = () => {
	return (
		<>
			<Header />

			<Box
				component="main"
				p={4}
			>
				<Outlet />
			</Box>
		</>
	);
};
