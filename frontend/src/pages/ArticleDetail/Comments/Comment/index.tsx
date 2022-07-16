import { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import {
	Name,
	Wrapper,
	PublishedAgo,
	Content,
	AvatarFlexbox,
	ContentFlexbox,
	LikeDisplay,
	Upvote,
	Downvote,
} from './components';
import { Avatar } from '../components';
import { fetchUser } from '../../../../api/fetch-user';
import { postVote } from '../../../../api/post-vote';
import { fetchVotes } from '../../../../api/fetch-votes';
import { VoteType } from '../../../../types';

TimeAgo.addDefaultLocale(en);

type CommentProps = {
	commentId: string;
	userId: string;
	content: string;
	created_at: string;
};
const Comment: React.FC<CommentProps> = function (props) {
	const [username, setUsername] = useState<string>('');
	const [likeCounter, setLikeCounter] = useState<number>(0);
	const { commentId, userId, content, created_at } = props;
	const { enqueueSnackbar } = useSnackbar();

	function formatVotes(votes: number) {
		if (votes > 0) {
			return '+' + votes;
		}
		return votes;
	}

	function processVotes(votes: VoteType[]) {
		const likes = votes.filter((vote: VoteType) => vote.type === 'like');
		const dislikes = votes.filter((vote: VoteType) => vote.type === 'dislike');

		setLikeCounter(likes.length - dislikes.length);
	}

	function upvoteCommentHandler() {
		postVote(commentId, 'like')
			.then(() => {
				if (likeCounter === -1) setLikeCounter((prevState) => (prevState += 2));
				else setLikeCounter((prevState) => (prevState += 1));
			})
			.catch((err) => {
				if (err.response.status === 401) {
					enqueueSnackbar('Sign in to vote', { variant: 'warning' });
				}
			});
	}

	function downvoteCommentHandler() {
		postVote(commentId, 'dislike')
			.then(() => {
				if (likeCounter === 1) setLikeCounter((prevState) => (prevState -= 2));
				else setLikeCounter((prevState) => (prevState -= 1));
			})
			.catch((err) => {
				if (err.response.status === 401) {
					enqueueSnackbar('Sign in to vote', { variant: 'warning' });
				}
			});
	}

	useEffect(() => {
		function getUsername() {
			return fetchUser(userId);
		}

		function getVotes() {
			return fetchVotes(commentId);
		}

		setLikeCounter(0);

		getUsername()
			.then((res) => setUsername(res.data.username))
			.catch((err) => console.error(err));

		getVotes()
			.then((res) => processVotes(res.data))
			.catch((err) => console.error(err));
	}, [userId, commentId]);

	return (
		<Wrapper>
			<AvatarFlexbox>
				<Avatar />
			</AvatarFlexbox>

			<ContentFlexbox>
				<Name>{username}</Name>
				<PublishedAgo>{new TimeAgo('en=US').format(new Date(created_at))}</PublishedAgo>

				<Content>{content}</Content>

				<LikeDisplay>{formatVotes(likeCounter)}</LikeDisplay>
				<Upvote onClick={upvoteCommentHandler} />
				<Downvote onClick={downvoteCommentHandler} />
			</ContentFlexbox>
		</Wrapper>
	);
};

export default Comment;
