import Comment from './Comment';
import { AddCommentWrapper, Avatar, BreakLine, Heading, Input } from './components';

function Comments() {
	return (
		<>
			<BreakLine />
			<Heading>Comments</Heading>

			<AddCommentWrapper>
				<Avatar />
				<Input placeholder='Join the discussion' />
			</AddCommentWrapper>

			<Comment />
			<Comment />
		</>
	);
}

export default Comments;
