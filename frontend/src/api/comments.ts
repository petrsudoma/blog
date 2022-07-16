import Axios from 'axios';

function postComment(data: any) {
	const token = localStorage.getItem('access_token');

	try {
		Axios.post((process.env.REACT_APP_BACKEND_URL as string) + 'comments', data, {
			headers: { Authorization: 'Bearer ' + token },
		});
	} catch (err) {
		console.error(err);
	}
}

export { postComment };
