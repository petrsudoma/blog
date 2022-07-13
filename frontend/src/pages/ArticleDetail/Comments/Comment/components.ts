import styled from 'styled-components';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Wrapper = styled.div`
	width: 100%;
	max-width: 700px;
	height: 100%;
	margin-top: 20px;
	display: flex;
`;

export const AvatarFlexbox = styled.div`
	width: 10%;
	height: 100%;

	@media only screen and (max-width: 650px) {
		display: none;
	}
`;

export const ContentFlexbox = styled.div`
	width: 90%;
`;

export const Name = styled.p`
	font-size: 0.7em;
	font-weight: 700;
	display: inline;
`;

export const PublishedAgo = styled.p`
	font-size: 0.6em;
	color: #6c757d;
	display: inline;
	margin-left: 10px;
`;

export const Content = styled.p`
	font-size: 0.7em;
`;

export const LikeDisplay = styled.p`
	font-size: 0.7em;
	font-weight: 700;
	display: inline;
	position: relative;
	bottom: 10px;
	color: #212529;
`;

export const Upvote = styled(KeyboardArrowUpIcon)`
	transform: scale(0.8);
	color: #212529;
	margin-left: 5px;
	cursor: pointer;

	:hover {
		color: #000;
	}
`;

export const Downvote = styled(KeyboardArrowDownIcon)`
	transform: scale(0.8);
	color: #212529;
	cursor: pointer;

	:hover {
		color: #000;
	}
`;
