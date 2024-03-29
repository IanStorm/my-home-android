import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import { Layout } from "./components";
import {
	AppsProvider,
	DevicesProvider,
	MetaProvider,
	ThemeProvider,
} from "./contexts";
import { Root } from "./routes";
import { Apps } from "./routes/apps";
import { Devices } from "./routes/devices";
import type { Path } from "./utils/routes";

const router = createBrowserRouter([{ children: [
	{ element: <Apps />, path: "/apps" satisfies Path },
	{ element: <Devices />, path: "/devices" satisfies Path },
	{ element: <Root />, path: "*" },
], element: <Layout /> }]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MetaProvider>
			<AppsProvider>
				<DevicesProvider>
					<ThemeProvider>
						<CssBaseline />
						<RouterProvider router={router} />
					</ThemeProvider>
				</DevicesProvider>
			</AppsProvider>
		</MetaProvider>
	</React.StrictMode>,
);
