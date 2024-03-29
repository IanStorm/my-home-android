import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./Header";

export const Layout: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<Header />

			<Box
				component="main"
				p={4}
			>
				<Outlet />
			</Box>
		</React.Fragment>
	);
};
