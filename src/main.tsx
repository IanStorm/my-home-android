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
import { DeviceID } from "./ui/routes/devices/id";
import type { Path } from "./ui/utils/routes";

const router = createBrowserRouter(
	[{
		children:
		[
			{ element: <Apps />, path: "/apps" satisfies Path },
			{ element: <Devices />, path: "/devices" satisfies Path },
			{ element: <DeviceID />, path: "/devices/:deviceID" satisfies Path },
			{ element: <Root />, path: "*" },
		],
		element: <Layout />,
	}],
	{
		basename: import.meta.env.BASE_URL, // 🔗 https://vitejs.dev/guide/env-and-mode#env-variables
	},
);

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
