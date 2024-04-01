import { Badge } from "@mui/material";
import type { FunctionComponent } from "react";

import { IconButton } from "../../components";
import type { App } from "../../contexts";
import type {
	Icon,
	IconProps,
} from "../../icons";
import {
	GitHubIcon,
	OpenExternalIcon,
	OSSActiveIcon,
	OSSInactiveIcon,
} from "../../icons";

interface Props {
	readonly isOSS: App["isOSS"]
}

export const OSSSummary: FunctionComponent<Props> = ({ isOSS }) => {
	let BadgeContent: Icon | undefined;
	let color: IconProps["color"];
	let tooltip: string;

	if (isOSS === false) {
		color = "error";
		tooltip = "Is closed source";
	} else if (typeof isOSS === "object") {
		BadgeContent = isOSS.host === "GitHub" ? GitHubIcon : OpenExternalIcon;
		color = "success";
		tooltip = `Open source code on ${isOSS.host}`;
	} else { isOSS satisfies undefined;
		color = "disabled";
		tooltip = "Source code availability unknown";
	}

	return (
		<IconButton
			href={isOSS ? isOSS.href : ""}
			isDisabled={!isOSS}
			target="_blank"
			tooltip={tooltip}
		>
			<Badge
				anchorOrigin={{ horizontal: "right", vertical: "top" }}
				badgeContent={BadgeContent
					? <BadgeContent color={color} fontSize="inherit" />
					: undefined}
			>
				{isOSS === false
					? <OSSInactiveIcon color={color} />
					: <OSSActiveIcon color={color} />}
			</Badge>
		</IconButton>
	);
};
