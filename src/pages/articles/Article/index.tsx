import { useEffect, useState } from 'react';
import { ArticleType } from '../../../types';
import getImage from '../../../utils/get-image';
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
	ArticleComponent,
	BottomWrapper,
} from './components';

type ArticleProps = ArticleType;
const Article: React.FC<ArticleProps> = function (props) {
	const [image, setImage] = useState<any>();
	const { title, perex, createdAt } = props;

	useEffect(() => {
		getImageHandler().then((res) => setImage(URL.createObjectURL(res.data)));
	}, []);

	async function getImageHandler() {
		return await getImage();
	}

	return (
		<ArticleComponent>
			<Image src={image} />
			<ImageInfo>
				<Title>{title}</Title>

				<Wrapper>
					<Author>Elisabeth Strain</Author>
					<Bullet>&bull;</Bullet>
					<CreationDate>
						{`${new Date(createdAt).getMonth() + 1}/${new Date(createdAt).getDate()}/${new Date(
							createdAt
						).getFullYear()}`}
					</CreationDate>
				</Wrapper>

				<Perex>{perex}</Perex>

				<BottomWrapper>
					<ArticleLink>Read whole article</ArticleLink>
					<CommentsText>4 comments</CommentsText>
				</BottomWrapper>
			</ImageInfo>
		</ArticleComponent>
	);
};

export default Article;
