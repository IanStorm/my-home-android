import {
	GitHub,
	OpenInNew,
} from "@mui/icons-material";
import {
	Badge,
	IconButton,
} from "@mui/material";
import type { FunctionComponent } from "react";

import { useMeta } from "../../contexts";
import { Tooltip } from "../../ui/components";

export const GitHubButton: FunctionComponent = () => {
	const { meta } = useMeta();

	if (!meta) return <></>;
	else return (
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
};
