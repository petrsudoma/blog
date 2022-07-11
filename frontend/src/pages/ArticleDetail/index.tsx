import { useSnackbar } from 'notistack';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Author from '../../components/Author';
import PageHeading from '../../components/PageHeading';
import { ArticleType } from '../../types';
import fetchArticle from '../../api/fetch-article';
import fetchImage from '../../api/fetch-image';
import { Image, Layout, Text } from './components';

function ArticleDetail() {
	const [article, setArticle] = useState<ArticleType>();
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
				setArticle(res.data);

				fetchImageHandler(res.data.imageId)
					.then((res) => setImage(res))
					.catch((err) => console.error(err));
			})
			.catch(() => enqueueSnackbar('Error. Try again', { variant: 'error' }));
	}, [fetchArticleHandler, enqueueSnackbar, fetchImageHandler]);

	return (
		<Layout>
			<PageHeading>{article?.title}</PageHeading>
			<Author date={article?.createdAt as string}>Elisabeth Strain</Author>
			<Image src={'data:image/png;base64, ' + image} />

			<Text>{article?.content as string}</Text>
		</Layout>
	);
}

export default ArticleDetail;
