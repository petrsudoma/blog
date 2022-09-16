import { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';

import { ArticlesWrapper } from './components';
import Article from './Article';
import { ArticleType } from '../../types';
import LoadingCircle from '../../components/LoadingCircle';
import PageHeading from '../../components/PageHeading';
import { sortByDate } from '../../utils/sortByDate';
import { fetchArticles } from '../../api';
import { fetchError } from '../../utils/apiError';

function HomePage() {
	const [articles, setArticles] = useState<ArticleType[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		setLoading(true);
		fetchArticles()
			.then((res) => {
				setArticles(res.data);
			})
			.catch(() => {
				const [message, options] = fetchError();
				enqueueSnackbar(message, options);
			})
			.finally(() => setLoading(false));
	}, [enqueueSnackbar]);

	return (
		<>
			{loading && <LoadingCircle />}
			<PageHeading>Recent Articles</PageHeading>

			<ArticlesWrapper>
				{sortByDate(articles).map((article: ArticleType) => {
					return <Article {...article} key={article.id} />;
				})}
			</ArticlesWrapper>
		</>
	);
}

export default HomePage;
