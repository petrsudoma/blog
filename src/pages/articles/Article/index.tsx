import { ArticleType } from '../../../types';
import {
	Author,
	Wrapper,
	Bullet,
	Image,
	ImageInfo,
	Title,
	CreationDate,
	Perex,
	ArticleLink,
	CommentsText,
	ArticlesWrapper,
	ArticleComponent,
} from './components';

type ArticleProps = ArticleType;
const Article: React.FC<ArticleProps> = function (props) {
	const { title, perex } = props;

	return (
		<ArticlesWrapper>
			<ArticleComponent>
				<Image />

				<ImageInfo>
					<Title>{title}</Title>

					<Wrapper>
						<Author>Elisabeth Strain</Author>
						<Bullet>&bull;</Bullet>
						<CreationDate>02/13/17</CreationDate>
					</Wrapper>

					<Perex>{perex}</Perex>

					<Wrapper>
						<ArticleLink>Read whole article</ArticleLink>
						<CommentsText>4 comments</CommentsText>
					</Wrapper>
				</ImageInfo>
			</ArticleComponent>
		</ArticlesWrapper>
	);
};

export default Article;
