import { ArticlesWrapper, Heading } from './components';
import Article from './Article';
import { useArticles } from '../../hooks/useArticles';
import { ArticleType } from '../../types';
import LoadingCircle from '../../components/LoadingCircle';

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
			<Heading>Recent Articles</Heading>

			<ArticlesWrapper>
				{sortArticles(articles).map((article: ArticleType) => {
					return <Article {...article} key={article.articleId} />;
				})}
			</ArticlesWrapper>
		</>
	);
}

export default Articles;
