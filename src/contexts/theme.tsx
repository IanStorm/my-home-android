import type { PaletteMode } from "@mui/material";
import {
	createTheme,
	ThemeProvider as MUIThemeProvider,
	useMediaQuery,
} from "@mui/material";
import React from "react";

interface ThemeStore {
	readonly mode: PaletteMode
	readonly toggleMode: () => void
}

const ThemeContext = React.createContext<ThemeStore | undefined>(undefined);

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const [mode, setMode] = React.useState<ThemeStore["mode"]>(prefersDarkMode ? "dark" : "light");

	const toggleMode = () => mode === "dark" ? setMode("light") : setMode("dark");

	const theme = React.useMemo(
		() => createTheme({
			palette: { mode },
			typography: { allVariants: { userSelect: "none" } },
		}),
		[mode]
	);

	return (
		<ThemeContext.Provider value={{mode, toggleMode}}>
			<MUIThemeProvider theme={theme}>
				{children}
			</MUIThemeProvider>
		</ThemeContext.Provider>
	);
};
