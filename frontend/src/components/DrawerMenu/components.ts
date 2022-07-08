import { Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DrawerMenuComponent = styled(Box)`
	width: 50vw;

	@media only screen and (max-width: 600px) {
		width: 100vw;
	}
`;

export const DrawerList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	list-style: none;
	margin-top: 10%;
`;

export const DrawerListItem = styled.li`
	margin-top: 10%;
`;

export const DrawerLink = styled(NavLink)`
	font-size: 0.7em;
	text-decoration: none;
	color: #000;
	cursor: pointer;
`;

export const CloseButton = styled(CloseIcon)`
	position: absolute;
	right: 5%;
	top: 1%;
	cursor: pointer;
`;
