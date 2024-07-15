import type { FunctionComponent } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import type { Path } from "../utils/routes";

export const Root: FunctionComponent = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/devices" satisfies Path);
	}, []);

	return (
		<></>
	);
};
