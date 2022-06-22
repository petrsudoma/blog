import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export const Form = styled.form`
	width: 300px;
	height: 250px;
	box-shadow: 0 16px 48px rgba(0, 0, 0, 0.175);
	margin-top: calc(50px + 5%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
`;

export const MarginComponent = styled.div`
	height: 100%;
	width: 80%;
	margin: 10% auto;
`;

export const Heading = styled.h3`
	font-weight: bold;
`;

export const Label = styled.label`
	font-size: 0.7em;
`;

export const Input = styled.input`
	height: 30px;
	width: 100%;
	font-size: 0.7em;
	padding-left: 5px;
	outline: none;
`;

export const Button = styled.button`
	position: absolute;
	right: 10%;
	bottom: 5%;
	font-size: 0.7em;
	background-color: var(--blue);
	border: none;
	border-radius: 5px;
	color: #fff;
	padding: 5px 5px;
	cursor: pointer;

	:hover {
		background-color: #0062cc;
	}

	:active {
		background-color: #003977;
	}
`;
