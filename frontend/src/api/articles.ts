import Axios from 'axios';

function fetchArticle(articleId: string) {
	return Axios.get((process.env.REACT_APP_BACKEND_URL as string) + 'articles/' + articleId);
}

export { fetchArticle };
