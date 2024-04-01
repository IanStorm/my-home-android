import { Link } from "@mui/material";
import type { FunctionComponent } from "react";

import type { App } from "../../contexts";
import { LabeledValue } from "./LabeledValue";

interface Props {
	readonly isOSS: App["isOSS"]
}

export const OSSDetails: FunctionComponent<Props> = ({ isOSS }) => {
	return (
		<LabeledValue
			label="Is open source?"
			value={isOSS === false
				? "No."
				: isOSS === undefined
					? "Unknown."
					: (
						<Link
							href={isOSS.href}
							target="_blank"
						>
							{isOSS.href}
						</Link>
					)
			}
		/>
	);
};
