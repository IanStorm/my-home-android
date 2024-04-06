import type { App } from "./app";

type DeviceID = Lowercase<string>

export interface AppOnDevice {
	readonly app: App
	readonly isPreinstalled: boolean
}

export interface Device {
	readonly apps: ReadonlyArray<AppOnDevice>
	readonly id: DeviceID
	readonly name: string
	readonly type: DeviceType
}

type DeviceType =
	| "phone"
	| "tablet"
;
