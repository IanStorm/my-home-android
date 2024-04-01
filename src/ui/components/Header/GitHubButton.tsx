import { Badge } from "@mui/material";
import type { FunctionComponent } from "react";

import { IconButton } from "../../components";
import { useMeta } from "../../contexts";
import {
	GitHubIcon,
	OpenExternalIcon,
} from "../../icons";

export const GitHubButton: FunctionComponent = () => {
	const { meta } = useMeta();

	if (!meta) return <></>;
	else return (
		<IconButton
			href={meta.githubURL.href}
			size="medium"
			target="_blank"
			tooltip="Go to GitHub repository"
		>
			<Badge
				anchorOrigin={{ horizontal: "right", vertical: "top" }}
				badgeContent={<OpenExternalIcon fontSize="inherit" />}
				color="default"
			>
				<GitHubIcon
					fontSize="inherit"
				/>
			</Badge>
		</IconButton>
	);
};
