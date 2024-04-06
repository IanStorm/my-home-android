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
		>> | Required<Pick<AnchorHTMLAttributes<unknown>,
			| "href"
			| "target"
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

	const { children: _, isDisabled: __, ...hrefOrClick } = props;

	return (
		<Tooltip
			offsetY={-8}
			title={props.tooltip}
		>
			<span> { /* 👈 🔗 https://mui.com/material-ui/react-tooltip/#disabled-elements */ }
				<MUIIconButton
					{...hrefOrClick}
					aria-label={props["aria-label"]}
					color="inherit"
					disabled={props.isDisabled}
					edge={props.edge}
					size={props.size}
					sx={{
						...disabledSx,
						mr: props.mr,
					}}
				>
					{props.children}
				</MUIIconButton>
			</span>
		</Tooltip>
	);
};
