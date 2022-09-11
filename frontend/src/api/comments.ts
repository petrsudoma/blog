import Axios from 'axios';

function postComment(data: any) {
	const token = localStorage.getItem('access_token');

	return Axios.post((process.env.REACT_APP_BACKEND_URL as string) + '/comments', data, {
		headers: { Authorization: 'Bearer ' + token },
	});
}

function fetchComments(articleId: string) {
	return Axios.get((process.env.REACT_APP_BACKEND_URL as string) + '/comments/' + articleId);
}

export { postComment, fetchComments };
