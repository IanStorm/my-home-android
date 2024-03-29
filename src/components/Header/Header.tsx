import { Menu } from "@mui/icons-material";
import {
	AppBar,
	Drawer,
	IconButton,
	Toolbar,
} from "@mui/material";
import React from "react";

import { GitHubButton } from "./GitHubButton";
import { Nav } from "./Nav";
import { ThemeSwitch } from "./ThemeSwitch";
import { Title } from "./Title";

export const Header: React.FunctionComponent = () => {
	const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);
	const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

	return (
		<React.Fragment>
			<AppBar
				component="header"
				position="sticky"
			>
				<Toolbar>
					<IconButton
						aria-label="open nav"
						color="inherit"
						edge="start"
						onClick={toggleDrawer}
						sx={{ mr: 2 }}
					>
						<Menu fontSize="inherit" />
					</IconButton>

					<Title />

					<ThemeSwitch />
					<GitHubButton />
				</Toolbar>
			</AppBar>

			<Drawer
				onClose={() => setIsDrawerOpen(false)}
				open={isDrawerOpen}
			>
				<Nav onNavigate={() => setIsDrawerOpen(false)} />
			</Drawer>
		</React.Fragment>
	);
};
