import type { App } from "../model";

const androidFiles: App = {
	id: "android-files",
	name: "Files",
	playStoreID: false,
};

const androidSettings: App = {
	id: "android-settings",
	isOSS: false,
	name: "Settings",
	playStoreID: false,
};

const androidSimToolkit: App = {
	id: "android-sim-toolkit",
	name: "SIM Toolkit",
	playStoreID: false,
};

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

const bing: App = {
	name: "Bing",
	playStoreID: "com.microsoft.bing",
};

const bitwarden: App = {
	isOSS: {
		host: "GitHub",
		owner: "bitwarden",
		repository: "mobile",
	},
	name: "Bitwarden",
	playStoreID: "com.x8bit.bitwarden",
};

const bob: App = {
	name: "BSAG BOB",
	playStoreID: "com.initka.android.bobapp",
};

const booking: App = {
	name: "Booking.com",
	playStoreID: "com.booking",
};

const bsagFahrPlaner: App = {
	isOSS: false,
	name: "BSAG FahrPlaner",
	playStoreID: "de.hafas.android.vbn",
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

const calculator: App = {
	isOSS: false,
	name: "Calculator",
	playStoreID: "com.google.android.calculator",
};

const cambio: App = {
	isOSS: false,
	name: "Cambio",
	playStoreID: "de.cambio.app",
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

const clock: App = {
	isOSS: false,
	name: "Clock",
	playStoreID: "com.google.android.deskclock",
	privacyAudit: {
		permissionCount: 21,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "420139",
		trackerCount: 1,
		trackersRating: "warning",
	},
};

const coronaWarnApp: App = {
	isOSS: {
		host: "GitHub",
		owner: "corona-warn-app",
		repository: "cwa-app-android",
	},
	name: "Corona-Warn-App",
	playStoreID: "de.rki.coronawarnapp",
};

const counterUX: App = {
	name: "Counter UX",
	playStoreID: "ru.uxapps.counter",
};

const cryptomator: App = {
	isOSS: {
		host: "GitHub",
		owner: "cryptomator",
		repository: "android",
	},
	name: "Cryptomator",
	playStoreID: "org.cryptomator",
};

const dbNavigator: App = {
	isOSS: false,
	name: "DB Navigator",
	playStoreID: "de.hafas.android.db",
};

const dictCC: App = {
	name: "dict.cc",
	playStoreID: "cc.dict.dictcc",
};

const digitalWellbeing: App = {
	isOSS: false,
	name: "Digital Wellbeing",
	playStoreID: "com.google.android.apps.wellbeing",
};

const easyroam: App = {
	isOSS: false,
	name: "easyroam",
	playStoreID: "de.dfn.easyroam",
	privacyAudit: undefined,
};

const eurowings: App = {
	isOSS: false,
	name: "Eurowings",
	playStoreID: "com.germanwings.android",
	privacyAudit: {
		permissionCount: 18,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "313132",
		trackerCount: 2,
		trackersRating: "warning",
	},
};

const exodus: App = {
	isOSS: {
		host: "GitHub",
		owner: "Exodus-Privacy",
		repository: "exodus-android-app",
	},
	name: "Exodus",
	playStoreID: "org.eu.exodus_privacy.exodusprivacy",
};

const fairphoneCamera: App = {
	id: "fairphone-camera",
	isOSS: false,
	name: "(Fairphone) Camera",
	playStoreID: false,
};

const feedly: App = {
	name: "Feedly",
	playStoreID: "com.devhd.feedly",
};

const fitbit: App = {
	isOSS: false,
	name: "Fitbit",
	playStoreID: "com.fitbit.FitbitMobile",
};

const flightLite: App = {
	name: "Flight Lite",
	playStoreID: "com.natewren.flightlite",
};

const fullyKioskBrowser: App = {
	name: "Fully Kiosk Browser",
	playStoreID: "de.ozerov.fully",
};

const gardenscapes: App = {
	isOSS: false,
	name: "Gardenscapes",
	playStoreID: "com.playrix.gardenscapes",
	privacyAudit: {
		permissionCount: 12,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "danger",
		reportID: "317449",
		trackerCount: 11,
		trackersRating: "danger",
	},
};

const gmail: App = {
	name: "Gmail",
	playStoreID: "com.google.android.gm",
};

const google: App = {
	name: "Google",
	playStoreID: "com.google.android.googlequicksearchbox",
};

const googleCalendar: App = {
	isOSS: false,
	name: "Google Calendar",
	playStoreID: "com.google.android.calendar",
};

const googleContacts: App = {
	isOSS: false,
	name: "(Google) Contacts",
	playStoreID: "com.google.android.contacts",
};

const googleDialer: App = {
	isOSS: false,
	name: "Phone by Google",
	playStoreID: "com.google.android.dialer",
	privacyAudit: {
		permissionCount: 82,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "409396",
		trackerCount: 1,
		trackersRating: "warning",
	},
};

const googleMaps: App = {
	name: "Google Maps",
	playStoreID: "com.google.android.apps.maps",
};

const googleMessages: App = {
	name: "Google Messages",
	playStoreID: "com.google.android.apps.messaging",
};

const googlePhotos: App = {
	isOSS: false,
	name: "Google Photos",
	playStoreID: "com.google.android.apps.photos",
};

const googlePlayGames: App = {
	isOSS: false,
	name: "Google Play Games",
	playStoreID: "com.google.android.play.games",
};

const googlePlayStore: App = {
	id: "google-play-store",
	isOSS: false,
	name: "Google Play Store",
	playStoreID: false,
};

const googleWallet: App = {
	name: "Google Wallet",
	playStoreID: "com.google.android.apps.walletnfcrel",
};

const heavensAbove: App = {
	isOSS: false,
	name: "Heavens-Above",
	playStoreID: "com.heavens_above.viewer",
	privacyAudit: {
		permissionCount: 10,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "261873",
		trackerCount: 2,
		trackersRating: "warning",
	},
};

const homescapes: App = {
	isOSS: false,
	name: "Homescapes",
	playStoreID: "com.playrix.homescapes",
	privacyAudit: {
		permissionCount: 12,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "danger",
		reportID: "297618",
		trackerCount: 11,
		trackersRating: "danger",
	},
};

const immoScout24: App = {
	name: "ImmoScout24",
	playStoreID: "de.is24.android",
};

const ingBaking: App = {
	isOSS: false,
	name: "ING Banking",
	playStoreID: "de.ingdiba.bankingapp",
	privacyAudit: {
		permissionCount: 17,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "341382",
		trackerCount: 2,
		trackersRating: "warning",
	},
};

const katwarn: App = {
	name: "KATWARN",
	playStoreID: "de.combirisk.katwarn",
};

const kicker: App = {
	name: "kicker",
	playStoreID: "com.netbiscuits.kicker",
};

const komoot: App = {
	isOSS: false,
	name: "komoot",
	playStoreID: "de.komoot.android",
	privacyAudit: {
		permissionCount: 29,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "danger",
		reportID: "364717",
		trackerCount: 7,
		trackersRating: "danger",
	},
};

const linkToWindows: App = {
	name: "Link to Windows",
	playStoreID: "com.microsoft.appmanager",
};

const meinMagenta: App = {
	name: "MeinMagenta",
	playStoreID: "de.telekom.android.customercenter",
};

const meinePegel: App = {
	isOSS: false,
	name: "Meine Pegel",
	playStoreID: "de.hochwasserzentralen.app",
};

const mensaBremen: App = {
	isOSS: false,
	name: "Mensa Bremen",
	playStoreID: "de.mensaplan.app.android.bremen",
	privacyAudit: {
		permissionCount: 5,
		permissionsRating: "warning",
		platform: "Exodus",
		rating: "warning",
		reportID: "337841",
		trackerCount: 2,
		trackersRating: "warning",
	},
};

const microsoftEdge: App = {
	isOSS: undefined,
	name: "Microsoft Edge",
	playStoreID: "com.microsoft.emmx",
};

const microsoftExcel: App = {
	isOSS: false,
	name: "Microsoft Excel",
	playStoreID: "com.microsoft.office.excel",
	privacyAudit: {
		permissionCount: 23,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "298778",
		trackerCount: 3,
		trackersRating: "warning",
	},
};

const microsoftLens: App = {
	name: "Microsoft Lens",
	playStoreID: "com.microsoft.office.officelens",
};

const microsoftOneDrive: App = {
	isOSS: false,
	name: "Microsoft OneDrive",
	playStoreID: "com.microsoft.skydrive",
};

const microsoftOneNote: App = {
	isOSS: false,
	name: "Microsoft OneNote",
	playStoreID: "com.microsoft.office.onenote",
};

const microsoftOutlook: App = {
	isOSS: false,
	name: "Microsoft Outlook",
	playStoreID: "com.microsoft.office.outlook",
};

const microsoftPowerPoint: App = {
	name: "Microsoft PowerPoint",
	playStoreID: "com.microsoft.office.powerpoint",
};

const microsoftSwiftKey: App = {
	name: "Microsoft SwiftKey Keyboard",
	playStoreID: "com.touchtype.swiftkey",
};

const microsoftToDo: App = {
	name: "Microsoft To Do",
	playStoreID: "com.microsoft.todos",
};

const microsoftWord: App = {
	name: "Microsoft Word",
	playStoreID: "com.microsoft.office.word",
};

const mozillaFirefox: App = {
	isOSS: {
		host: "GitHub",
		owner: "mozilla-mobile",
		repository: "firefox-android",
	},
	name: "Mozilla Firefox",
	playStoreID: "org.mozilla.firefox",
};

const myFairphone: App = {
	name: "My Fairphone",
	playStoreID: "com.fairphone.myfairphone",
};

const netflix: App = {
	isOSS: false,
	name: "Netflix",
	playStoreID: "com.netflix.mediaclient",
};

const nfcTools: App = {
	isOSS: false,
	name: "NFC Tools",
	playStoreID: "com.wakdev.wdnfc",
};

const nina: App = {
	name: "NINA",
	playStoreID: "de.materna.bbk.mobile.app",
};

const oralB: App = {
	isOSS: false,
	name: "Oral-B",
	playStoreID: "com.pg.oralb.oralbapp",
};

const parcello: App = {
	name: "Parcello",
	playStoreID: "org.parcello",
	privacyAudit: {
		permissionCount: 28,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "danger",
		reportID: "245040",
		trackerCount: 8,
		trackersRating: "danger",
	},
};

const parsec: App = {
	name: "Parsec",
	playStoreID: "tv.parsec.client",
};

const passAndroid: App = {
	isOSS: {
		host: "GitHub",
		owner: "ligi",
		repository: "PassAndroid",
	},
	name: "PassAndroid",
	playStoreID: "org.ligi.passandroid",
	privacyAudit: {
		permissionCount: 7,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "42644",
		trackerCount: 2,
		trackersRating: "warning",
	},
};

const postUndDHL: App = {
	isOSS: false,
	name: "Post & DHL",
	playStoreID: "de.dhl.paket",
};

const qrScanner: App = {
	name: "QR Scanner",
	playStoreID: "com.teacapps.barcodescanner",
	privacyAudit: {
		permissionCount: 17,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "335059",
		trackerCount: 3,
		trackersRating: "warning",
	},
};

const reddit: App = {
	name: "Reddit",
	playStoreID: "com.reddit.frontpage",
};

const rewe: App = {
	name: "REWE",
	playStoreID: "de.rewe.app.mobile",
};

const safeVac: App = {
	name: "SafeVac",
	playStoreID: "de.pei.safevac",
};

const shareToClipboard: App = {
	isOSS: {
		host: "GitHub",
		owner: "tengusw",
		repository: "share_to_clipboard",
	},
	name: "Share to Clipboard",
	playStoreID: "com.tengu.sharetoclipboard",
	privacyAudit: {
		permissionCount: 0,
		permissionsRating: "fine",
		platform: "Exodus",
		rating: "fine",
		reportID: "270640",
		trackerCount: 0,
		trackersRating: "fine",
	},
};

const signal: App = {
	isOSS: {
		host: "GitHub",
		owner: "signalapp",
		repository: "Signal-Android",
	},
	name: "Signal",
	playStoreID: "org.thoughtcrime.securesms",
	privacyAudit: {
		permissionCount: 69,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "fine",
		reportID: "334996",
		trackerCount: 0,
		trackersRating: "fine",
	},
};

const sportschau: App = {
	name: "Sportschau",
	playStoreID: "de.apptelligence.sportschau.android",
};

const spotify: App = {
	isOSS: false,
	name: "Spotify",
	playStoreID: "com.spotify.music",
};

const squareHome: App = {
	name: "Square Home",
	playStoreID: "com.ss.squarehome2",
};
const squareHomeKey: App = {
	name: "Square Home Key",
	playStoreID: "com.ss.squarehome.key",
};

const steam: App = {
	name: "Steam",
	playStoreID: "com.valvesoftware.android.steam.community",
};

const svWerder: App = {
	name: "SV Werder",
	playStoreID: "de.werder.werderbremen",
};

const swapfiets: App = {
	name: "Swapfiets",
	playStoreID: "com.swapfiets",
};

const tagesschau: App = {
	name: "Tagesschau",
	playStoreID: "de.tagesschau",
};

const threema: App = {
	isOSS: {
		host: "GitHub",
		owner: "threema-ch",
		repository: "threema-android",
	},
	name: "Threema",
	playStoreID: "ch.threema.app",
	privacyAudit: undefined,
};

const tiltification: App = {
	name: "Tiltification",
	playStoreID: "de.uni_bremen.informatik.sonification_apps",
};

const tooGoodToGo: App = {
	name: "Too Good To Go",
	playStoreID: "com.app.tgtg",
};

const transfermarkt: App = {
	isOSS: false,
	name: "Transfermarkt",
	playStoreID: "de.transfermarkt.v2",
};

const warnWetter: App = {
	name: "WarnWetter",
	playStoreID: "de.dwd.warnapp",
};

const whatsApp: App = {
	isOSS: false,
	name: "WhatsApp",
	playStoreID: "com.whatsapp",
};

const youTube: App = {
	name: "YouTube",
	playStoreID: "com.google.android.youtube",
};

export const apps = {
	androidFiles,
	androidSettings,
	androidSimToolkit,
	audioRecorder,
	ausweisApp,
	bahnBonus,
	bing,
	bitwarden,
	bob,
	booking,
	bsagFahrPlaner,
	butenUnBinnen,
	calculator,
	cambio,
	chefkoch,
	clock,
	coronaWarnApp,
	counterUX,
	cryptomator,
	dbNavigator,
	dictCC,
	digitalWellbeing,
	easyroam,
	eurowings,
	exodus,
	fairphoneCamera,
	feedly,
	fitbit,
	flightLite,
	fullyKioskBrowser,
	gardenscapes,
	gmail,
	google,
	googleCalendar,
	googleContacts,
	googleDialer,
	googleMaps,
	googleMessages,
	googlePhotos,
	googlePlayGames,
	googlePlayStore,
	googleWallet,
	heavensAbove,
	homescapes,
	immoScout24,
	ingBaking,
	katwarn,
	kicker,
	komoot,
	linkToWindows,
	meinMagenta,
	meinePegel,
	mensaBremen,
	microsoftEdge,
	microsoftExcel,
	microsoftLens,
	microsoftOneDrive,
	microsoftOneNote,
	microsoftOutlook,
	microsoftPowerPoint,
	microsoftSwiftKey,
	microsoftToDo,
	microsoftWord,
	mozillaFirefox,
	myFairphone,
	netflix,
	nfcTools,
	nina,
	oralB,
	parcello,
	parsec,
	passAndroid,
	postUndDHL,
	qrScanner,
	reddit,
	rewe,
	safeVac,
	shareToClipboard,
	signal,
	sportschau,
	spotify,
	squareHome,
	squareHomeKey,
	steam,
	svWerder,
	swapfiets,
	tagesschau,
	threema,
	tiltification,
	tooGoodToGo,
	transfermarkt,
	warnWetter,
	whatsApp,
	youTube,
} satisfies Record<string, App>;
