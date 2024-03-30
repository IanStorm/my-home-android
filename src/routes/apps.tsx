import { Stack } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useApps } from "../contexts";
import { App } from "../ui/components";
import type { Path } from "../utils/routes";

export const Apps: React.FunctionComponent = () => {
	const { apps } = useApps();
	const navigate = useNavigate();

	useEffect(() => {
		if (!apps) navigate("/" satisfies Path);
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
