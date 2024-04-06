import type { FunctionComponent } from "react";
import { useEffect } from "react";
import {
	useNavigate,
	useParams,
} from "react-router-dom";

import { PagedApps } from "../../components";
import { useDevices } from "../../contexts";
import type {
	DeviceIDParams,
	Path,
} from "../../utils/routes";

export const DeviceID: FunctionComponent = () => {
	const navigate = useNavigate();
	const { deviceID } = useParams<DeviceIDParams>();
	const { devices } = useDevices();

	const device = devices?.find((d) => d.id === deviceID);

	useEffect(() => {
		if (!device) navigate("/devices" satisfies Path);
	}, []);

	if (!device) return <></>;
	else return (
		<PagedApps apps={Object.freeze(device.apps.map((da) => da.app))} />
	);
};
