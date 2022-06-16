import { Heading } from './components';
import Header from './Header';
import Article from './Article';

function Articles() {
	return (
		<>
			<Header />
			<Heading>Recent Articles</Heading>
			<Article />
		</>
	);
}

export default Articles;
