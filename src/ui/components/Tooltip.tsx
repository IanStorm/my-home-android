import type { TooltipProps as MUITooltipProps } from "@mui/material";
import { Tooltip as MUITooltip } from "@mui/material";
import type { FunctionComponent } from "react";

type Props =
	& Pick<MUITooltipProps, "children" | "title">
	& {
		readonly offsetY?: number
	}
;

export const Tooltip: FunctionComponent<Props> = ({
	children,
	offsetY = 0,
	title,
}) => {
	return (
		<MUITooltip
			arrow={true}
			enterDelay={500}
			slotProps={{
				popper: {
					modifiers: [
						{ name: "offset", options: { offset: [0, offsetY] } },
					],
				},
			}}
			title={title}
		>
			{children}
		</MUITooltip>
	);
};
