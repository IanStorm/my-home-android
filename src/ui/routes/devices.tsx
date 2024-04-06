import type { FunctionComponent } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDevices } from "../contexts";
import type { Path } from "../utils/routes";

export const Devices: FunctionComponent = () => {
	const { devices } = useDevices();
	const navigate = useNavigate();

	useEffect(() => {
		if (!devices) navigate("/" satisfies Path);
	}, []);

	return (
		<>TODO: Devices</>
	);
};
