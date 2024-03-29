import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useApps } from "../contexts";
import type { Path } from "../utils/routes";

export const Apps: React.FunctionComponent = () => {
	const { apps } = useApps();
	const navigate = useNavigate();

	useEffect(() => {
		if (!apps) navigate("/" satisfies Path);
	}, []);

	return (
		<>TODO: Apps</>
	);
};
