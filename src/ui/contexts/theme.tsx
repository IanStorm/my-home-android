import type { PaletteMode } from "@mui/material";
import {
	createTheme,
	ThemeProvider as MUIThemeProvider,
	useMediaQuery,
} from "@mui/material";
import type {
	FunctionComponent,
	PropsWithChildren,
} from "react";
import {
	createContext,
	useContext,
	useMemo,
	useState,
} from "react";

interface Theme {
	readonly mode: PaletteMode
	readonly toggleMode: () => void
}

interface ThemeStore {
	readonly theme?: Theme
}

const ThemeContext = createContext<ThemeStore>({});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const [mode, setMode] = useState<Theme["mode"]>(prefersDarkMode ? "dark" : "light");

	const toggleMode = () => mode === "dark" ? setMode("light") : setMode("dark");

	const muiTheme = useMemo(
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
