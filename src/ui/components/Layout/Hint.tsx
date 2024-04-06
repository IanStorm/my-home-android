import {
	Alert,
	Box,
} from "@mui/material";
import type { FunctionComponent } from "react";

import { useHint } from "../../contexts";

export const Hint: FunctionComponent = () => {
	const { clear, hint } = useHint();

	if (!hint) return <></>;
	else return (
		<Box p={2}>
			<Alert
				onClose={clear}
				severity={hint.severity}
				variant="outlined"
			>
				{hint.msg}
			</Alert>
		</Box>
	);
};
