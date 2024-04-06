import type { AlertProps } from "@mui/material";
import type {
	FunctionComponent,
	PropsWithChildren,
} from "react";
import {
	createContext,
	useContext,
	useState,
} from "react";

interface Hint {
	readonly msg: string
	readonly severity: Extract<AlertProps["severity"], "error">
}

interface HintStore {
	readonly clear: () => void
	readonly hint: Hint | undefined
	readonly setHint: (hint: Hint) => void
}

const ERROR_MSG = "`useHint` not properly initialized, ensure `HintProvider` is part of the parent DOM.";
const HintContext = createContext<HintStore>({
	clear: () => { throw new Error(ERROR_MSG); },
	hint: undefined,
	setHint: () => { throw new Error(ERROR_MSG); },
});

export const useHint = () => useContext(HintContext);

export const HintProvider: FunctionComponent<Required<PropsWithChildren>> = ({ children }) => {
	const [hint, setHint] = useState<Hint | undefined>();
	const clear = () => setHint(undefined);

	return (
		<HintContext.Provider value={{ clear, hint, setHint }}>
			{children}
		</HintContext.Provider>
	);
};
