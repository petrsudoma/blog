import { ArticlesWrapper } from './components';
import Article from './Article';
import { useArticles } from '../../hooks/useArticles';
import { ArticleType } from '../../types';
import LoadingCircle from '../../components/LoadingCircle';
import PageHeading from '../../components/PageHeading';
import { sortByDate } from '../../utils/sortByDate';

function Articles() {
	const articles = useArticles();

	return (
		<>
			{articles.length !== 0 ? null : <LoadingCircle />}
			<PageHeading>Recent Articles</PageHeading>

			<ArticlesWrapper>
				{sortByDate(articles).map((article: ArticleType) => {
					return <Article {...article} key={article.id} />;
				})}
			</ArticlesWrapper>
		</>
	);
}

export default Articles;
