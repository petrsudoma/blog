import { ArticlesWrapper, Heading } from './components';
import Header from './Header';
import Article from './Article';
import { useArticles } from '../../hooks/useArticles';
import { ArticleType } from '../../types';

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
			<Header />
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
