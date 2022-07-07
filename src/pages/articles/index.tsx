import { ArticlesWrapper } from './components';
import Article from './Article';
import { useArticles } from '../../hooks/useArticles';
import { ArticleType } from '../../types';
import LoadingCircle from '../../components/LoadingCircle';
import PageHeading from '../../components/PageHeading';

function Articles() {
	const articles = useArticles();

	function sortArticles(articles: ArticleType[]) {
		return articles.sort((a, b) => {
			if (new Date(a.createdAt) > new Date(b.createdAt)) return 1;
			else return -1;
		});
	}

	return (
		<>
			{articles.length !== 0 ? null : <LoadingCircle />}
			<PageHeading>Recent Articles</PageHeading>

			<ArticlesWrapper>
				{sortArticles(articles).map((article: ArticleType) => {
					return <Article {...article} key={article.articleId} />;
				})}
			</ArticlesWrapper>
		</>
	);
}

export default Articles;
