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
	@media only screen and (max-width: 550px) {
		font-size: 0.8em;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 10px 0;

	@media only screen and (max-width: 550px) {
		margin: 5px 0;
	}
`;

export const BottomWrapper = styled(Wrapper)`
	@media only screen and (max-width: 700px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const Author = styled.p`
	font-size: 0.6em;
	font-weight: 300;
	color: #6c757d;

	@media only screen and (max-width: 550px) {
		font-size: 0.4em;
	}
`;

export const Bullet = styled.p`
	margin: 0 10px;
	color: #6c757d;

	@media only screen and (max-width: 550px) {
		margin: 0 5px;
	}
`;

export const CreationDate = styled.p`
	font-size: 0.6em;
	font-weight: 300;
	color: #6c757d;

	@media only screen and (max-width: 550px) {
		font-size: 0.4em;
	}
`;

export const Perex = styled.p`
	font-size: 0.7em;
	font-family: 300;

	@media only screen and (max-width: 700px) {
		display: none;
	}
`;

export const ArticleLink = styled.a`
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
	color: #6c757d;
	font-size: 0.7em;

	@media only screen and (max-width: 700px) {
		font-size: 0.6em;
	}

	@media only screen and (max-width: 550px) {
		font-size: 0.5em;
	}
`;
