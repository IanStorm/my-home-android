import type {
	FunctionComponent,
	PropsWithChildren,
} from "react";
import {
	createContext,
	useContext,
} from "react";

import * as data from "../../data/db";
import type * as model from "../../data/model";
import type{ App } from "./apps";
import { useApps } from "./apps";

export type AppOnDevice =
	& Pick<model.AppOnDevice,
		| "isPreinstalled"
	> & {
		readonly app: App
	}
;

export type Device =
	& Pick<model.Device,
		| "id"
		| "name"
		| "type"
	> & {
		readonly apps: ReadonlyArray<AppOnDevice>
	}
;

interface DevicesStore {
	readonly devices?: ReadonlyArray<Device>
}

const DevicesContext = createContext<DevicesStore>({});

export const useDevices = () => useContext(DevicesContext);

export const DevicesProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
	const { apps } = useApps();

	const devices: DevicesStore["devices"] = Object.values(data.devices).map((device) => {
		const deviceApps: Device["apps"] = device.apps.flatMap((da) => {
			let app: AppOnDevice["app"] | undefined;
			if (da.app.playStoreID !== false) app = apps?.filter((a) => a.playStore?.id === da.app.playStoreID).at(0);
			else { da.app.playStoreID satisfies false;
				const id = da.app.id;
				app = apps?.filter((a) => a.id === id).at(0);
			}

			if (!app) return []; // 👈 https://stackoverflow.com/a/55260552/6694769
			else return {
				app,
				isPreinstalled: da.isPreinstalled,
			};
		});

		return {
			apps: deviceApps,
			id: device.id,
			name: device.name,
			type: device.type,
		};
	});

	return (
		<DevicesContext.Provider value={{ devices }}>
			{children}
		</DevicesContext.Provider>
	);
};
