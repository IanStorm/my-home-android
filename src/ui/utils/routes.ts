export type DeviceIDParams = "deviceID"

export type Path =
	| "/"
	| "/apps"
	| "/devices"
	| `/devices/:${DeviceIDParams}`
;
