import Axios from 'axios';

async function fetchArticle(articleId: string) {
	return await Axios.get((process.env.REACT_APP_BACKEND_URL as string) + 'articles/' + articleId);
}

export default fetchArticle;
