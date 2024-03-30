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
	| false
	| undefined
	| (model.OSSInfo & { readonly href: string })
;

export interface App {
	readonly id: string
	readonly isOSS?: OSS
	readonly name: model.App["name"]
}

interface AppsStore {
	readonly apps?: ReadonlyArray<App>
}

const AppsContext = createContext<AppsStore>({});

export const useApps = () => useContext(AppsContext);

export const AppsProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
	const apps: AppsStore["apps"] = Object.entries(data.apps).map(([id, app]) => {
		let isOSS: App["isOSS"];
		if (typeof app.isOSS === "object") {
			const href = `https://${app.isOSS.host.toLowerCase()}.com/${app.isOSS.owner}/${app.isOSS.repository}`;
			isOSS = { ...app.isOSS, href };
		} else { app.isOSS satisfies false | undefined;
			isOSS = app.isOSS;
		}

		return {
			id,
			isOSS,
			name: app.name,
		};
	});

	return (
		<AppsContext.Provider value={{apps}}>
			{children}
		</AppsContext.Provider>
	);
};
