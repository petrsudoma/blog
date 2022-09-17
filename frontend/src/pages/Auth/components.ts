import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;

type BoxProps = {
	signIn: boolean;
};
export const Box = styled.div<BoxProps>`
	width: 300px;
	height: ${(props) => (props.signIn ? '250px' : '320px')};
	box-shadow: 0 16px 48px rgba(0, 0, 0, 0.175);
	margin-top: calc(50px + 5%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
`;

export const SwitchModeButton = styled.p`
	color: var(--blue);
	font-size: 0.7em;
	position: absolute;
	bottom: 20px;
	cursor: pointer;
	left: 30px;
`;
