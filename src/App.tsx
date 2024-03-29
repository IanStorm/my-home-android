import { Box } from "@mui/material";
import React from "react";

import { Header } from "./components";

export const App: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<Header />

			<Box
				component="main"
				p={4}
			>
				Welcome
			</Box>
		</React.Fragment>
	);
};
