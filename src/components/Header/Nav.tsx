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
import React from "react";
import { Link } from "react-router-dom";

import {
	useApps,
	useDevices,
} from "../../contexts";
import type { Path } from "../../utils/routes";
import { Title } from "./Title";

interface NavProps {
	readonly onNavigate?: () => void
}

export const Nav: React.FunctionComponent<NavProps> = ({
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
					component={Link} to={"/apps" satisfies Path}
					disabled={apps === undefined}
					onClick={onNavigate}
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
					component={Link} to={"/devices" satisfies Path}
					disabled={devices === undefined}
					onClick={onNavigate}
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
