import type { SxProps } from "@mui/material";
import {
	Box,
	Typography,
} from "@mui/material";
import type { FunctionComponent } from "react";

import { useMeta } from "../../contexts";

export const Title: FunctionComponent = () => {
	const { meta } = useMeta();

	const sx: SxProps = { flexGrow: 1 };

	if (!meta) return <Box sx={sx} />;
	else return (
		<Typography
			sx={sx}
			variant="h6"
		>
			{meta.displayName}
		</Typography>
	);
};
