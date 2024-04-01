import type { App } from "../model";

const audioRecorder: App = {
	isOSS: {
		host: "GitLab",
		owner: "axet",
		repository: "android-audio-recorder",
	},
	name: "Audio Recorder",
	playStoreID: "com.github.axet.audiorecorder",
};

const ausweisApp: App = {
	isOSS: {
		host: "GitHub",
		owner: "Governikus",
		repository: "AusweisApp2",
	},
	name: "AusweisApp",
	playStoreID: "com.governikus.ausweisapp2",
};

const bahnBonus: App = {
	name: "BahnBonus",
	playStoreID: "com.deutschebahn.bahnbonus",
};

const butenUnBinnen: App = {
	isOSS: false,
	name: "buten un binnen",
	playStoreID: "de.butenunbinnen.app",
};

const fairphoneCamera: App = {
	isOSS: false,
	name: "(Fairphone) Camera",
	playStoreID: false,
};

export const apps = {
	audioRecorder,
	ausweisApp,
	bahnBonus,
	butenUnBinnen,
	fairphoneCamera,
} satisfies Record<string, App>;
