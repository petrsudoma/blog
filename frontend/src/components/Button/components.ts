import styled from 'styled-components';

type ButtonComponentProps = { type: string };
export const ButtonComponent = styled.button<ButtonComponentProps>`
	font-size: 0.7em;
	background-color: var(--blue);
	color: #fff;
	border: none;
	padding: 5px 10px;
	font-weight: 200;
	border-radius: 5px;
	cursor: pointer;
	position: relative;
	bottom: 3px;
	transition: background-color 0.2s;

	:hover {
		background-color: #0a6afa;
	}

	:active {
		background-color: #044dbd;
	}
`;
