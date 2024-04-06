import { Stack } from "@mui/material";
import type { FunctionComponent } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { App } from "../components";
import {
	useApps,
	useHint,
} from "../contexts";
import type { Path } from "../utils/routes";

export const Apps: FunctionComponent = () => {
	const { apps } = useApps();
	const { setHint } = useHint();
	const navigate = useNavigate();

	useEffect(() => {
		if (!apps) {
			setHint({
				msg: "Apps couldn't be loaded, please try again later. If this issue persists, contact your admin.",
				severity: "error",
			});
			navigate("/" satisfies Path);
		}
	}, []);

	if (!apps) return <></>;
	else return (
		<Stack direction="column">
			{apps.map((app) => (
				<App
					app={app}
					key={app.id}
				/>
			))}
		</Stack>
	);
};
