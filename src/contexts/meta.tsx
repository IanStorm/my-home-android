import React from "react";

interface MetaStore {
	readonly githubURL: URL
}

const MetaContext = React.createContext<MetaStore | undefined>(undefined);

export const useMeta = () => React.useContext(MetaContext);

export const MetaProvider: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
	const meta: MetaStore = {
		githubURL: new URL("https://github.com/IanStorm/my-home-android"),
	};

	return (
		<MetaContext.Provider value={meta}>
			{children}
		</MetaContext.Provider>
	);
};
