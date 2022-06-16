import styled from 'styled-components';

export const ArticlesWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ArticleComponent = styled.div`
	margin-top: 3%;
`;

export const Image = styled.div`
	background-image: url(/cat01.jpeg);
	width: 200px;
	height: 200px;
	background-size: cover;
	background-position: center;
	margin-right: 20px;
	float: left;
`;

export const ImageInfo = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 50%;
	overflow: hidden;
`;

export const Title = styled.h2``;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 10px 0;
`;

export const Author = styled.p`
	font-size: 0.6em;
	font-weight: 300;
	color: #6c757d;
`;

export const Bullet = styled.p`
	margin: 0 10px;
	color: #6c757d;
`;

export const CreationDate = styled.p`
	font-size: 0.6em;
	font-weight: 300;
	color: #6c757d;
`;

export const Perex = styled.p`
	font-size: 0.7em;
	font-family: 300;
`;

export const ArticleLink = styled.a`
	color: #007bff;
	font-size: 0.7em;
	margin-right: 20px;
`;

export const CommentsText = styled.p`
	color: #6c757d;
	font-size: 0.7em;
`;
