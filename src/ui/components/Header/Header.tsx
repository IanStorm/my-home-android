import {
	AppBar,
	Drawer,
	IconButton,
	Toolbar,
} from "@mui/material";
import type { FunctionComponent } from "react";
import { useState } from "react";

import { MenuIcon } from "../../icons";
import { GitHubButton } from "./GitHubButton";
import { Nav } from "./Nav";
import { ThemeSwitch } from "./ThemeSwitch";
import { Title } from "./Title";

export const Header: FunctionComponent = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
	const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

	return (
		<>
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
						<MenuIcon fontSize="inherit" />
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
		</>
	);
};
