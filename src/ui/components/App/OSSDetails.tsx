import {
	Link,
	Stack,
	Typography,
} from "@mui/material";
import type { FunctionComponent } from "react";

import type { App } from "../../contexts";

interface Props {
	readonly isOSS: App["isOSS"]
}

export const OSSDetails: FunctionComponent<Props> = ({ isOSS }) => {
	return (
		<Stack direction="column">
			<Typography variant="subtitle1">
				Is open source?
			</Typography>

			<Typography variant="body2">
				{isOSS === false ? "No." : <></>}
				{isOSS === undefined ? "Unknown." : <></>}
				{typeof isOSS === "object" ? (
					<Link
						href={isOSS.href}
						target="_blank"
					>
						{isOSS.href}
					</Link>
				) : <></>}
			</Typography>
		</Stack>
	);
};
