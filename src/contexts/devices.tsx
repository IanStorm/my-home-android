import React from "react";

interface Device {
	// TODO:
}

interface DevicesStore {
	readonly devices?: ReadonlyArray<Device>
}

const DevicesContext = React.createContext<DevicesStore>({});

export const useDevices = () => React.useContext(DevicesContext);

export const DevicesProvider: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
	const devices: DevicesStore["devices"] = [];

	return (
		<DevicesContext.Provider value={{ devices }}>
			{children}
		</DevicesContext.Provider>
	);
};
