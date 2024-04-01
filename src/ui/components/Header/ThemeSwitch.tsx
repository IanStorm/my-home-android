import type { FunctionComponent } from "react";

import { IconButton } from "../../components";
import { useTheme } from "../../contexts";
import {
	DarkModeIcon,
	LightModeIcon,
} from "../../icons";

export const ThemeSwitch: FunctionComponent = () => {
	const { theme } = useTheme();

	if (!theme) return <></>;
	else return (
		<IconButton
			onClick={theme.toggleMode}
			size="medium"
			tooltip={`Switch to ${theme.mode === "dark" ? "light" : "dark"} mode`}
		>
			{
				theme.mode === "dark"
					? <DarkModeIcon />
					: <LightModeIcon />
			}
		</IconButton>
	);
};
