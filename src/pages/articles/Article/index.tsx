import {
	Author,
	Wrapper,
	Bullet,
	Image,
	ImageInfo,
	Title,
	CreationDate,
	Content,
	ArticleLink,
	CommentsText,
	ArticlesWrapper,
	ArticleComponent,
} from './components';

function Article() {
	return (
		<ArticlesWrapper>
			<ArticleComponent>
				<Image />

				<ImageInfo>
					<Title>Why Do Cats Have Whiskers?</Title>

					<Wrapper>
						<Author>Elisabeth Strain</Author>
						<Bullet>&bull;</Bullet>
						<CreationDate>02/13/17</CreationDate>
					</Wrapper>

					<Content>
						A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in
						the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile
						hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body,
						like the ears, jaw and forelegs
					</Content>

					<Wrapper>
						<ArticleLink>Read whole article</ArticleLink>
						<CommentsText>4 comments</CommentsText>
					</Wrapper>
				</ImageInfo>
			</ArticleComponent>
		</ArticlesWrapper>
	);
}

export default Article;
