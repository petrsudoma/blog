import Axios from 'axios';

async function fetchArticle(articleId: string) {
	return Axios.get((process.env.REACT_APP_BACKEND_URL as string) + '/articles/' + articleId);
}

type CreateArticleType = {
	title: string;
	perex: string;
	content: string;
	image_id: string;
};
function postArticle(data: CreateArticleType) {
	const token = localStorage.getItem('access_token');
	return Axios.post((process.env.REACT_APP_BACKEND_URL as string) + '/articles', data, {
		headers: { Authorization: 'Bearer ' + token },
	});
}

export { fetchArticle, postArticle };
