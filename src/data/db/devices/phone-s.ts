import type { Device } from "../../model";
import { apps } from "../apps";

export const phoneS: Device = {
	apps: [
		{ app: apps.ausweisApp, isPreinstalled: false },
		{ app: apps.butenUnBinnen, isPreinstalled: false },
		{ app: apps.chefkoch, isPreinstalled: false },
		{ app: apps.fairphoneCamera, isPreinstalled: true },
	],
	id: "phone-s",
	name: "Phone S",
	type: "phone",
};
