import {
	DarkMode,
	LightMode,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import type { FunctionComponent } from "react";

import { useTheme } from "../../contexts";
import { Tooltip } from "../../ui/components";

export const ThemeSwitch: FunctionComponent = () => {
	const { theme } = useTheme();

	if (!theme) return <></>;
	else return (
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
};
