import styled from 'styled-components';

export const BreakLine = styled.div`
	width: 100%;
	max-width: 700px;
	height: 2px;
	background-color: #dfdfdf;
	margin-top: 40px;
	margin-bottom: 10px;
`;

export const Heading = styled.h3``;

export const AddCommentWrapper = styled.form`
	width: 100%;
	max-width: 700px;
	height: 50px;
	display: flex;
	align-items: center;
	margin-top: 10px;
`;

export const Avatar = styled.div`
	min-width: 40px;
	max-width: 40px;
	height: 40px;
	border-radius: 50%;
	background-image: url(/cat01.jpeg);
	background-size: cover;
	background-position: center;
`;

export const Input = styled.input`
	height: 30px;
	width: 100%;
	margin-left: 20px;
	font-size: 0.7em;
	padding-left: 5px;
	outline: none;
`;
