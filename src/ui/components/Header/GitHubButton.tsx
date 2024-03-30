import {
	Badge,
	IconButton,
} from "@mui/material";
import type { FunctionComponent } from "react";

import { Tooltip } from "../../components";
import { useMeta } from "../../contexts";
import {
	GitHubIcon,
	OpenExternalIcon,
} from "../../icons";

export const GitHubButton: FunctionComponent = () => {
	const { meta } = useMeta();

	if (!meta) return <></>;
	else return (
		<Tooltip
			offsetY={-8}
			title="Go to GitHub repository"
		>
			<IconButton
				color="inherit"
				href={meta.githubURL.href}
				size="medium"
				target="_blank"
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
		</Tooltip>
	);
};
