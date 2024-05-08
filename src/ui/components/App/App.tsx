import type { AccordionProps } from "@mui/material";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Grid,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import type { FunctionComponent } from "react";
import { useState } from "react";

import type { App as UIApp } from "../../contexts";
import { ExpandIcon } from "../../icons";
import { OSSDetails } from "./OSSDetails";
import { OSSSummary } from "./OSSSummary";
import { PlayDetails } from "./PlayDetails";
import { PlaySummary } from "./PlaySummary";
import { PrivacyDetails } from "./PrivacyDetails";
import { PrivacySummary } from "./PrivacySummary";

interface Props {
	readonly app: UIApp
}

/**
 * 🔗 https://mui.com/material-ui/react-accordion/#controlled-accordion
 */
export const App: FunctionComponent<Props> = ({ app }) => {
	const [isExpanded, setIsExpanded] = useState<true | false>(false);
	const toggleIsExpanded = () => setIsExpanded(!isExpanded);

	/**
	 * 🔗 https://stackoverflow.com/a/64708590/6694769
	 *
	 * 🔗 https://stackoverflow.com/a/61398018/6694769
	 */
	const accordionSx: AccordionProps["sx"] = {
		"&:hover:not(.Mui-disabled)": {
			cursor: "unset",
		},
		".MuiAccordionSummary-root:hover:not(.Mui-disabled)": {
			cursor: "unset",
		},
	};

	return (
		<Accordion
			expanded={isExpanded}
			sx={accordionSx}
		>
			<AccordionSummary
				expandIcon={(
					<IconButton onClick={toggleIsExpanded}>
						<ExpandIcon />
					</IconButton>
				)}
			>
				<Stack
					direction="row"
					flexGrow={1}
					pr={6}
					spacing={1}
				>
					<Typography
						alignSelf="center"
						flexGrow={1}
						variant="h6"
					>
						{app.name}
					</Typography>

					<PlaySummary playStore={app.playStore} />
					<OSSSummary isOSS={app.isOSS} />
					<PrivacySummary privacyAudit={app.privacyAudit} />
				</Stack>
			</AccordionSummary>

			<AccordionDetails>
				<Grid container
					columnSpacing={8} rowSpacing={2}
				>
					<Grid item><PlayDetails playStore={app.playStore} /></Grid>
					<Grid item><OSSDetails isOSS={app.isOSS} /></Grid>
					<Grid item><PrivacyDetails privacyAudit={app.privacyAudit} /></Grid>
				</Grid>
			</AccordionDetails>
		</Accordion>
	);
};
