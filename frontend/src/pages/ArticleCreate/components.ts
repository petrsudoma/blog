import styled from 'styled-components';

import { Button } from '../../components/Button';
import PageHeading from '../../components/PageHeading';

export const TouchedPageHeading = styled(PageHeading)`
	display: inline-block;
`;

export const FormComponent = styled.div`
	margin: 40px 0;
	position: relative;
`;

export const Label = styled.label`
	display: block;
	font-size: 0.7em;
	margin-bottom: 5px;
`;

export const Input = styled.input`
	font-size: 0.7em;
	padding: 5px 5px;
	width: 100%;
	max-width: 400px;
	border: 1px solid var(--grey);
	border-radius: 3px;
	outline: none;
`;

type PublishButtonProps = { type: string };
export const PublishButton = styled(Button)<PublishButtonProps>`
	margin-left: min(5%, 50px);

	@media only screen and (max-width: 520px) {
		display: block;
		margin-left: 0;
		margin-top: 15px;
	}
`;

type UploadButtonProps = {
	uploaded: boolean;
};
export const UploadButton = styled.label<UploadButtonProps>`
	background-color: ${(props) => (props.uploaded ? `var(--blue)` : `var(--grey)`)};
	padding: 5px 10px;
	font-size: 0.7em;
	font-weight: 200;
	color: #fff;
	border-radius: 3px;
	cursor: pointer;

	${(props) =>
		!props.uploaded &&
		`:hover {
		background-color: #646c74;
	}

	:active {
		background-color: #454a4f;
	}`}
`;

export const UploadTextContainer = styled.div`
	margin-top: 5px;
	position: absolute;
	width: 100%;
`;

export const UploadText = styled.p`
	font-size: 0.6em;
	display: inline;

	:after {
		content: '|';
		margin-left: 2%;
		color: var(--grey);
	}
`;

export const DeleteUpload = styled.p`
	display: inline-block;
	font-size: 0.6em;
	color: red;
	margin-left: 2%;
	cursor: pointer;
`;

export const TextArea = styled.textarea`
	width: 100%;
	max-width: 400px;
	resize: none;
	outline: none;
	border: 1px solid var(--grey);
	border-radius: 3px;
	font-size: 0.7em;
	padding: 5px 5px;
`;

export const PerexInput = styled(TextArea)`
	height: 10vh;
`;

export const ContentInput = styled(TextArea)`
	height: 30vh;
`;

export const ErrorText = styled.p`
	position: absolute;
	font-size: 0.6em;
	color: red;
`;
