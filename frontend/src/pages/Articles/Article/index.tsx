import { useSnackbar } from 'notistack';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Author from '../../../components/Author';
import { ArticleType } from '../../../types';
import { fetchImage, fetchUser } from '../../../api';
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
	const [image, setImage] = useState<string>('');
	const [author, setAuthor] = useState<string>('');
	const { enqueueSnackbar } = useSnackbar();
	const { title, perex, created_at, image_id, id, user_id } = props;
	const navigate = useNavigate();

	const fetchImageHandler = useCallback(async () => {
		return await fetchImage(image_id);
	}, [image_id]);

	function handleArticleClick() {
		navigate('/articles/' + id);
	}

	useEffect(() => {
		fetchUser(user_id).then((res) => setAuthor(res.data.username));
		fetchImageHandler().then((res) => setImage(res));
	}, [fetchImageHandler, enqueueSnackbar, user_id]);

	return (
		<ArticleComponent>
			<Image src={'data:image/png;base64, ' + image} onClick={handleArticleClick} />
			<ImageInfo>
				<Title onClick={handleArticleClick}>{title}</Title>

				<Author date={created_at}>{author}</Author>

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
