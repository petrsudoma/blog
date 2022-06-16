import styled from 'styled-components';

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

export const Logo = styled.svg`
	width: 40px;
	height: 50px;
	background-image: url(/logo.svg);
	background-repeat: no-repeat;
`;

export const Link = styled.a`
	font-size: 0.7em;
	margin-left: 2%;
	cursor: pointer;
`;

export const SignInLink = styled.a`
	font-size: 0.7em;
	position: absolute;
	right: 15%;
	color: #2b7efb;
	cursor: pointer;

	@media only screen and (max-width: 400px) {
		right: 5%;
	}
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
