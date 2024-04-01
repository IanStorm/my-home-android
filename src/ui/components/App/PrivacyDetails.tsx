import {
	Link,
	Stack,
} from "@mui/material";
import type { FunctionComponent } from "react";

import type { App } from "../../contexts";
import { LabeledValue } from "./LabeledValue";

interface Props {
	readonly privacyAudit: App["privacyAudit"]
}

export const PrivacyDetails: FunctionComponent<Props> = ({ privacyAudit }) => {
	return (
		<LabeledValue
			label="Privacy audit:"
			value={
				privacyAudit
					? (
						<Stack direction="column">
							<LabeledValue size="small" label="Permissions:" value={privacyAudit.permissionCount} />
							<LabeledValue size="small" label="Trackers:" value={privacyAudit.trackerCount} />
							<LabeledValue size="small" label="Rating:" value={privacyAudit.rating} />
							<Link
								href={privacyAudit.href}
								target="_blank"
							>
								{privacyAudit.href}
							</Link>
						</Stack>
					) : "None available"
			}
		/>
	);
};
