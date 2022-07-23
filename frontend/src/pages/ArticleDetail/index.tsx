import { useSnackbar } from 'notistack';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Author from '../../components/Author';
import { ArticleType } from '../../types';
import { fetchArticle, fetchUser } from '../../api';
import { fetchImage } from '../../api';
import { Image, Layout, Text, TouchedPageHeading } from './components';
import Comments from './Comments';
import { sortByDate } from '../../utils/sortByDate';
import './markdown.css';

function ArticleDetail() {
	const [article, setArticle] = useState<ArticleType>();
	const [author, setAuthor] = useState<string>('');
	const [image, setImage] = useState<string>('');
	const { enqueueSnackbar } = useSnackbar();
	const params = useParams();

	const fetchArticleHandler = useCallback(async () => {
		return await fetchArticle(params.articleId as string);
	}, [params]);

	const fetchImageHandler = useCallback(async (imageId: string) => {
		return await fetchImage(imageId);
	}, []);

	useEffect(() => {
		fetchArticleHandler()
			.then((res) => {
				const sortedComments = sortByDate(res.data.comments);
				setArticle({ ...res.data, comments: sortedComments });

				fetchUser(res.data.user_id).then((res) => setAuthor(res.data.username));

				fetchImageHandler(res.data.image_id)
					.then((res) => setImage(res))
					.catch((err) => console.error(err));
			})
			.catch(() => enqueueSnackbar('Error. Try again', { variant: 'error' }));
	}, [fetchArticleHandler, enqueueSnackbar, fetchImageHandler]);

	return (
		<Layout>
			<TouchedPageHeading>{article?.title}</TouchedPageHeading>
			<Author date={article?.created_at as string}>{author}</Author>
			<Image src={'data:image/png;base64, ' + image} />

			<Text className='markdown' children={article?.content || ''} />

			<Comments comments={article?.comments} articleId={article?.id} />
		</Layout>
	);
}

export default ArticleDetail;
