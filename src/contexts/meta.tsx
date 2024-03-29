import React from "react";

interface Meta {
	readonly displayName: string
	readonly githubURL: URL
}

interface MetaStore {
	readonly meta?: Meta
}

const MetaContext = React.createContext<MetaStore>({});

export const useMeta = () => React.useContext(MetaContext);

export const MetaProvider: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
	const meta: Meta = {
		displayName: "My Home - Android",
		githubURL: new URL("https://github.com/IanStorm/my-home-android"),
	};

	return (
		<MetaContext.Provider value={{ meta }}>
			{children}
		</MetaContext.Provider>
	);
};
