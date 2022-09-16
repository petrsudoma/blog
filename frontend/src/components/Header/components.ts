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
	justify-content: space-between;
	position: absolute;
	left: 0;
	top: 0;
	padding: 0 5%;
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

export const LinksWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const Link = styled(NavLink)`
	font-size: 0.7em;
	cursor: pointer;
	text-decoration: none;
	color: #000;
	white-space: pre;
	margin-right: 40px;

	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

export const ImageLink = styled(NavLink)`
	margin-right: 40px;
`;

type LogoutButtonProps = {
	headerVariant?: boolean;
};
export const LogoutButton = styled.button<LogoutButtonProps>`
	font-size: 0.7em;
	border: none;
	background-color: transparent;
	color: var(--blue);
	cursor: pointer;

	${(props) =>
		!!props.headerVariant &&
		`@media only screen and (max-width: 768px) {
		display: none;
	}`}
`;

export const SignInLink = styled(NavLink)`
	font-size: 0.7em;
	position: absolute;
	right: 10%;
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

	@media only screen and (max-width: 768px) {
		visibility: visible;
	}
`;
