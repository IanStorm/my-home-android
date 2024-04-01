import type {
	StackProps,
	TypographyProps,
} from "@mui/material";
import {
	Stack,
	Typography,
} from "@mui/material";
import type {
	FunctionComponent,
	ReactNode,
} from "react";

interface Props {
	readonly label: string
	readonly size?: "medium" | "small"
	readonly value: ReactNode | string
}

export const LabeledValue: FunctionComponent<Props> = ({
	label,
	size = "medium",
	value,
}) => {
	let alignItems: StackProps["alignItems"];
	let direction: StackProps["direction"];
	let keyVariant: TypographyProps["variant"];
	const valueVariant: TypographyProps["variant"] = "body2";

	if (size === "medium") {
		alignItems = "start";
		direction = "column";
		keyVariant = "subtitle1";
	} else { size satisfies "small";
		alignItems = "end";
		direction = "row";
		keyVariant = "subtitle2";
	}

	return (
		<Stack
			alignItems={alignItems}
			direction={direction}
			columnGap={1} rowGap={0}
		>
			<Typography variant={keyVariant}>
				{label}
			</Typography>

			<Typography variant={valueVariant}>
				{value}
			</Typography>
		</Stack>
	);
};
