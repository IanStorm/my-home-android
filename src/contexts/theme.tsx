import type { PaletteMode } from "@mui/material";
import {
	createTheme,
	ThemeProvider as MUIThemeProvider,
	useMediaQuery,
} from "@mui/material";
import React from "react";

interface Theme {
	readonly mode: PaletteMode
	readonly toggleMode: () => void
}

interface ThemeStore {
	readonly theme?: Theme
}

const ThemeContext = React.createContext<ThemeStore>({});

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const [mode, setMode] = React.useState<Theme["mode"]>(prefersDarkMode ? "dark" : "light");

	const toggleMode = () => mode === "dark" ? setMode("light") : setMode("dark");

	const muiTheme = React.useMemo(
		() => createTheme({
			palette: { mode },
			typography: { allVariants: { userSelect: "none" } },
		}),
		[mode]
	);

	const theme: Theme = { mode, toggleMode };

	return (
		<ThemeContext.Provider value={{ theme }}>
			<MUIThemeProvider theme={muiTheme}>
				{children}
			</MUIThemeProvider>
		</ThemeContext.Provider>
	);
};
