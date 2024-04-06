import type { BoxProps } from "@mui/material";
import {
	Box,
	Link as MUILink,
} from "@mui/material";
import type { FunctionComponent } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import { useMeta } from "../../contexts";
import type { Path } from "../../utils/routes";

export const Title: FunctionComponent = () => {
	const { meta } = useMeta();

	const sx: BoxProps["sx"] = { flexGrow: 1 };

	if (!meta) return <Box sx={sx} />;
	else return (
		<Box sx={sx}>
			<MUILink
				component={ReactRouterLink}
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
