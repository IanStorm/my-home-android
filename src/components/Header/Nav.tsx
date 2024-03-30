import {
	Apps,
	SentimentVeryDissatisfiedOutlined,
	Smartphone,
} from "@mui/icons-material";
import {
	Box,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import type { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import {
	useApps,
	useDevices,
} from "../../contexts";
import type { Path } from "../../utils/routes";
import { Title } from "./Title";

interface Props {
	readonly onNavigate?: () => void
}

export const Nav: FunctionComponent<Props> = ({
	onNavigate = () => { /* no-op */ },
}) => {
	const { apps } = useApps();
	const { devices } = useDevices();

	return (
		<List
			component="nav"
			disablePadding
			sx={{ minWidth: 400 }}
		>
			<Box px={3+(3+2)} py={2}>
				<Title />
			</Box>

			<Divider />

			<ListItem disablePadding>
				<ListItemButton
					component={Link}
					disabled={apps === undefined}
					onClick={onNavigate}
					to={"/apps" satisfies Path}
				>
					<ListItemIcon>
						{apps ? <Apps /> : <SentimentVeryDissatisfiedOutlined /> }
					</ListItemIcon>
					<ListItemText
						primary="Apps"
						secondary={apps
							? `${apps.length} app${apps.length !== 1 ? "s" : ""}`
							: "Error while loading apps"
						}
					/>
				</ListItemButton>
			</ListItem>

			<ListItem disablePadding>
				<ListItemButton
					component={Link}
					disabled={devices === undefined}
					onClick={onNavigate}
					to={"/devices" satisfies Path}
				>
					<ListItemIcon>
						{devices ? <Smartphone /> : <SentimentVeryDissatisfiedOutlined /> }
					</ListItemIcon>
					<ListItemText
						primary="Devices"
						secondary={devices
							? `${devices.length} device${devices.length !== 1 ? "s" : ""}`
							: "Error while loading devices"
						}
					/>
				</ListItemButton>
			</ListItem>
		</List>
	);
};
