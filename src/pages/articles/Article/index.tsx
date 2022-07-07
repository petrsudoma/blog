import { useSnackbar } from 'notistack';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Author from '../../../components/Author';
import { ArticleType } from '../../../types';
import fetchImage from '../../../utils/fetch-image';
import {
	Image,
	ImageInfo,
	Title,
	Perex,
	ArticleLink,
	CommentsText,
	ArticleComponent,
	BottomWrapper,
} from './components';

type ArticleProps = ArticleType;
const Article: React.FC<ArticleProps> = function (props) {
	const [image, setImage] = useState<any>();
	const { enqueueSnackbar } = useSnackbar();
	const { title, perex, createdAt, imageId, articleId } = props;
	const navigate = useNavigate();

	const fetchImageHandler = useCallback(async () => {
		return await fetchImage(imageId);
	}, [imageId]);

	function handleArticleClick() {
		navigate('/articles/' + articleId);
	}

	useEffect(() => {
		fetchImageHandler()
			.then((res) => setImage(res))
			.catch(() => enqueueSnackbar('Error. Try again', { variant: 'error' }));
	}, [fetchImageHandler, enqueueSnackbar]);

	return (
		<ArticleComponent>
			<Image src={image} onClick={handleArticleClick} />
			<ImageInfo>
				<Title onClick={handleArticleClick}>{title}</Title>

				<Author date={createdAt}>Elisabeth Strain</Author>

				<Perex onClick={handleArticleClick}>{perex}</Perex>

				<BottomWrapper>
					<ArticleLink onClick={handleArticleClick}>Read whole article</ArticleLink>
					<CommentsText onClick={handleArticleClick}>4 comments</CommentsText>
				</BottomWrapper>
			</ImageInfo>
		</ArticleComponent>
	);
};

export default Article;
