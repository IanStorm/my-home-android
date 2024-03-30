import type { App } from "../model";

const audioRecorder: App = {
	isOSS: {
		host: "GitLab",
		owner: "axet",
		repository: "android-audio-recorder",
	},
	name: "Audio Recorder",
};

const ausweisApp: App = {
	isOSS: {
		host: "GitHub",
		owner: "Governikus",
		repository: "AusweisApp2",
	},
	name: "AusweisApp",
};

const bahnBonus: App = {
	name: "BahnBonus",
};

const butenUnBinnen: App = {
	isOSS: false,
	name: "buten un binnen",
};

export const apps = {
	audioRecorder,
	ausweisApp,
	bahnBonus,
	butenUnBinnen,
} satisfies Record<string, App>;
