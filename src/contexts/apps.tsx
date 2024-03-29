import React from "react";

interface App {
	// TODO:
}

interface AppsStore {
	readonly apps?: ReadonlyArray<App>
}

const AppsContext = React.createContext<AppsStore>({});

export const useApps = () => React.useContext(AppsContext);

export const AppsProvider: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
	const apps: AppsStore["apps"] = [];

	return (
		<AppsContext.Provider value={{apps}}>
			{children}
		</AppsContext.Provider>
	);
};
