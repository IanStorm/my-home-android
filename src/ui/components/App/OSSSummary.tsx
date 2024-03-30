import type {
	SvgIconOwnProps,
	SxProps,
} from "@mui/material";
import {
	Badge,
	IconButton,
} from "@mui/material";
import type { FunctionComponent } from "react";

import type { App } from "../../contexts";
import {
	GitHubIcon,
	OpenExternalIcon,
	OSSActiveIcon,
	OSSInactiveIcon,
} from "../../icons";
import { Tooltip } from "../Tooltip";

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

	/**
	 * 🔗 https://mui.com/material-ui/react-tooltip/#disabled-elements
	 */
	const sx: SxProps = !isOSS
		? { pointerEvents: "none" }
		: {}
	;

	return (
		<Tooltip
			offsetY={-8}
			title={title}
		>
			<span> { /* 👈 🔗 https://mui.com/material-ui/react-tooltip/#disabled-elements */ }
				<IconButton
					color="inherit"
					disabled={!isOSS}
					href={isOSS ? isOSS.href : ""}
					sx={sx}
					target="_blank"
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
			</span>
		</Tooltip>
	);
};
