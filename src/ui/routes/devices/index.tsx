import { Grid } from "@mui/material";
import type { FunctionComponent } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Device } from "../../components";
import {
	useDevices,
	useHint,
} from "../../contexts";
import type { Path } from "../../utils/routes";

export const Devices: FunctionComponent = () => {
	const { devices } = useDevices();
	const { setHint } = useHint();
	const navigate = useNavigate();

	useEffect(() => {
		if (!devices) {
			setHint({
				msg: "Devices couldn't be loaded, please try again later. If this issue persists, contact your admin.",
				severity: "error",
			});
			navigate("/" satisfies Path);
		}
	}, []);

	if (!devices) return <></>;
	else return (
		<Grid container
			spacing={6}
		>
			{devices.map((device) => (
				<Grid item
					key={device.id}
				>
					<Device device={device} />
				</Grid>
			))}
		</Grid>
	);
};
