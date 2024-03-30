import type {
	FunctionComponent,
	PropsWithChildren,
} from "react";
import {
	createContext,
	useContext,
} from "react";

interface Meta {
	readonly displayName: string
	readonly githubURL: URL
}

interface MetaStore {
	readonly meta?: Meta
}

const MetaContext = createContext<MetaStore>({});

export const useMeta = () => useContext(MetaContext);

export const MetaProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
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
