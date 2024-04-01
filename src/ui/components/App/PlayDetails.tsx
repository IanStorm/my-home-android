import { Link, Stack } from "@mui/material";
import type { FunctionComponent } from "react";

import type { App } from "../../contexts";
import { LabeledValue } from "./LabeledValue";

interface Props {
	readonly playStore: App["playStore"]
}

export const PlayDetails: FunctionComponent<Props> = ({ playStore }) => {
	return (
		<LabeledValue
			label="Is available on Google Play?"
			value={playStore ? (
				<Stack direction="column">
					<Link
						href={playStore.href}
						target="_blank"
					>
						{playStore.href}
					</Link>
				</Stack>
			) : "No."}
		/>
	);
};
