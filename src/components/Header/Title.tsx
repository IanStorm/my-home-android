import type {
	SxProps} from "@mui/material";
import {
	Box,
	Typography,
} from "@mui/material";

import { useMeta } from "../../contexts";

export const Title: React.FunctionComponent = () => {
	const { meta } = useMeta();

	const sx: SxProps = { flexGrow: 1 };

	if (meta) return (
		<Typography
			sx={sx}
			variant="h6"
		>
			{meta.displayName}
		</Typography>
	);
	else return (
		<Box sx={sx} />
	);
};
