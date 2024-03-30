import type { TooltipProps as MUITooltipProps } from "@mui/material";
import { Tooltip as MUITooltip } from "@mui/material";
import type { FunctionComponent } from "react";

type Props = Pick<MUITooltipProps, "children" | "title">

export const Tooltip: FunctionComponent<Props> = ({
	children,
	title,
}) => {
	return (
		<MUITooltip
			arrow={true}
			enterDelay={500}
			title={title}
		>
			{children}
		</MUITooltip>
	);
};
