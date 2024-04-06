import type {
	BoxProps,
	LinkProps as MUILinkProps,
} from "@mui/material";
import {
	Box,
	Link as MUILink,
} from "@mui/material";
import type { FunctionComponent } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import { useMeta } from "../../contexts";
import type { Path } from "../../utils/routes";

interface Props {
	readonly onClick?: MUILinkProps["onClick"]
}

export const Title: FunctionComponent<Props> = ({ onClick }) => {
	const { meta } = useMeta();

	const sx: BoxProps["sx"] = { flexGrow: 1 };

	if (!meta) return <Box sx={sx} />;
	else return (
		<Box sx={sx}>
			<MUILink
				component={ReactRouterLink}
				onClick={onClick}
				to={"/" satisfies Path}

				color="inherit"
				underline="hover"
				variant="h6"
			>
				{meta.displayName}
			</MUILink>
		</Box>
	);
};
