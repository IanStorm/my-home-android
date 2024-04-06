import {
	Card,
	CardActionArea,
	CardContent,
	CardHeader,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import type { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import type { Device as UIDevice } from "../../contexts";
import {
	AppsIcon,
	DeviceTypePhoneIcon,
	DeviceTypeTabletIcon,
} from "../../icons";
import type { Path } from "../../utils/routes";
import { OSSSummary } from "./OSSSummary";
import { PrivacySummary } from "./PrivacySummary";

interface Props {
	readonly device: UIDevice
}

export const Device: FunctionComponent<Props> = ({ device }) => {
	const apps = device.apps.map(({ app }) => app);

	return (
		<Card>
			<CardActionArea
				component={Link}
				to={("/devices/:deviceID" satisfies Path).replace(":deviceID", device.id)}
			>
				<CardHeader
					avatar={device.type === "phone" ? <DeviceTypePhoneIcon /> : <DeviceTypeTabletIcon />}
					title={device.name}
				/>

				<CardContent>
					<Grid container
						justifyContent="center"
						spacing={2}
						width={250}
					>
						<Grid item>
							<Stack
								direction="row"
								spacing={.5}
							>
								<AppsIcon />
								<Typography>{device.apps.length}</Typography>
							</Stack>
						</Grid>

						<Grid item>
							<OSSSummary apps={apps} />
						</Grid>

						<Grid item>
							<PrivacySummary apps={apps} />
						</Grid>
					</Grid>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};
