import { Box } from "@mui/material";
import type { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header";
import { Hint } from "./Hint";

export const Layout: FunctionComponent = () => {


	return (
		<>
			<Header />

			<Hint />

			<Box
				component="main"
				p={4}
			>
				<Outlet />
			</Box>
		</>
	);
};
