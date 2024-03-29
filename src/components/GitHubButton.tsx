import { GitHub } from "@mui/icons-material";
import {
	IconButton,
	Tooltip,
} from "@mui/material";
import React from "react";

import { useMeta } from "../contexts";

export const GitHubButton: React.FunctionComponent = () => {
	const meta = useMeta();

	if (meta) return (
		<Tooltip
			title="Go to GitHub repository"
		>
			<IconButton
				color="inherit"
				href={meta.githubURL.href}
				size="medium"
			>
				<GitHub
					fontSize="inherit"
				/>
			</IconButton>
		</Tooltip>
	);
	else return <></>;
};
