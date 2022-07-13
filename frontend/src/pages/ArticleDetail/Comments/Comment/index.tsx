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

function Comment() {
	return (
		<Wrapper>
			<AvatarFlexbox>
				<Avatar />
			</AvatarFlexbox>

			<ContentFlexbox>
				<Name>Lily Hawkins</Name>
				<PublishedAgo>2 hours ago</PublishedAgo>

				<Content>
					You see, wire telegraph is a kind of a very, very long cat. You pull his tail in New York
					and his head is meowing in Los Angeles. Do you understand this? And radio operates exactly
					the same way: you send signals here, they receive them there. The only difference is that
					there is no cat.
				</Content>

				<LikeDisplay>+16</LikeDisplay>
				<Upvote />
				<Downvote />
			</ContentFlexbox>
		</Wrapper>
	);
}

export default Comment;
