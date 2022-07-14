import { CommentType } from '../../../types';
import Comment from './Comment';
import { AddCommentWrapper, Avatar, BreakLine, Heading, Input } from './components';

type CommentsProps = {
	comments?: CommentType[];
};
const Comments: React.FC<CommentsProps> = function (props) {
	const { comments } = props;

	return (
		<>
			<BreakLine />
			<Heading>Comments</Heading>

			<AddCommentWrapper>
				<Avatar />
				<Input placeholder='Join the discussion' />
			</AddCommentWrapper>

			{comments?.map((comment: CommentType) => (
				<Comment
					key={comment.id}
					commentId={comment.id}
					userId={comment.user_id}
					content={comment.content}
					likes={comment.likes}
					created_at={comment.created_at}
				/>
			))}
		</>
	);
};

export default Comments;
