import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Author from '../../../components/Author';
import { ArticleType } from '../../../types';
import { fetchComments, fetchImage, fetchUser } from '../../../api';
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
	const [numOfComments, setNumOfComments] = useState<number>(0);
	const navigate = useNavigate();
	const { title, perex, created_at, image_id, id, user_id } = props;

	const fetchImageHandler = useCallback(() => {
		return fetchImage(image_id);
	}, [image_id]);

	function handleArticleClick() {
		navigate('/articles/' + id);
	}

	useEffect(() => {
		fetchUser(user_id).then((res) => setAuthor(res.data.username));
		fetchImageHandler().then((res) => setImage(res));
		fetchComments(id).then((res) => setNumOfComments(res.data.length));
	}, [fetchImageHandler, user_id, id]);

	return (
		<ArticleComponent>
			<Image src={'data:image/png;base64, ' + image} onClick={handleArticleClick} />
			<ImageInfo>
				<Title onClick={handleArticleClick}>{title}</Title>

				<Author date={created_at}>{author}</Author>

				<Perex onClick={handleArticleClick}>{perex}</Perex>

				<BottomWrapper>
					<ArticleLink onClick={handleArticleClick}>Read whole article</ArticleLink>
					<CommentsText onClick={handleArticleClick}>{numOfComments} comments</CommentsText>
				</BottomWrapper>
			</ImageInfo>
		</ArticleComponent>
	);
};

export default Article;
