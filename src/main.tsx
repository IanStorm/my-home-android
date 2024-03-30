import { CssBaseline } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import { Layout } from "./ui/components";
import {
	AppsProvider,
	DevicesProvider,
	MetaProvider,
	ThemeProvider,
} from "./ui/contexts";
import { Root } from "./ui/routes";
import { Apps } from "./ui/routes/apps";
import { Devices } from "./ui/routes/devices";
import type { Path } from "./ui/utils/routes";

const router = createBrowserRouter([{ children: [
	{ element: <Apps />, path: "/apps" satisfies Path },
	{ element: <Devices />, path: "/devices" satisfies Path },
	{ element: <Root />, path: "*" },
], element: <Layout /> }]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
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
	</StrictMode>,
);
