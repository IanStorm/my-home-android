import { Grid } from "@mui/material";
import type { FunctionComponent } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Device } from "../../components";
import { useDevices } from "../../contexts";
import type { Path } from "../../utils/routes";

export const Devices: FunctionComponent = () => {
	const { devices } = useDevices();
	const navigate = useNavigate();

	useEffect(() => {
		if (!devices) navigate("/" satisfies Path);
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
