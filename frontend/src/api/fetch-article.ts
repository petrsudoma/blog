import Axios from 'axios';

function fetchArticle(articleId: string) {
	return Axios.get(process.env.REACT_APP_BACKEND_URL + '/articles/' + articleId, {
		headers: { 'X-API-KEY': process.env.REACT_APP_API_KEY as string },
	});
}

export default fetchArticle;
