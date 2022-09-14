import Axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL as string;

function postComment(data: any) {
	const token = localStorage.getItem('access_token');

	return Axios.post(backendUrl + '/comments', data, {
		headers: { Authorization: 'Bearer ' + token },
	});
}

function fetchComments(articleId: string) {
	return Axios.get(backendUrl + '/comments/' + articleId);
}

export { postComment, fetchComments };
