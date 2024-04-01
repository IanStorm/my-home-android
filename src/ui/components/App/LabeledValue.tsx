import { Stack, Typography } from "@mui/material";
import type { FunctionComponent, ReactNode } from "react";

interface Props {
	readonly label: string
	readonly value: ReactNode | string
}

export const LabeledValue: FunctionComponent<Props> = ({ label, value }) => {
	return (
		<Stack direction="column">
			<Typography variant="subtitle1">
				{label}
			</Typography>

			<Typography variant="body2">
				{value}
			</Typography>
		</Stack>
	);
};
