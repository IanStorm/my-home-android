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
	privacyAudit: {
		permissionCount: 39,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "420449",
		trackerCount: 4,
		trackersRating: "warning",
	},
};

const bitwarden: App = {
	isOSS: {
		host: "GitHub",
		owner: "bitwarden",
		repository: "mobile",
	},
	name: "Bitwarden",
	playStoreID: "com.x8bit.bitwarden",
	privacyAudit: {
		permissionCount: 14,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "420461",
		trackerCount: 2,
		trackersRating: "warning",
	},
};

const bob: App = {
	name: "BSAG BOB",
	playStoreID: "com.initka.android.bobapp",
	privacyAudit: {
		permissionCount: 5,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "fine",
		reportID: "195054",
		trackerCount: 0,
		trackersRating: "fine",
	},
};

const booking: App = {
	name: "Booking.com",
	playStoreID: "com.booking",
	privacyAudit: {
		permissionCount: 34,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "danger",
		reportID: "329018",
		trackerCount: 6,
		trackersRating: "danger",
	},
};

const bsagFahrPlaner: App = {
	isOSS: false,
	name: "BSAG FahrPlaner",
	playStoreID: "de.hafas.android.vbn",
	privacyAudit: {
		permissionCount: 18,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "422461",
		trackerCount: 3,
		trackersRating: "warning",
	},
};

const butenUnBinnen: App = {
	isOSS: false,
	name: "buten un binnen",
	playStoreID: "de.butenunbinnen.app",
	privacyAudit: {
		permissionCount: 7,
		permissionsRating: "warning",
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
	privacyAudit: {
		permissionCount: 6,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "422633",
		trackerCount: 1,
		trackersRating: "warning",
	},
};

const cambio: App = {
	isOSS: false,
	name: "Cambio",
	playStoreID: "de.cambio.app",
	privacyAudit: {
		permissionCount: 6,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "fine",
		reportID: "423236",
		trackerCount: 0,
		trackersRating: "fine",
	},
};

const chefkoch: App = {
	name: "Chefkoch",
	playStoreID: "de.pixelhouse",
	privacyAudit: {
		permissionCount: 14,
		permissionsRating: "warning",
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
	privacyAudit: {
		permissionCount: 9,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "danger",
		reportID: "362751",
		trackerCount: 0,
		trackersRating: "fine",
	},
};

const counterUX: App = {
	isOSS: false,
	name: "Counter UX",
	playStoreID: "ru.uxapps.counter",
	privacyAudit: {
		permissionCount: 10,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "362083",
		trackerCount: 4,
		trackersRating: "warning",
	},
};

const cryptomator: App = {
	isOSS: {
		host: "GitHub",
		owner: "cryptomator",
		repository: "android",
	},
	name: "Cryptomator",
	playStoreID: "org.cryptomator",
	privacyAudit: undefined,
};

const dbNavigator: App = {
	isOSS: false,
	name: "DB Navigator",
	playStoreID: "de.hafas.android.db",
	privacyAudit: {
		permissionCount: 22,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "danger",
		reportID: "421714",
		trackerCount: 5,
		trackersRating: "danger",
	},
};

const dictCC: App = {
	isOSS: false,
	name: "dict.cc",
	playStoreID: "cc.dict.dictcc",
	privacyAudit: {
		permissionCount: 10,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "399275",
		trackerCount: 2,
		trackersRating: "warning",
	},
};

const digitalWellbeing: App = {
	isOSS: false,
	name: "Digital Wellbeing",
	playStoreID: "com.google.android.apps.wellbeing",
	privacyAudit: undefined,
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
	privacyAudit: {
		permissionCount: 5,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "fine",
		reportID: "397556",
		trackerCount: 0,
		trackersRating: "fine",
	},
};

const fairphoneCamera: App = {
	id: "fairphone-camera",
	isOSS: false,
	name: "(Fairphone) Camera",
	playStoreID: false,
};

const feedly: App = {
	isOSS: false,
	name: "Feedly",
	playStoreID: "com.devhd.feedly",
	privacyAudit: {
		permissionCount: 5,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "fine",
		reportID: "397133",
		trackerCount: 0,
		trackersRating: "fine",
	},
};

const fitbit: App = {
	isOSS: false,
	name: "Fitbit",
	playStoreID: "com.fitbit.FitbitMobile",
	privacyAudit: {
		permissionCount: 50,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "353860",
		trackerCount: 3,
		trackersRating: "warning",
	},
};

const flightLite: App = {
	isOSS: false,
	name: "Flight Lite",
	playStoreID: "com.natewren.flightlite",
	privacyAudit: {
		permissionCount: 12,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "danger",
		reportID: "85064",
		trackerCount: 5,
		trackersRating: "danger",
	},
};

const fullyKioskBrowser: App = {
	isOSS: false,
	name: "Fully Kiosk Browser",
	playStoreID: "de.ozerov.fully",
	privacyAudit: {
		permissionCount: 45,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "160757",
		trackerCount: 2,
		trackersRating: "warning",
	},
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
	isOSS: false,
	name: "Gmail",
	playStoreID: "com.google.android.gm",
	privacyAudit: {
		permissionCount: 70,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "fine",
		reportID: "424367",
		trackerCount: 0,
		trackersRating: "fine",
	},
};

const google: App = {
	isOSS: false,
	name: "Google",
	playStoreID: "com.google.android.googlequicksearchbox",
	privacyAudit: {
		permissionCount: 117,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "346840",
		trackerCount: 3,
		trackersRating: "warning",
	},
};

const googleCalendar: App = {
	isOSS: false,
	name: "Google Calendar",
	playStoreID: "com.google.android.calendar",
	privacyAudit: {
		permissionCount: 28,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "fine",
		reportID: "423664",
		trackerCount: 0,
		trackersRating: "fine",
	},
};

const googleContacts: App = {
	isOSS: false,
	name: "(Google) Contacts",
	playStoreID: "com.google.android.contacts",
	privacyAudit: {
		permissionCount: 29,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "fine",
		reportID: "421727",
		trackerCount: 0,
		trackersRating: "fine",
	},
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
	isOSS: false,
	name: "Google Maps",
	playStoreID: "com.google.android.apps.maps",
	privacyAudit: {
		permissionCount: 45,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "423306",
		trackerCount: 1,
		trackersRating: "warning",
	},
};

const googleMessages: App = {
	isOSS: false,
	name: "Google Messages",
	playStoreID: "com.google.android.apps.messaging",
	privacyAudit: {
		permissionCount: 71,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "fine",
		reportID: "424538",
		trackerCount: 0,
		trackersRating: "fine",
	},
};

const googlePhotos: App = {
	isOSS: false,
	name: "Google Photos",
	playStoreID: "com.google.android.apps.photos",
	privacyAudit: {
		permissionCount: 42,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "426603",
		trackerCount: 1,
		trackersRating: "warning",
	},
};

const googlePlayGames: App = {
	isOSS: false,
	name: "Google Play Games",
	playStoreID: "com.google.android.play.games",
	privacyAudit: {
		permissionCount: 18,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "391814",
		trackerCount: 2,
		trackersRating: "warning",
	},
};

const googlePlayStore: App = {
	id: "google-play-store",
	isOSS: false,
	name: "Google Play Store",
	playStoreID: false,
	privacyAudit: undefined,
};

const googleWallet: App = {
	isOSS: false,
	name: "Google Wallet",
	playStoreID: "com.google.android.apps.walletnfcrel",
	privacyAudit: {
		permissionCount: 26,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "424203",
		trackerCount: 2,
		trackersRating: "warning",
	},
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
	isOSS: false,
	name: "ImmoScout24",
	playStoreID: "de.is24.android",
	privacyAudit: {
		permissionCount: 18,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "danger",
		reportID: "335272",
		trackerCount: 14,
		trackersRating: "danger",
	},
};

const ingBanking: App = {
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
	isOSS: false,
	name: "KATWARN",
	playStoreID: "de.combirisk.katwarn",
	privacyAudit: {
		permissionCount: 13,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "401343",
		trackerCount: 1,
		trackersRating: "warning",
	},
};

const kicker: App = {
	isOSS: false,
	name: "kicker",
	playStoreID: "com.netbiscuits.kicker",
	privacyAudit: {
		permissionCount: 17,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "danger",
		reportID: "411357",
		trackerCount: 10,
		trackersRating: "danger",
	},
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
	isOSS: false,
	name: "Link to Windows",
	playStoreID: "com.microsoft.appmanager",
	privacyAudit: {
		permissionCount: 51,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "423043",
		trackerCount: 3,
		trackersRating: "warning",
	},
};

const meinMagenta: App = {
	isOSS: false,
	name: "MeinMagenta",
	playStoreID: "de.telekom.android.customercenter",
	privacyAudit: {
		permissionCount: 39,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "fine",
		reportID: "422293",
		trackerCount: 0,
		trackersRating: "fine",
	},
};

const meinePegel: App = {
	isOSS: false,
	name: "Meine Pegel",
	playStoreID: "de.hochwasserzentralen.app",
	privacyAudit: {
		permissionCount: 31,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "401336",
		trackerCount: 1,
		trackersRating: "warning",
	},
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
	privacyAudit: {
		permissionCount: 44,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "danger",
		reportID: "425479",
		trackerCount: 5,
		trackersRating: "danger",
	},
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
	isOSS: false,
	name: "Microsoft Lens",
	playStoreID: "com.microsoft.office.officelens",
	privacyAudit: {
		permissionCount: 21,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "392986",
		trackerCount: 3,
		trackersRating: "warning",
	},
};

const microsoftOneDrive: App = {
	isOSS: false,
	name: "Microsoft OneDrive",
	playStoreID: "com.microsoft.skydrive",
	privacyAudit: {
		permissionCount: 37,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "422812",
		trackerCount: 2,
		trackersRating: "warning",
	},
};

const microsoftOneNote: App = {
	isOSS: false,
	name: "Microsoft OneNote",
	playStoreID: "com.microsoft.office.onenote",
	privacyAudit: {
		permissionCount: 29,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "284360",
		trackerCount: 2,
		trackersRating: "warning",
	},
};

const microsoftOutlook: App = {
	isOSS: false,
	name: "Microsoft Outlook",
	playStoreID: "com.microsoft.office.outlook",
	privacyAudit: {
		permissionCount: 62,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "danger",
		reportID: "367463",
		trackerCount: 5,
		trackersRating: "danger",
	},
};

const microsoftPowerPoint: App = {
	isOSS: false,
	name: "Microsoft PowerPoint",
	playStoreID: "com.microsoft.office.powerpoint",
	privacyAudit: {
		permissionCount: 27,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "298777",
		trackerCount: 3,
		trackersRating: "warning",
	},
};

const microsoftSwiftKey: App = {
	isOSS: false,
	name: "Microsoft SwiftKey Keyboard",
	playStoreID: "com.touchtype.swiftkey",
	privacyAudit: {
		permissionCount: 27,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "423169",
		trackerCount: 3,
		trackersRating: "warning",
	},
};

const microsoftToDo: App = {
	isOSS: false,
	name: "Microsoft To Do",
	playStoreID: "com.microsoft.todos",
	privacyAudit: {
		permissionCount: 20,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "411108",
		trackerCount: 2,
		trackersRating: "warning",
	},
};

const microsoftWord: App = {
	isOSS: false,
	name: "Microsoft Word",
	playStoreID: "com.microsoft.office.word",
	privacyAudit: {
		permissionCount: 27,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "298775",
		trackerCount: 3,
		trackersRating: "warning",
	},
};

const mozillaFirefox: App = {
	isOSS: {
		host: "GitHub",
		owner: "mozilla-mobile",
		repository: "firefox-android",
	},
	name: "Mozilla Firefox",
	playStoreID: "org.mozilla.firefox",
	privacyAudit: {
		permissionCount: 31,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "423184",
		trackerCount: 4,
		trackersRating: "warning",
	},
};

const myFairphone: App = {
	isOSS: undefined,
	name: "My Fairphone",
	playStoreID: "com.fairphone.myfairphone",
	privacyAudit: undefined,
};

const netflix: App = {
	isOSS: false,
	name: "Netflix",
	playStoreID: "com.netflix.mediaclient",
	privacyAudit: {
		permissionCount: 20,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "426074",
		trackerCount: 2,
		trackersRating: "warning",
	},
};

const nfcTools: App = {
	isOSS: false,
	name: "NFC Tools",
	playStoreID: "com.wakdev.wdnfc",
	privacyAudit: {
		permissionCount: 2,
		permissionsRating: "warning",
		platform: "Exodus",
		rating: "fine",
		reportID: "396692",
		trackerCount: 0,
		trackersRating: "fine",
	},
};

const nina: App = {
	isOSS: false,
	name: "NINA",
	playStoreID: "de.materna.bbk.mobile.app",
	privacyAudit: {
		permissionCount: 15,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "de.materna.bbk.mobile.app",
		trackerCount: 2,
		trackersRating: "warning",
	},
};

const oralB: App = {
	isOSS: false,
	name: "Oral-B",
	playStoreID: "com.pg.oralb.oralbapp",
	privacyAudit: {
		permissionCount: 20,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "danger",
		reportID: "370567",
		trackerCount: 5,
		trackersRating: "danger",
	},
};

const parcello: App = {
	isOSS: false,
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
	isOSS: false,
	name: "Parsec",
	playStoreID: "tv.parsec.client",
	privacyAudit: {
		permissionCount: 3,
		permissionsRating: "warning",
		platform: "Exodus",
		rating: "fine",
		reportID: "297919",
		trackerCount: 0,
		trackersRating: "fine",
	},
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
	privacyAudit: {
		permissionCount: 23,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "424355",
		trackerCount: 3,
		trackersRating: "warning",
	},
};

const qrScanner: App = {
	isOSS: false,
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
	isOSS: false,
	name: "Reddit",
	playStoreID: "com.reddit.frontpage",
	privacyAudit: {
		permissionCount: 49,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "danger",
		reportID: "426476",
		trackerCount: 5,
		trackersRating: "danger",
	},
};

const rewe: App = {
	isOSS: false,
	name: "REWE",
	playStoreID: "de.rewe.app.mobile",
	privacyAudit: {
		permissionCount: 26,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "danger",
		reportID: "418193",
		trackerCount: 5,
		trackersRating: "danger",
	},
};

const safeVac: App = {
	name: "SafeVac",
	playStoreID: "de.pei.safevac",
	privacyAudit: {
		permissionCount: 23,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "fine",
		reportID: "225148",
		trackerCount: 0,
		trackersRating: "fine",
	},
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
	isOSS: false,
	name: "Sportschau",
	playStoreID: "de.apptelligence.sportschau.android",
	privacyAudit: {
		permissionCount: 31,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "411150",
		trackerCount: 3,
		trackersRating: "warning",
	},
};

const spotify: App = {
	isOSS: false,
	name: "Spotify",
	playStoreID: "com.spotify.music",
	privacyAudit: {
		permissionCount: 45,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "danger",
		reportID: "422100",
		trackerCount: 6,
		trackersRating: "danger",
	},
};

const squareHome: App = {
	isOSS: false,
	name: "Square Home",
	playStoreID: "com.ss.squarehome2",
	privacyAudit: {
		permissionCount: 20,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "fine",
		reportID: "421548",
		trackerCount: 0,
		trackersRating: "fine",
	},
};
const squareHomeKey: App = {
	isOSS: false,
	name: "Square Home Key",
	playStoreID: "com.ss.squarehome.key",
	privacyAudit: undefined,
};

const steam: App = {
	isOSS: false,
	name: "Steam",
	playStoreID: "com.valvesoftware.android.steam.community",
	privacyAudit: {
		permissionCount: 34,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "421776",
		trackerCount: 1,
		trackersRating: "warning",
	},
};

const svWerder: App = {
	isOSS: false,
	name: "SV Werder",
	playStoreID: "de.werder.werderbremen",
	privacyAudit: {
		permissionCount: 7,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "danger",
		reportID: "314447",
		trackerCount: 6,
		trackersRating: "danger",
	},
};

const swapfiets: App = {
	isOSS: false,
	name: "Swapfiets",
	playStoreID: "com.swapfiets",
	privacyAudit: {
		permissionCount: 12,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "284006",
		trackerCount: 3,
		trackersRating: "warning",
	},
};

const tagesschau: App = {
	isOSS: false,
	name: "Tagesschau",
	playStoreID: "de.tagesschau",
	privacyAudit: {
		permissionCount: 11,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "411693",
		trackerCount: 3,
		trackersRating: "warning",
	},
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
	isOSS: false,
	name: "Tiltification",
	playStoreID: "de.uni_bremen.informatik.sonification_apps",
	privacyAudit: {
		permissionCount: 0,
		permissionsRating: "fine",
		platform: "Exodus",
		rating: "fine",
		reportID: "200558",
		trackerCount: 0,
		trackersRating: "fine",
	},
};

const tooGoodToGo: App = {
	isOSS: false,
	name: "Too Good To Go",
	playStoreID: "com.app.tgtg",
	privacyAudit: {
		permissionCount: 22,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "danger",
		reportID: "421936",
		trackerCount: 6,
		trackersRating: "danger",
	},
};

const transfermarkt: App = {
	isOSS: false,
	name: "Transfermarkt",
	playStoreID: "de.transfermarkt.v2",
	privacyAudit: {
		permissionCount: 27,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "241977",
		trackerCount: 3,
		trackersRating: "warning",
	},
};

const warnWetter: App = {
	isOSS: false,
	name: "WarnWetter",
	playStoreID: "de.dwd.warnapp",
	privacyAudit: {
		permissionCount: 18,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "380014",
		trackerCount: 2,
		trackersRating: "warning",
	},
};

const whatsApp: App = {
	isOSS: false,
	name: "WhatsApp",
	playStoreID: "com.whatsapp",
	privacyAudit: {
		permissionCount: 81,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "424318",
		trackerCount: 0,
		trackersRating: "fine",
	},
};

const youTube: App = {
	isOSS: false,
	name: "YouTube",
	playStoreID: "com.google.android.youtube",
	privacyAudit: {
		permissionCount: 48,
		permissionsRating: "danger",
		platform: "Exodus",
		rating: "warning",
		reportID: "424507",
		trackerCount: 2,
		trackersRating: "warning",
	},
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
	ingBanking,
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
