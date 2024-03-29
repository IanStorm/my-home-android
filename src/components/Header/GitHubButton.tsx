import {
	GitHub,
	OpenInNew,
} from "@mui/icons-material";
import {
	Badge,
	IconButton,
	Tooltip,
} from "@mui/material";
import React from "react";

import { useMeta } from "../../contexts";

export const GitHubButton: React.FunctionComponent = () => {
	const { meta } = useMeta();

	if (meta) return (
		<Tooltip
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
					badgeContent={<OpenInNew fontSize="inherit" />}
					color="default"
				>
					<GitHub
						fontSize="inherit"
					/>
				</Badge>
			</IconButton>
		</Tooltip>
	);
	else return <></>;
};
