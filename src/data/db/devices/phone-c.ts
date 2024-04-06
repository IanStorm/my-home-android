import type { Device } from "../../model";
import { apps } from "../apps";

export const phoneC: Device = {
	apps: [
		{ app: apps.audioRecorder, isPreinstalled: false },
		{ app: apps.ausweisApp, isPreinstalled: false },
		{ app: apps.bahnBonus, isPreinstalled: false },
		{ app: apps.fairphoneCamera, isPreinstalled: true },
	],
	id: "phone-c",
	name: "Phone C",
	type: "phone",
};
