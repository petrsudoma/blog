import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as NavLink } from 'react-router-dom';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const HeaderComponent = styled.div`
	width: 100%;
	height: 50px;
	background-color: #f8f9fa;
	display: flex;
	align-items: center;
	position: absolute;
	left: 0;
	top: 0;
	padding-left: 15%;

	@media only screen and (max-width: 400px) {
		padding-left: 5%;
	}
`;

export const LeftLinks = styled.div`
	height: 100%;
	width: 50%;
	min-width: 200px;
	display: flex;
	align-items: center;
`;

export const Logo = styled.svg`
	width: 40px;
	height: 50px;
	background-image: url(/logo.svg);
	background-repeat: no-repeat;

	@media only screen and (max-width: 400px) {
		display: none;
	}
`;

export const RightLinks = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media only screen and (max-width: 850px) {
		& > #right-link {
			display: none;
		}
	}
`;

export const Link = styled(NavLink)`
	font-size: 0.7em;
	margin-left: 2%;
	cursor: pointer;
	text-decoration: none;
	color: #000;
`;

export const LogoutButton = styled.button`
	font-size: 0.7em;
	border: none;
	background-color: transparent;
	margin-left: 2%;
	color: var(--blue);
	cursor: pointer;
`;

export const SignInLink = styled(NavLink)`
	font-size: 0.7em;
	position: absolute;
	right: 15%;
	color: var(--blue);
	cursor: pointer;
	text-decoration: none;
`;

export const SignInIcon = styled(ArrowForwardIcon)`
	position: absolute;
	top: -8px;
	color: #2b7efb;
	transform: scale(0.5);

	@media only screen and (max-width: 400px) {
		visibility: hidden;
	}
`;

export const BurgerMenu = styled(MenuIcon)`
	margin-right: 20%;
	cursor: pointer;
	visibility: hidden;

	@media only screen and (max-width: 850px) {
		visibility: visible;
	}
`;
