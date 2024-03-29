import { GitHub } from "@mui/icons-material";
import {
	AppBar,
	Box,
	IconButton,
	Toolbar,
	Tooltip,
	Typography,
} from "@mui/material";
import React from "react";

export const App: React.FunctionComponent = () => {
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
