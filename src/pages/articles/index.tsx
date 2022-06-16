import { Heading } from './components';
import Header from './Header';
import Article from './Article';
import { useArticles } from '../../hooks/useArticles';
import { ArticleType } from '../../types';

function Articles() {
	const articles = useArticles();

	return (
		<>
			<Header />
			<Heading>Recent Articles</Heading>
			{articles.map((article: ArticleType) => (
				<Article {...article} key={article.articleId} />
			))}
		</>
	);
}

export default Articles;
