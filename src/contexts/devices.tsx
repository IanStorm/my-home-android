import type {
	FunctionComponent,
	PropsWithChildren,
} from "react";
import {
	createContext,
	useContext,
} from "react";

interface Device {
	// TODO:
}

interface DevicesStore {
	readonly devices?: ReadonlyArray<Device>
}

const DevicesContext = createContext<DevicesStore>({});

export const useDevices = () => useContext(DevicesContext);

export const DevicesProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
	const devices: DevicesStore["devices"] = [];

	return (
		<DevicesContext.Provider value={{ devices }}>
			{children}
		</DevicesContext.Provider>
	);
};
