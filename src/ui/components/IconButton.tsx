import type {
	BoxProps,
	IconButtonProps as MUIIconButtonProps,
	SxProps,
} from "@mui/material";
import { IconButton as MUIIconButton } from "@mui/material";
import type {
	AnchorHTMLAttributes,
	FunctionComponent,
} from "react";

import { Tooltip } from "./Tooltip";

type Props =
	& Pick<MUIIconButtonProps,
		| "aria-label"
		| "children"
		| "edge"
		| "size"
	> & Pick<BoxProps,
		| "mr"
	> & (
		| Required<Pick<MUIIconButtonProps,
			| "onClick"
		>> | Required<Pick<AnchorHTMLAttributes<HTMLAnchorElement>,
			| "href"
		>>
	) & {
		readonly isDisabled?: boolean
		readonly tooltip?: string
	}
;

export const IconButton: FunctionComponent<Props> = (props) => {
	/**
	 * 🔗 https://mui.com/material-ui/react-tooltip/#disabled-elements
	 */
	const disabledSx: SxProps = props.isDisabled
		? { pointerEvents: "none" }
		: {}
	;

	const iconBtnProps = {
		"aria-label": props["aria-label"],
		color: "inherit",
		disabled: props.isDisabled,
		edge: props.edge,
		size: props.size,
		sx: {
			...disabledSx,
			mr: props.mr,
		},
	} satisfies MUIIconButtonProps;

	return (
		<Tooltip
			offsetY={-8}
			title={props.tooltip}
		>
			<span> { /* 👈 🔗 https://mui.com/material-ui/react-tooltip/#disabled-elements */ }
				{"href" in props ? (
					<MUIIconButton
						{...iconBtnProps}
						href={props.href}
						rel="noreferrer" // 👈 https://mui.com/material-ui/react-link/#security
						target="_blank"
					>
						{props.children}
					</MUIIconButton>
				) : (
					<MUIIconButton
						{...iconBtnProps}
						onClick={props.onClick}
					>
						{props.children}
					</MUIIconButton>
				)}
			</span>
		</Tooltip>
	);
};
