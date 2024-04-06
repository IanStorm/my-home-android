import type { Device } from "../../model";
import { phoneC } from "./phone-c";
import { phoneS } from "./phone-s";

export const devices = {
	phoneC,
	phoneS,
} satisfies Record<string, Device>;
