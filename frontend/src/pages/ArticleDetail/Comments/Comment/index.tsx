import { useEffect, useState } from 'react';
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
import { downvoteComment, upvoteComment } from '../../../../api/update-comment';

TimeAgo.addDefaultLocale(en);

type CommentProps = {
	commentId: string;
	userId: string;
	content: string;
	likes: number;
	created_at: string;
};
const Comment: React.FC<CommentProps> = function (props) {
	const [username, setUsername] = useState<string>('');
	const [likeCounter, setLikeCounter] = useState<number>(0);
	const { commentId, userId, content, likes, created_at } = props;

	function formattedLikes(likes: number) {
		if (likes > 0) {
			return '+' + likes;
		}
		return likes;
	}

	function upvoteCommentHandler() {
		upvoteComment(commentId);
		setLikeCounter((prevState) => ++prevState);
	}

	function downvoteCommentHandler() {
		downvoteComment(commentId);
		setLikeCounter((prevState) => --prevState);
	}

	useEffect(() => {
		async function getUsername() {
			return await fetchUser(userId);
		}

		setLikeCounter(likes);

		getUsername()
			.then((res) => setUsername(res.data.username))
			.catch((err) => console.error(err));
	}, [userId, likes]);

	return (
		<Wrapper>
			<AvatarFlexbox>
				<Avatar />
			</AvatarFlexbox>

			<ContentFlexbox>
				<Name>{username}</Name>
				<PublishedAgo>{new TimeAgo('en=US').format(new Date(created_at))}</PublishedAgo>

				<Content>{content}</Content>

				<LikeDisplay>{formattedLikes(likeCounter)}</LikeDisplay>
				<Upvote onClick={upvoteCommentHandler} />
				<Downvote onClick={downvoteCommentHandler} />
			</ContentFlexbox>
		</Wrapper>
	);
};

export default Comment;
