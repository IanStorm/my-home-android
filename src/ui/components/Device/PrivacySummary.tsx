import type { StackProps } from "@mui/material";
import {
	Stack,
	Typography,
} from "@mui/material";
import type { FunctionComponent } from "react";

import type { AppOnDevice } from "../../contexts";
import {
	PrivacyDangerIcon,
	PrivacyFineIcon,
	PrivacyUnknownIcon,
	PrivacyWarningIcon,
} from "../../icons";

interface Props {
	readonly apps: ReadonlyArray<Pick<AppOnDevice["app"], "privacyAudit">>
}

export const PrivacySummary: FunctionComponent<Props> = ({ apps }) => {
	const appsWithFinePrivacy = apps.filter((app) => app.privacyAudit?.rating === "fine");
	const appsWithWarnPrivacy = apps.filter((app) => app.privacyAudit?.rating === "warning");
	const appsWithErrorPrivacy = apps.filter((app) => app.privacyAudit?.rating === "danger");
	const appsWithUnknownPrivacy = apps.filter((app) => app.privacyAudit === undefined);

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
				<PrivacyFineIcon color="success" />
				<Typography>{appsWithFinePrivacy.length}</Typography>
			</Stack>

			<Stack {...stackProps}>
				<PrivacyWarningIcon color="warning" />
				<Typography>{appsWithWarnPrivacy.length}</Typography>
			</Stack>

			<Stack {...stackProps}>
				<PrivacyDangerIcon color="error" />
				<Typography>{appsWithErrorPrivacy.length}</Typography>
			</Stack>

			<Stack {...stackProps}>
				<PrivacyUnknownIcon color="disabled" />
				<Typography>{appsWithUnknownPrivacy.length}</Typography>
			</Stack>
		</Stack>
	);
};
