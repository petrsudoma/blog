import styled from 'styled-components';

export const ArticleComponent = styled.div`
	margin-top: 3%;
`;

type ImageProps = {
	src: string;
};
export const Image = styled.div<ImageProps>`
	background-image: url(${(props) => props.src});
	width: 200px;
	height: 200px;
	background-size: cover;
	background-position: center;
	margin-right: 20px;
	float: left;
	cursor: pointer;

	@media only screen and (max-width: 550px) {
		width: 150px;
		height: 150px;
	}
`;

export const ImageInfo = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 50%;
	overflow: hidden;
`;

export const Title = styled.h2`
	cursor: pointer;

	@media only screen and (max-width: 550px) {
		font-size: 0.8em;
	}
`;

export const BottomWrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 10px 0;

	@media only screen and (max-width: 700px) {
		flex-direction: column;
		align-items: flex-start;
	}

	@media only screen and (max-width: 550px) {
		margin: 5px 0;
	}
`;

export const Perex = styled.p`
	cursor: pointer;
	font-size: 0.7em;
	font-family: 300;

	@media only screen and (max-width: 700px) {
		display: none;
	}
`;

export const ArticleLink = styled.a`
	cursor: pointer;
	color: #007bff;
	font-size: 0.7em;
	margin-right: 20px;

	@media only screen and (max-width: 700px) {
		font-size: 0.6em;
	}

	@media only screen and (max-width: 550px) {
		font-size: 0.5em;
	}
`;

export const CommentsText = styled.p`
	cursor: pointer;
	color: #6c757d;
	font-size: 0.7em;

	@media only screen and (max-width: 700px) {
		font-size: 0.6em;
	}

	@media only screen and (max-width: 550px) {
		font-size: 0.5em;
	}
`;
