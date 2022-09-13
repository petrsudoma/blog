import Axios from 'axios';

const token = localStorage.getItem('access_token');

function fetchArticle(articleId: string) {
	return Axios.get((process.env.REACT_APP_BACKEND_URL as string) + '/articles/' + articleId);
}

function fetchArticles() {
	return Axios.get((process.env.REACT_APP_BACKEND_URL as string) + '/articles');
}

function fetchUserArticles() {
	return Axios.get((process.env.REACT_APP_BACKEND_URL as string) + '/articles/protected', {
		headers: { Authorization: 'Bearer ' + token },
	});
}

type CreateArticleType = {
	title: string;
	perex: string;
	content: string;
	image_id: string;
};
function postArticle(data: CreateArticleType) {
	return Axios.post((process.env.REACT_APP_BACKEND_URL as string) + '/articles', data, {
		headers: { Authorization: 'Bearer ' + token },
	});
}

function deleteArticle(articleId: string) {
	return Axios.delete((process.env.REACT_APP_BACKEND_URL as string) + '/articles/' + articleId, {
		headers: { Authorization: 'Bearer ' + token },
	});
}

export { fetchArticle, fetchArticles, fetchUserArticles, postArticle, deleteArticle };
