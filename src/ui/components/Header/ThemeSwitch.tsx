import { IconButton } from "@mui/material";
import type { FunctionComponent } from "react";

import { Tooltip } from "../../components";
import { useTheme } from "../../contexts";
import {
	DarkModeIcon,
	LightModeIcon,
} from "../../icons";

export const ThemeSwitch: FunctionComponent = () => {
	const { theme } = useTheme();

	if (!theme) return <></>;
	else return (
		<Tooltip
			offsetY={-8}
			title={`Switch to ${theme.mode === "dark" ? "light" : "dark"} mode`}
		>
			<IconButton
				color="inherit"
				onClick={theme.toggleMode}
				size="medium"
			>
				{
					theme.mode === "dark"
						? <DarkModeIcon />
						: <LightModeIcon />
				}
			</IconButton>
		</Tooltip>
	);
};
