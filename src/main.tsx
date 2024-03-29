import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import {
	MetaProvider,
	ThemeProvider,
} from "./contexts";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MetaProvider>
			<ThemeProvider>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</MetaProvider>
	</React.StrictMode>,
);
