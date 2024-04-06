import type { App } from "../model";

const audioRecorder: App = {
	isOSS: {
		host: "GitLab",
		owner: "axet",
		repository: "android-audio-recorder",
	},
	name: "Audio Recorder",
	playStoreID: "com.github.axet.audiorecorder",
	privacyAudit: {
		permissionCount: 10,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "fine",
		reportID: "262975",
		trackerCount: 0,
		trackersRating: "fine",
	},
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
	privacyAudit: {
		permissionCount: 7,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "314445",
		trackerCount: 1,
		trackersRating: "warning",
	},
};

const chefkoch: App = {
	name: "Chefkoch",
	playStoreID: "de.pixelhouse",
	privacyAudit: {
		permissionCount: 14,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "danger",
		reportID: "411412",
		trackerCount: 11,
		trackersRating: "danger",
	},
};

const fairphoneCamera: App = {
	id: "fairphone-camera",
	isOSS: false,
	name: "(Fairphone) Camera",
	playStoreID: false,
};

export const apps = {
	audioRecorder,
	ausweisApp,
	bahnBonus,
	butenUnBinnen,
	chefkoch,
	fairphoneCamera,
} satisfies Record<string, App>;
