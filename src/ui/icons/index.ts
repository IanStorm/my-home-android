import type { SvgIconComponent } from "@mui/icons-material";
import {
	Apps,
	Code,
	CodeOff,
	DarkMode,
	Devices,
	ExpandMore,
	GitHub,
	GppBad,
	GppGood,
	GppMaybe,
	LightMode,
	Menu,
	OpenInNew,
	PlayArrow,
	PlayDisabled,
	SentimentVeryDissatisfiedOutlined,
	Shield,
	Smartphone,
	TabletAndroid,
} from "@mui/icons-material";
import type { SvgIconProps } from "@mui/material";

export type Icon = SvgIconComponent;
export type IconProps = SvgIconProps;

export const AppsIcon = Apps;

export const DevicesIcon = Devices;
export const DeviceTypePhoneIcon = Smartphone;
export const DeviceTypeTabletIcon = TabletAndroid;

export const ExpandIcon = ExpandMore;

export const GitHubIcon = GitHub;

export const MenuIcon = Menu;

export const DarkModeIcon = DarkMode;
export const LightModeIcon = LightMode;

export const OpenExternalIcon = OpenInNew;

export const OSSActiveIcon = Code;
export const OSSInactiveIcon = CodeOff;

export const PlayStoreActiveIcon = PlayArrow;
export const PlayStoreInactiveIcon = PlayDisabled;

export const PrivacyDangerIcon = GppBad;
export const PrivacyFineIcon = GppGood;
export const PrivacyUnknownIcon = Shield;
export const PrivacyWarningIcon = GppMaybe;

export const SadSmileyIcon = SentimentVeryDissatisfiedOutlined;
