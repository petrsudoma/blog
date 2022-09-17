import styled from 'styled-components';

export const MarginComponent = styled.div`
	height: 100%;
	width: 80%;
	margin: 10% auto;
`;

export const Form = styled.form`
	height: 100%;
`;

export const Heading = styled.h3`
	font-weight: bold;
`;

export const InputComponent = styled.div`
	position: relative;
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
	margin-bottom: 10px;
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

export const ErrorText = styled.p`
	position: absolute;
	bottom: -5px;
	font-size: 0.5em;
	color: red;
`;
