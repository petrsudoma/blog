import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import PageHeading from '../../components/PageHeading';

export const Layout = styled.div`
	display: flex;
	flex-direction: column;

	@media only screen and (max-width: 600px) {
		align-items: center;
	}
`;

export const TouchedPageHeading = styled(PageHeading)`
	@media only screen and (max-width: 600px) {
		font-size: 5vw;
	}
`;

type ImageProps = {
	src: string;
};
export const Image = styled.div<ImageProps>`
	width: 80%;
	min-width: 300px;
	max-width: 450px;
	height: 300px;
	background-image: url(${(props) => props.src});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;

export const Text = styled(ReactMarkdown)`
	margin-top: max(30px, 3%);
	width: 100%;
	max-width: 700px;
	* {
		font-size: 15px;
		word-spacing: 1px;
		line-height: 1.5em;
	}
`;
