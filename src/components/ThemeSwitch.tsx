import {
	DarkMode,
	LightMode,
} from "@mui/icons-material";
import {
	IconButton,
	Tooltip,
} from "@mui/material";
import React from "react";

import { useTheme } from "../contexts";

export const ThemeSwitch: React.FunctionComponent = () => {
	const { theme } = useTheme();

	if (theme) return (
		<Tooltip
			title={`Switch to ${theme.mode === "dark" ? "light" : "dark"} mode`}
		>
			<IconButton
				color="inherit"
				onClick={theme.toggleMode}
				size="medium"
			>
				{
					theme.mode === "dark"
						? <DarkMode fontSize="inherit" />
						: <LightMode fontSize="inherit" />
				}
			</IconButton>
		</Tooltip>
	);
	else return <></>;
};
