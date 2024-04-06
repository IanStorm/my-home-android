import type { StackProps } from "@mui/material";
import {
	Stack,
	Typography,
} from "@mui/material";
import type { FunctionComponent } from "react";

import type { AppOnDevice } from "../../contexts";
import {
	OSSActiveIcon,
	OSSInactiveIcon,
} from "../../icons";

interface Props {
	readonly apps: ReadonlyArray<Pick<AppOnDevice["app"], "isOSS">>
}

export const OSSSummary: FunctionComponent<Props> = ({ apps }) => {
	const openSourceApps = apps.filter((app) => typeof app.isOSS === "object");
	const closedSourceApps = apps.filter((app) => app.isOSS === false);
	const appsWithUnknownOSS = apps.filter((app) => app.isOSS === undefined);

	const stackProps: StackProps ={
		direction: "row",
		spacing: .5,
	};

	return (
		<Stack
			direction="row"
			spacing={1}
		>
			<Stack {...stackProps}>
				<OSSActiveIcon color="success" />
				<Typography>{openSourceApps.length}</Typography>
			</Stack>

			<Stack {...stackProps}>
				<OSSInactiveIcon color="error" />
				<Typography>{closedSourceApps.length}</Typography>
			</Stack>

			<Stack {...stackProps}>
				<OSSActiveIcon color="disabled" />
				<Typography>{appsWithUnknownOSS.length}</Typography>
			</Stack>
		</Stack>
	);
};
