import type { FunctionComponent } from "react";

import { IconButton } from "../../components";
import type { App } from "../../contexts";
import type {
	Icon,
	IconProps,
} from "../../icons";
import {
	PrivacyDangerIcon,
	PrivacyFineIcon,
	PrivacyUnknownIcon,
	PrivacyWarningIcon,
} from "../../icons";

interface Props {
	readonly privacyAudit: App["privacyAudit"]
}

export const PrivacySummary: FunctionComponent<Props> = ({ privacyAudit }) => {
	let color: IconProps["color"];
	let PrivacyIcon: Icon;
	let tooltip: string = "Open Exodus Privacy report";

	if (privacyAudit?.rating === "danger") {
		color = "error";
		PrivacyIcon = PrivacyDangerIcon;
	} else if (privacyAudit?.rating === "fine") {
		color = "success";
		PrivacyIcon = PrivacyFineIcon;
	} else if (privacyAudit?.rating === "warning") {
		color = "warning";
		PrivacyIcon = PrivacyWarningIcon;
	} else { privacyAudit?.rating satisfies undefined;
		color = "disabled";
		PrivacyIcon = PrivacyUnknownIcon;
		tooltip = "No privacy audit available";
	}

	return (
		<IconButton
			href={privacyAudit?.href || ""}
			isDisabled={privacyAudit === undefined}
			target="_blank"
			tooltip={tooltip}
		>
			<PrivacyIcon color={color} />
		</IconButton>
	);
};
