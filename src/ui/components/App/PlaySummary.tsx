import type { FunctionComponent } from "react";

import { IconButton } from "../../components";
import type { App } from "../../contexts";
import {
	PlayStoreActiveIcon,
	PlayStoreInactiveIcon,
} from "../../icons";

interface Props {
	readonly playStore: App["playStore"]
}

export const PlaySummary: FunctionComponent<Props> = ({ playStore }) => {
	return (
		<IconButton
			href={playStore ? playStore.href : ""}
			isDisabled={!playStore}
			target="_blank"
			tooltip={`${playStore ? "A" : "Not a"}vailable on Google Play`}
		>
			{
				playStore
					? <PlayStoreActiveIcon />
					: <PlayStoreInactiveIcon color="disabled" />
			}
		</IconButton>
	);
};
