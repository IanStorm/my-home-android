import {
	Brightness2,
	Brightness7,
	GitHub,
} from "@mui/icons-material";
import {
	AppBar,
	Box,
	IconButton,
	Toolbar,
	Tooltip,
	Typography,
} from "@mui/material";
import React from "react";

import { useTheme } from "./contexts";

export const App: React.FunctionComponent = () => {
	const theme = useTheme();

	return (
		<React.Fragment>
			<AppBar
				component="header"
				position="sticky"
			>
				<Toolbar>
					<Typography
						sx={{ flexGrow: 1 }}
						variant="h6"
					>
					My Home - Android
					</Typography>

					{theme ? (
						<Tooltip
							title={`Use ${theme.mode === "dark" ? "light" : "dark"} mode`}
						>
							<IconButton
								color="inherit"
								onClick={theme.toggleMode}
							>
								{theme.mode === "dark" ? <Brightness2 /> : <Brightness7 />}
							</IconButton>
						</Tooltip>
					): <></>}

					<Tooltip
						title="Go to GitHub repository"
					>
						<IconButton
							color="inherit"
							href="https://github.com/IanStorm/my-home-android"
							size="large"
						>
							<GitHub fontSize="inherit" />
						</IconButton>
					</Tooltip>
				</Toolbar>
			</AppBar>

			<Box
				component="main"
				p={4}
			>
				Welcome
			</Box>
		</React.Fragment>
	);
};
