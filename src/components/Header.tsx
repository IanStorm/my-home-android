import {
	AppBar,
	Toolbar,
	Typography,
} from "@mui/material";

import { GitHubButton } from "./GitHubButton";
import { ThemeSwitch } from "./ThemeSwitch";

export const Header: React.FunctionComponent = () => {
	return (
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

				<ThemeSwitch />
				<GitHubButton />
			</Toolbar>
		</AppBar>
	);
};
