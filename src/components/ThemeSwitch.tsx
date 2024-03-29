import {
	Brightness2,
	Brightness7,
} from "@mui/icons-material";
import {
	IconButton,
	Tooltip,
} from "@mui/material";
import React from "react";

import { useTheme } from "../contexts";

export const ThemeSwitch: React.FunctionComponent = () => {
	const theme = useTheme();

	if (theme) return (
		<Tooltip
			title={`Use ${theme.mode === "dark" ? "light" : "dark"} mode`}
		>
			<IconButton
				color="inherit"
				onClick={theme.toggleMode}
				size="medium"
			>
				{
					theme.mode === "dark"
						? <Brightness2 fontSize="inherit" />
						: <Brightness7 fontSize="inherit" />
				}
			</IconButton>
		</Tooltip>
	);
	else return <></>;
};
