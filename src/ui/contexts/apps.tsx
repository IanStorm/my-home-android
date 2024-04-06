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

type OSS =
	| Exclude<model.App["isOSS"], model.OSSInfo>
	| (model.OSSInfo & { readonly href: string })
;

interface PlayStore {
	readonly href: string
	readonly id: Required<model.App["playStoreID"]>
}

type PrivacyAudit =
	| Exclude<model.App["privacyAudit"], model.PrivacyAudit>
	| (model.PrivacyAudit & { readonly href: string })
;

export type App =
	& Pick<model.App,
		| "name"
	> & {
		readonly id: model.AppID
		readonly isOSS?: OSS
		readonly playStore?: PlayStore
		readonly privacyAudit?: PrivacyAudit
	}
;

interface AppsStore {
	readonly apps?: ReadonlyArray<App>
}

const AppsContext = createContext<AppsStore>({});

export const useApps = () => useContext(AppsContext);

export const AppsProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
	const apps: AppsStore["apps"] = Object.values(data.apps).map((app) => {
		let isOSS: App["isOSS"];
		if (typeof app.isOSS === "object") {
			const href = `https://${app.isOSS.host.toLowerCase()}.com/${app.isOSS.owner}/${app.isOSS.repository}`;
			isOSS = { ...app.isOSS, href };
		} else { app.isOSS satisfies false | undefined;
			isOSS = app.isOSS;
		}

		let privacyAudit: App["privacyAudit"];
		if (typeof app.privacyAudit === "object") {
			const href = `https://reports.exodus-privacy.eu.org/en/reports/${app.privacyAudit.reportID}`;
			privacyAudit = { ...app.privacyAudit, href };
		} else { app.privacyAudit satisfies undefined;
			privacyAudit = app.privacyAudit;
		}

		return {
			id: app.playStoreID === false ? app.id : app.playStoreID,
			isOSS,
			name: app.name,
			playStore: !app.playStoreID ? undefined : {
				href: `https://play.google.com/store/apps/details?id=${app.playStoreID}`,
				id: app.playStoreID,
			},
			privacyAudit,
		};
	});

	return (
		<AppsContext.Provider value={{ apps }}>
			{children}
		</AppsContext.Provider>
	);
};
