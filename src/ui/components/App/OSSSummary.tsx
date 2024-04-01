import type { SvgIconOwnProps } from "@mui/material";
import { Badge } from "@mui/material";
import type { FunctionComponent } from "react";

import type { App } from "../../contexts";
import {
	GitHubIcon,
	OpenExternalIcon,
	OSSActiveIcon,
	OSSInactiveIcon,
} from "../../icons";
import { IconButton } from "../IconButton";

interface Props {
	readonly isOSS: App["isOSS"]
}

export const OSSSummary: FunctionComponent<Props> = ({ isOSS }) => {
	let BadgeContent: FunctionComponent<SvgIconOwnProps> | undefined;
	let color: SvgIconOwnProps["color"];
	let title: string;

	if (isOSS === false) {
		color = "error";
		title = "Is closed source";
	} else if (typeof isOSS === "object") {
		BadgeContent = isOSS.host === "GitHub" ? GitHubIcon : OpenExternalIcon;
		color = "success";
		title = `Open source code on ${isOSS.host}`;
	} else { isOSS satisfies undefined;
		color = "disabled";
		title = "Source code availability unknown";
	}

	return (
		<IconButton
			href={isOSS ? isOSS.href : ""}
			isDisabled={!isOSS}
			target="_blank"
			tooltip={title}
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
