import { useSnackbar } from 'notistack';
import { useContext, useState } from 'react';
import { postComment } from '../../../api';
import { LoginContext } from '../../../context/login';

import { CommentType } from '../../../types';
import Comment from './Comment';
import { AddCommentWrapper, Avatar, BreakLine, Heading, Input } from './components';

type CommentsProps = {
	comments?: CommentType[];
	articleId?: string;
};
const Comments: React.FC<CommentsProps> = function (props) {
	const [newCommentContent, setNewCommentContent] = useState<string>('');
	const { enqueueSnackbar } = useSnackbar();
	const loginContext = useContext(LoginContext);

	const { comments, articleId } = props;

	async function createComment(e: any) {
		if (!newCommentContent) {
			e.preventDefault();
			return;
		}
		const newComment = {
			content: newCommentContent,
			article_id: articleId,
		};

		if (loginContext?.signedIn) return postComment(newComment);

		enqueueSnackbar('Sign in to comment', { variant: 'warning' });
		e.preventDefault();
	}

	return (
		<>
			<BreakLine />
			<Heading>Comments</Heading>

			<AddCommentWrapper onSubmit={createComment}>
				<Avatar />
				<Input
					placeholder='Join the discussion'
					onChange={(event) => setNewCommentContent(event.target.value)}
				/>
			</AddCommentWrapper>

			{comments?.map((comment: CommentType) => (
				<Comment
					key={comment.id}
					commentId={comment.id}
					userId={comment.user_id}
					content={comment.content}
					created_at={comment.created_at}
				/>
			))}
		</>
	);
};

export default Comments;
